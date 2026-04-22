import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WishlistItem } from '../models/profile.model';
import { API_BASE_URL } from './api-base-url';

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private apiUrl = `${API_BASE_URL}/auth`;
  constructor(private http: HttpClient) {}

  getWishlist(): Observable<WishlistItem[]> {
    return this.http.get<WishlistItem[]>(`${this.apiUrl}/wishlist/`);
  }

  addToWishlist(productId: number): Observable<WishlistItem> {
    return this.http.post<WishlistItem>(`${this.apiUrl}/wishlist/`, { product_id: productId });
  }

  removeFromWishlist(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/wishlist/${productId}/`);
  }
}
