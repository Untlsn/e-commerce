import { Component, createSignal, For } from "solid-js";
import images from '~/assets/images/images';

const [selectImage, setSelectImage] = createSignal(0);



const ImageHandler: Component = () => {
  return (
    <div class='w-124'>
      <img class='mb-4 rounded-xl select-none' src={images[selectImage()]} alt=""/>
      <div class='flex gap-4'>
        <For each={images.slice(0, 4)}>{(src, index) => (
          <div
            class={`cursor-pointer select-none overflow-hidden rounded-xl border-2 whiter--init hover:[whiter] ${
              selectImage() == index() ? 'border-orange-500 whiter' : ''
            }`}
            onClick={[setSelectImage, index()]}
          >
            <img src={src} alt=""/>
          </div>
        )}</For>
      </div>
    </div>
  );
};

export default ImageHandler;