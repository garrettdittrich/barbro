import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarbersProvider } from '../../providers/barbers/barbers';
import { Http } from '@angular/http';
import { BarberObj } from './barberObject';

BarbersProvider
declare var google: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapRef: ElementRef;
  map: any;
  barbArray: any;
  constructor(public navCtrl: NavController, public BarberServ: BarbersProvider) {
    this.barbArray = BarberServ.returnBarberData();
  }
  ionViewDidLoad(){
    console.log(this.BarberServ.returnBarberData());
    this.showMap();
    console.log('Should show the output of loadMarkers below!');
    
  }
  showMap(){

    //Location lat Long
    const location = new google.maps.LatLng(35.9940, -78.8986)
    //Options for map instance
    const options = {
      center: location,
      zoom: 50
    }
    //Initialize the Google Maps instance
    this.map = new google.maps.Map(this.mapRef.nativeElement, options)
    let markerArray = [];
    
    let data = this.barbArray.jimBob
    let test = new BarberObj(data.location, data.name, data.haircuts, data.media,
    this.map, google); 
    
    

    console.log('Below is the markerArray: ');
    /* markthis.addMarker(markerArray[0], this.map);
    this.addMarker(markerArray[1], this.map); */
    
  }

  loadMarkers(barberArray){

  }
}
