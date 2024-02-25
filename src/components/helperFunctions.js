export const favState = (args) => {
  let msg = ""
  if (args[1].length > 0) {
    for (let i = 0; i < args[1].length; i++) {
      if (args[0] === args[1][i]) {
        msg = "text-red-600"
      }
    }
  }
  return msg;
}
export const addFav = (args) => {
  args[2] = JSON.parse(window.localStorage.getItem("fav")) || []
  let updatedFav = [];
  let alreadyFav = false;
  if (args[2].length > 0) {
    for (let i = 0; i < args[2].length; i++) {
      if (args[2][i] !== args[1]) {
        updatedFav.push(args[2][i])
      } else {
        alreadyFav = true;
      }
    }
    if (!alreadyFav) {
      updatedFav.push(args[1]);
    }
  } else {
    updatedFav = [args[1]];
  }
  args[0].target.classList.toggle("text-red-600")
  window.localStorage.setItem("fav", JSON.stringify(updatedFav))
}
export const addToCart = (args) => {
  args[2] = JSON.parse(window.localStorage.getItem("cart")) || []
  let msg = "In Cart"
  if (args[2].length > 0) {
    let alreadyAdded = false
    let updatedCart = []
    for (let i = 0; i < args[2].length; i++) {
      if (args[2][i].id !== args[1].id) {
        updatedCart.push(args[2][i])
      } else {
        alreadyAdded = true
        msg = "Add to Cart"
      }
    }
    if (alreadyAdded === false) {
      msg = "In Cart"
      updatedCart = [...updatedCart, { ...args[1], quantity: 1 }]
    }
    window.localStorage.setItem("cart", JSON.stringify(updatedCart))
  } else {
    let cart = [{ ...args[1], quantity: 1 }]
    window.localStorage.setItem("cart", JSON.stringify(cart))
  }
  args[0].target.innerHTML = msg
  args[3]()
}
export const btnState = (args) => {
  let msg = "Add to Cart"
  if (args[1].length > 0) {
    for (let i = 0; i < args[1].length; i++) {
      if (args[0] === args[1][i].id) {
        msg = "In Cart"
      }
    }
  }
  return msg
}