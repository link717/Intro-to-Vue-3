// createApp 함수는 view와 js를 연결해주는 다리 역할을 한다.
const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      image: './assets/images/socks_green.jpg',
      inStock: true,
      //   inventory: 10,
      //   onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        {
          id: '2234',
          color: 'green',
          image: './assets/images/socks_green.jpg',
        },
        {
          id: '2235',
          color: 'blue',
          image: './assets/images/socks_blue.jpg',
        },
      ],
      //   sizes: [230, 240, 250],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    deleteToCart() {
      this.cart -= 1;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});
