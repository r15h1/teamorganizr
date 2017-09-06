import { inject } from 'aurelia-framework';  
import { Squad } from './squad';
import { SquadApi } from './squadApi';

@inject(SquadApi)
export class Squads {
    constructor(squadApi) {
        this.api = squadApi;
        this.squads = [];
    }

    created() {
        this.api.getSquads().then(squads => {            
            this.squads = squads;
        });
    }
}
