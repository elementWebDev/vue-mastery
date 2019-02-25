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
				variantColor: "green"
			},
			{
				variantId: 2235,
				variantColor: "blue"
			}
		],
		sizes: ["Small", "Medium", "Large", "X-Large"]
	}
});