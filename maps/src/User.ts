import {faker} from '@faker-js/faker';

export class User {
    name: string;
    location: {
        lat: number,
        lng: number
    };

    constructor() {        
        this.name = faker.person.firstName();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        };
    }

    markerContent(): string{
        return `<strong>User Information:</strong><br> 
        Name: ${this.name} <br> 
        Latitude:  ${this.location.lat}  <br> 
        Longitude:  ${this.location.lng}`;
    }    
}
