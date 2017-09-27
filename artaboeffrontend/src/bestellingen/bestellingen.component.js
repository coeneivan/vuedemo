import artaboefService from "../services/artaboefService"

export default  {
  name: 'bestellingen',
  dependencies : 'BoefService',
  props: [],
  mounted() {
    /*artaboefService.getBestellingen().then(response=>{
      this.bestellingen = response.body
    })*/
    this.BoefService.getBestellingen().then(response=>{
      this.bestellingen = response.data
    })
  },
  data() {
    return {
      bestellingen:[]
    }
  },
  methods: {
   
  },
  computed: {

  }
}

