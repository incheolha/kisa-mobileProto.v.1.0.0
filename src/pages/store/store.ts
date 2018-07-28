import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {StoreService} from '../../services/store-service';

@Component({
  selector: 'page-store',
  templateUrl: 'store.html'
})
export class StorePage {

  constructor(public nav: NavController, public storeService: StoreService) {
  }
}
