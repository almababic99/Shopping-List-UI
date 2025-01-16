import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShoppingList } from '../models/shoppingList.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private apiUrl = 'https://localhost:7092/api/shoppingList';

  constructor(private http: HttpClient) {}

  getShoppingListsByShopperId(shopperId: number): Observable<ShoppingList[]> {
    return this.http.get<ShoppingList[]>(
      `${this.apiUrl}/shoppingLists/${shopperId}`
    );
  }

  deleteShoppingList(id: number) {
    // Deleting shopping list on backend
    return this.http.delete(`${this.apiUrl}/deleteShoppingList/${id}`); // Sending http delete request to backend with 'id' as parameter
  }
}
