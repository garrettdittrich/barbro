export class BarberObj {
    
    constructor(public location, public name: string, public haircuts, public media, 
        public map, public google ){
            console.log('Running BarberObj Constructor')
            return new google.maps.Marker({
                location,
                map
              })  
    }
}



/* for (var i = 0; i < markerArray.length; i++){
    let a = this
    console.log(markerArray);
    var marker = this.addMarker(markerArray[i].location, this.map);
    marker.addListener('click', function() {
      console.log(a.barbArray.jimBob);
    });

  } */

/*   for (let mark in this.barbArray){
    let temp = this.barbArray[mark].location;
    let temp2 = new google.maps.LatLng(temp[0],temp[1] )
    markerArray.push({location: temp2, name: this.barbArray[mark].name,
      haircuts: this.barbArray[mark].haircuts, media: this.barbArray[mark].media });
  } */