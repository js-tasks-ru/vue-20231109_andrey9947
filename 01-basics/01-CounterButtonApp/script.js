import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++
    },
  },
});
app.mount('#app');
