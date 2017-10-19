export default  {
  name: 'login',
  dependencies : 'BoefService',
  props: [],
  mounted() {
    
  },
  data() {
    return {
    }
  },
  methods: {
   login:function(){
     this.BoefService.setUsername(this.username);
     this.$router.push("home")
     
   }
  },
  computed: {

  }
}

