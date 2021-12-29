Vue.createApp({
  data: () => ({
    myHtml: '<h1>Vue 3 app</h1>',
    title: 'Я есть Грут',
    person: {
      firstName: 'Den',
      lastName: 'Dev',
      age: 27
    },
    items: [1, 2, 3, 4, 5, 6],
  }),
  methods: {
    addItem($event) {
      this.items.unshift(this.$refs.myInput.value)
      this.$refs.myInput.value = '';
      console.log($event.key);
    },
    remove(idx) {
      this.items.splice(idx, 1);
    },
    log(item) {
      console.log('Log item:', item);
    }
  },
  computed: {
    evenItems() {
      return this.items.filter((item) => item % 2 === 0)
    }
  }
}).mount('#app')