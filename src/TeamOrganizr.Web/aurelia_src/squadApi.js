import { inject } from 'aurelia-framework';  
import { HttpClient } from 'aurelia-fetch-client';
import { Squad } from './squad';

@inject(HttpClient)
export class SquadApi {
    constructor(http) {
        this.httpClient = http;
        this.httpClient.configure(config => {
            config
                .withDefaults({
                    credentials: 'same-origin',
                    headers: { 'Accept': 'application/json' }
                })

                .withBaseUrl('api/');
        });
        
    }

    getSquads() {
        console.log("calling squads");
        return new Promise(resolve => {
            this.httpClient.fetch('squads', { method: 'get' })
            .then(response => {
                resolve(response.json());
            });
        });
    }
}
