import { useState } from "react";

import "./App.css";
import PreviewModel from "./components/Modal/PreviewModel";
import ShadowButton from "./components/Button/ShadowButton";
import WhiteButton from "./components/Button/WhiteButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid xl:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5 w-11/12 mx-auto my-10">
        <PreviewModel />
        <PreviewModel />
        <PreviewModel />
        <PreviewModel />
        <PreviewModel />
        <PreviewModel />
        <PreviewModel />
        <PreviewModel />
      </div>
      <div className="w-1/2 bg-black">
      <div className="w-2/3 ml-15 py-6 flex flex-row gap-2">
        <ShadowButton/>
        <WhiteButton/>
      </div>
      </div>

    </>
  );
}

export default App;
