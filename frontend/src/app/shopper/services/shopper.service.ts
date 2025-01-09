import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shopper } from '../models/shopper.model';

@Injectable({
  providedIn: 'root'
})
export class ShopperService {
  private apiUrl = 'https://localhost:7092/api/shopper';  // Url to fetch shoppers

  constructor(private http: HttpClient) { } // This is the constructor of the ShopperService class. It injects an instance of the HttpClient into the service.

  getShoppers(): Observable<Shopper[]> {  // Fetching the list of shoppers. It returns an Observable<Shopper[]>, meaning it returns an observable that, when subscribed to, will emit an array of Shopper objects.
    return this.http.get<Shopper[]>(this.apiUrl); 
    // The http.get method is used to fetch data from the API. 
    // The generic <Shopper[]> ensures that the response is typed as an array of Shopper objects. 
    // The apiUrl is the URL for the backend service to get the shopper data. 
  }
}
