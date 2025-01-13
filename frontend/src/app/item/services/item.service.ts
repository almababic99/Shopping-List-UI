import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'https://localhost:7092/api/item';  // Url to fetch items

  constructor(private http: HttpClient) { } // This is the constructor of the ItemService class. It injects an instance of the HttpClient into the service.

  getItems(): Observable<Item[]> {  // Fetching the list of items. It returns an Observable<Item[]>, meaning it returns an observable that, when subscribed to, will emit an array of Item objects.
    return this.http.get<Item[]>(this.apiUrl + '/items'); 
    // The http.get method is used to fetch data from the API. 
    // The generic <Item[]> ensures that the response is typed as an array of Item objects. 
    // The apiUrl is the URL for the backend service to get the item data. 
  }

  addItem(item: Item)  {
    return this.http.post(this.apiUrl + '/addItem', item);
  }
}
