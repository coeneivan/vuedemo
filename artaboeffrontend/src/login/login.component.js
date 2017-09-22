export default  {
  name: 'login',
  props: [],
  mounted() {
    
  },
  data() {
    return {
    }
  },
  methods: {
   login:function(){
     console.log(this.username)
     this.$router.push("home")
   }
  },
  computed: {

  }
}

