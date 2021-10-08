import type { Component } from "solid-js";
import { showCart, setShowCart } from "~/components/organisms/Header";

const ShoppingCart: Component = () => {
  return (
    <div
      ref={wrapper => {
        const onClick = (e) => !wrapper.contains(e.target) && showCart() && setShowCart(false);
        document.body.addEventListener('click', onClick)
      }}
      class={`flex flex-col absolute -bottom-68 -left-45 h-64 w-96 bg-white shadow ${
        showCart() ? 'visible' : 'invisible'
      }`}
    >
      <p class='py-2 pl-6 text-left'>Cart</p>
      <hr/>
      <div class='flex-1 flex items-center justify-center'>
        <span class='text-gray-400'>Your cart is empty</span>
      </div>
    </div>
  );
};

export default ShoppingCart;