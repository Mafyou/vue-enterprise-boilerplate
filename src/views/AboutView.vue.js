export default {
  name: 'About',
  data () {
    return {
      myvar: 0
    }
  },
  methods: { /* your methods here */ },
  created () {
    // using refs is an easier way of getting elements
    const e = this.$refs.theElementYouWant
    console.log(e);
    alert("lol");
  }
}
