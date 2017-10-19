import Vue from 'vue'
import VueResource from 'vue-resource'
import CONFIG from "./config"

export default {
    getBroodjes() {
        return Vue.http.get(CONFIG.apiUrl + "broodjes")
    },
    postBestelling(broodjeID,username){
        return Vue.http.post(CONFIG.apiUrl + "bestelling",{
            'broodjeId': broodjeID
        },{headers:{
            'Authorization': username,
            'Content-Type':'application/json'
        }})
    },
    getBestellingen(){
        return Vue.http.get(CONFIG.apiUrl + "bestellingen")
    }
}