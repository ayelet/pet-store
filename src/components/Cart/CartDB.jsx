// import React from "react";
// import { useState } from "react";

// import { getByPlaceholderText } from "@testing-library/dom";

// import { CartContext } from "../CartContext/CartContext";

class ShopCart {
  constructor() {
    this.items = [
      { id: 1, qty: 2, price: 24.99, name: "name2" },
      { id: 2, qty: 1, price: 3.75, name: "name1" },
    ];
  }

  find(id) {
    return this.items.find((item) => item.id === id);
  }

  indexOf(id) {
    let index = this.items.indexOf(this.find(id));
    return index;
  }

  add(id, price) {
    let item = this.find(id);
    if (item) return (item.qty += 1);
    // item doesn't exist, so add it
    return this.items.push({ id: id, qty: 1, price: price });
  }
  //deletes and item entirely from cart
  // returns true on success, false if item was not found
  deleteItem(id) {
    let item = this.find(id);
    if (item) {
      let i = this.indexOf(item);
      this.items.splice(i, 1);
      return true;
    }
    return false;
  }
  // remove 1 item from the quantity , if qty === 0, delete it from the array
  // returns true on success, false if item not found
  remove(id) {
    let item = this.find(id);
    if (item) {
      if (item.qty > 1) {
        item.qty -= 1;
      } else {
        this.deleteItem(id);
      }
      return true;
    }
    return false;
  }

  // update a certain quantity of an item
  // return true on success, false if item not found
  update(id, qty) {
    let item = this.find(id);
    if (item) {
      console.log(item);
      item.qty = qty;

      return true;
    }
    return false;
  }
  // return the items array
  getCart() {
    return this.items;
  }

  getNumberOfItems() {
    return this.items.reduce((acc, item) => acc + item.qty, 0);
  }

  getTotal() {
    return this.items.reduce((acc, item) => acc + item.qty * item.price, 0);
  }
}
const Cart = new ShopCart();
export default Cart;
