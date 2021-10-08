import { Component, createSignal } from "solid-js";

const [count, setCount] = createSignal(0);

const Description: Component = () => {
  return (
    <div class='max-w-[30%]'>
      <p class='text-yellow-500 uppercase'>sneaker company</p>
      <h1 class='capitalize text-5xl'>fall limited edition sneakers</h1>
      <p class='text-gray-500 my-10 text-sm'>These low-profile sneakers are your perfect casual wear companion. Featuring a
        durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
      <div class='flex gap-5 items-center font-bold'>
        <h2 class='text-3xl'>$125.00</h2>
        <p class='bg-[#FEEEE2] px-3 py-1 rounded-lg text-yellow-500'>50%</p>
      </div>
      <p class='text-gray-400 line-through'>$250.00</p>

      <div class='mt-5 flex gap-5'>
        <div class='flex items-center justify-between bg-gray-100 h-14 w-40 px-5 rounded-lg'>
          <button class='font-bold text-yellow-500 text-3xl hover:text-yellow-300' onClick={() => setCount(c => c > 0 ? c-1 : 0)}>-</button>
          <p class='font-bold'>{count()}</p>
          <button class='font-bold text-yellow-500 text-3xl hover:text-yellow-300' onClick={() => setCount(c => c+1)}>+ </button>
        </div>
        <button class='flex items-center justify-center gap-2 bg-yellow-500 h-14 w-50 px-5 rounded-lg whiter--init'>
          <svg class='cursor-pointer filter transition hover:brightness-0 duration-300' width="22" height="22" xmlns="http://www.w3.org/2000/svg">
            <path fill='white' d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill-rule="nonzero"/>
          </svg>
          <span class='text-white font-bold'>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default Description;