// createApp 함수는 view와 js를 연결해주는 다리 역할을 한다.
const app = Vue.createApp({
  data() {
    return {
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
        },
        {
          id: '2235',
          color: 'blue',
        },
      ],
      sizes: [230, 240, 250],
    };
  },
});
