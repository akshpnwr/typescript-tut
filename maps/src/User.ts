import {faker} from '@faker-js/faker';

class User {
    name: string;
    location: {
        lat: number,
        lng: number
    };

    constructor() {        
        this.name = faker.person.firstName('female');
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        };

    }

    logUserDetail(): void{
        console.log(this.name);
        console.log(this.location);
    }

}