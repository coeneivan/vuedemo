import artaboefService from "../services/artaboefService"

export default  {
  name: 'bestellingen',
  props: [],
  mounted() {
    artaboefService.getBestellingen().then(response=>{
      this.bestellingen = response.body
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

