import { Type, Errors, ValidationError, getFunctionName } from "io-ts";
import { isRight, Left } from "fp-ts/lib/Either";
import { initial, last, flatten, get } from "lodash";

function stringify(v: any) {
  if (typeof v === "function") {
    return getFunctionName(v);
  }
  if (typeof v === "number" && !isFinite(v)) {
    if (isNaN(v)) {
      return "NaN";
    }
    return v > 0 ? "Infinity" : "-Infinity";
  }
  return JSON.stringify(v, null, 2);
}

function process(error: ValidationError) {
  const context = error.context;

  const path = flatten([
    initial(context).map(entry => entry.key),
    get(last(context), "key") + ":" + get(last(context), "type.name") || "NONE"
  ]).join("/");

  return {
    value: stringify(error.value),
    path: path
  };
}

function report(result: Left<Errors>) {
  return result.left.map(error => {
    return {
      ...(!!error.message ? { message: error.message } : process(error)),
      object: (get(error.context[0], "actual") as { [k: string]: any }) || {}
    };
  });
}

export function withDecoded<A, O, OUT>(
  codec: Type<A, O, any>,
  data: any,
  transform: (decoded: A) => OUT
) {
  const decoded = codec.decode(data);

  if (isRight(decoded)) {
    const r = decoded.right;

    return transform(r);
  } else {
    const r = report(decoded);
    console.error(
      `Unable to parse model using ${codec.name}, there were ${decoded.left.length} errors`,
      r
    );
    throw new Error(
      `Unable to parse model using ${codec.name}, there were ${decoded.left.length} errors\n${r}`
    );
  }
}
