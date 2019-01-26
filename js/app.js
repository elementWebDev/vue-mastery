var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    description: "A pair of warm, fuzzy socks",
    image: "./img/vmSocks-green.png",
    url: "./img/vmSocks-blue.png",
    inStock: true,
    inventory: 100,
    onSale: true,
    details: ["80% cotton", "20% polyester", "gender-neutral"],
    variants: [ //plural
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./img/vmSocks-green.png"
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./img/vmSocks-blue.png"
      }
    ],
    sizes: ["small", "medium", "large"],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    },
    removeFromCart() {
      this.cart -= 1;
    }
  }
});
