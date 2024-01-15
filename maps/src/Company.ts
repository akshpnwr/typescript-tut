import {faker} from '@faker-js/faker';

export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number,
        lng: number
    }

    constructor() {        
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    }

    markerContent(): string{
        return `<strong>Company Information:</strong><br>
        Company name: ${this.companyName} <br>
        Catch phrase: ${this.catchPhrase} <br>
        Latitude:  ${this.location.lat}  <br>
        Longitude:  ${this.location.lng}`;
    }
}