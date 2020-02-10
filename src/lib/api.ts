import axios, { AxiosResponse } from "axios";

type ResourceName = "featured" | "carousel";

interface FetchInstruction {
  resource_path: ResourceName;
}

const apiEndpoint = "http://demo3136867.mockable.io";

const instance = axios.create();

export function get<T, R = AxiosResponse<any>>({
  resource_path
}: FetchInstruction): Promise<R> {
  const url = `${apiEndpoint}/${resource_path}`;
  return instance.get(url);
}
