import artaboefService from "../services/artaboefService"
export default  {
  name: 'home',
  props: [],
  mounted() {
    artaboefService.getBroodjes().then(response=>{
      console.log(response.body);
      this.broodjes = response.body
    })
  },
  data() {
    return {
      username:"Ivan",
      message:"",
      gekozenBroodje:{},
      gekozenBroodjeNaam:"",
      broodjes:[]
    }
  },
  methods: {
    broodjeWerdGekozen:function(){
      this.gekozenBroodje = this.broodjes.filter(broodje=>broodje.name == this.gekozenBroodjeNaam)[0]
    },
    bestel:function(){      
      this.$refs['dialog'].open();
    },
    sluiten:function(){
      this.$refs['dialog'].close();
    },
    plaatsbestelling:function(){
      artaboefService.postBestelling(this.gekozenBroodje._id,this.username).then(response=>{
        this.message = "Bestelling geplaatst"
        this.$refs.snackbar.open();
      })
      this.$refs['dialog'].close();
    }
  },
  computed: {

  }
}

