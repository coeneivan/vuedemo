import injector from 'vue-inject';
import axios from 'axios';

injector.constant('apiRoot', 'http://localhost:3000/api');
injector.constant('axios', axios);
/*injector.constant('apiHeaders',
{
    headers:{
        'Authorization': username,
        'Content-Type':'application/json'
    }
});*/
