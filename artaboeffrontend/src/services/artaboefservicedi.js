import injector from 'vue-inject';

function apiUrlBuilder(apiRoot){
  return function(path){
    return apiRoot + '/' + path;
  }
}
injector.factory('apiUrlBuilder', 'apiRoot', apiUrlBuilder);

function apiHeaderBuilder(){
    return function(username){
        var headers = {
            headers:{
                'Authorization': username,
                'Content-Type':'application/json'
            }
        };
        return headers;
    }
}
injector.factory('apiHeaderBuilder', apiHeaderBuilder);

class BoefService{

    setUsername(username){this.username = username;}
    getUsername(){return this.username;}

    constructor(apiUrlBuilder, axios, apiHeaderBuilder) {
        this.apiUrlBuilder = apiUrlBuilder;
        this.axios = axios;
        this.apiHeaderBuilder = apiHeaderBuilder;
        this.username = '';
    }

    getBroodjes(){
        var url = this.apiUrlBuilder("broodjes");
        return this.axios.get(url);
    };
    
    addBestelling(broodjesId){
        var url = this.apiUrlBuilder("bestelling");
        var headers = this.apiHeaderBuilder(this.username)
        return this.axios.post(url,{
            'broodjeId': broodjesId
        }, headers)
    }

    getBestellingen(){
        var url = this.apiUrlBuilder("bestellingen");
        return this.axios.get(url);
    }
}
injector.service('BoefService', ['apiUrlBuilder', 'axios', 'apiHeaderBuilder'], BoefService);