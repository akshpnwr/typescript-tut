import {faker} from '@faker-js/faker';
import {Mappable} from './CustomMap';

export class User implements Mappable {
    name: string;
    location: {
        lat: number,
        lng: number
    };
    color: 'red'

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
