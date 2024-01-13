import {User} from './User.ts';
import {Company} from './Company.ts';

const user = new User();
const company = new Company();

const mapDiv = document.getElementById('map') as HTMLElement;

const map = new google.maps.Map(mapDiv, {center: {lat: 0, lng: 0}, zoom: 5});

const bounds = new google.maps.LatLngBounds();

bounds.extend(user.location);
bounds.extend(company.location);

map.fitBounds(bounds);

// Create a marker and set its position
const userMarker = new google.maps.Marker({
    position: user.location,
    map: map,
    title: user.name,
    label: user.name
});

const companyMarker = new google.maps.Marker({
    position: company.location,
    map: map,
    title: company.companyName,
    label: company.companyName
});



console.log('user', user);
console.log('company', company);

