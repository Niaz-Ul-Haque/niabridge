import * as Leaflet from 'leaflet'

const ont = {
    coords: new Leaflet.LatLng(51.2538, -85.3232),
    zoom: 5
}

export class LeafletMap {
    map: Leaflet.Map;
    popup: Leaflet.Popup;

    constructor(id:string){
        this.map = Leaflet.map(id);

        Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
        .addTo(this.map);
    
        this.map.setView(ont.coords, ont.zoom)
    }

    update(lat: number, lng:number, name:string):void {
        const coords = new Leaflet.LatLng(lat, lng);
        this.map.setView(coords, 14)

        if(this.popup) {
            this.popup.setLatLng(coords)
            this.popup.setContent(name)
        } else {
            this.popup = Leaflet.popup({
                closeButton: false,
                closeOnEscapeKey: false,
                closeOnClick: false
            })
            .setLatLng(coords)
            .setContent(name)
            .openOn(this.map);
        }
    }
}
