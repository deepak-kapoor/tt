import React from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import Carousel from "./components/carousel/Carousel";
import Featured from "./components/featured/Featured";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Carousel />
        <Featured />
      </div>
    </Provider>
  );
};

export default App;
