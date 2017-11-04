import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { barberData } from '../../assets/barberdata'

@Injectable()
export class BarbersProvider {
  barbData = barberData;
  constructor() {
     
  }
  returnBarberData(){
    return this.barbData;
  }
}
