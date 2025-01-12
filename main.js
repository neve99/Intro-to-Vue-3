const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: false,
      details: [],
    }
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    },
    removeFromCart(id) {
      this.cart.pop(id)
    }
  }

})
