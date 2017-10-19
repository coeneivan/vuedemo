import artaboefService from "../services/artaboefService"
export default  {
  name: 'home',
  dependencies : 'BoefService',
  props: [],
  mounted() {
    /*artaboefService.getBroodjes().then(response=>{
      console.log(response.body);
      this.broodjes = response.body
    })*/
    this.username = this.BoefService.getUsername()
    this.BoefService.getBroodjes().then(response=>{
      this.broodjes = response.data
    });
  },
  data() {
    return {
      username:"",
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
      /*artaboefService.postBestelling(this.gekozenBroodje._id,this.username).then(response=>{
        this.message = "Bestelling geplaatst"
        this.$refs.snackbar.open();
      })*/
      this.BoefService.addBestelling(this.gekozenBroodje._id).then(response=>{

        this.message = "Bestelling geplaatst"
        this.$refs.snackbar.open();
      });
      this.$refs['dialog'].close();
    }
  },
  computed: {

  }
}

