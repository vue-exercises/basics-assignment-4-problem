const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      toggleClass: true,
      inputColor: "",
    }
  },
  computed: {
    paraClasses() {
      return {
        user1: this.inputClass === "user1",
        user2: this.inputClass === "user2",
        visible: this.toggleClass,
        hidden: !this.toggleClass,
      }
    },
  },
  methods: {
    toggleParagraph() {
      this.toggleClass = !this.toggleClass
    },
  },
})

app.mount("#assignment")
