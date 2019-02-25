var app = new Vue({
	el: '#app',
	data: {
		product: 'Socks',
		image: './img/vmSocks-green.png',
		url: 'https://elementwebdev.com',
		inventory: 9,
		onSale: true,
		details: ["80% cotton", "20% polyester", "gender-neutral"],
		variants: [
			{
				variantId: 2234,
				variantColor: "green",
				variantImage: './img/vmSocks-green.png'
			},
			{
				variantId: 2235,
				variantColor: "blue",
				variantImage: './img/vmSocks-blue.png'
			}
		],
		sizes: ["Small", "Medium", "Large", "X-Large"],
		cart: 0
	},
	methods: {
		addToCart() {
			this.cart += 1
		},
		updateProduct(variantImage) {
			this.image = variantImage
		}
	}
});