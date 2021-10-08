import { Component } from "solid-js";
import Header from "./components/organisms/Header";
import ImageHandler from "~/components/organisms/ImageHandler";
import Declaration from "~/components/organisms/Description";

const App: Component = () => {
  return (
    <>
      <Header />
      <div class='flex items-center justify-evenly mx-[10vw]'>
        <ImageHandler />
        <Declaration />
      </div>
    </>
  );
};

export default App;
