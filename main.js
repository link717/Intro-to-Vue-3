// createApp 함수는 view와 js를 연결해주는 다리 역할을 한다.
const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    };
  },
});
