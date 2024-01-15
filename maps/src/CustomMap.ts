export class CustomMap {
    map: google.maps.Map;

    constructor(divId: string) {
        this.map = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(location: { lat: number; lng: number; }, markerName?: string): void{
        new google.maps.Marker({
            position: location,
            map: this.map,
            label: markerName
        })
    }
}

