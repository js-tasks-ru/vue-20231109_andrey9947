import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
  data() {
    return {
      num1: null,
      num2: null,
      typeAction: null,
    };
  },
  computed: {
    calculation() {
      switch (this.typeAction) {
        case 'sum':
          return this.num1 + this.num2;
        case 'subtract':
          return this.num1 - this.num2;
        case 'multiply':
          return this.num1 * this.num2;
        case 'divide':
          return this.num1 / this.num2;
        default:
          return null;
        }
    },
  },
});
app.mount('#app');
