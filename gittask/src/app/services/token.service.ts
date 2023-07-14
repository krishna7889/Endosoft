import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
const TOKEN = 'AuthToken';
const PURCHASE_PERMISSIONS_KEY = 'purchasePermissions';
const CONTACT_PERMISSIONS_KEY = 'contactPermissions';
const SALES_PERMISSIONS_KEY = 'salesPermissions';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public token_key = "authToken";
  public userData="userName";
  constructor(private router:Router) { }
  signOut() {
    window.sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

  public saveToken(token: string) {
    window.sessionStorage.setItem(this.token_key, token);
  }

  public getToken() {
    return sessionStorage.getItem(this.token_key);
  }

  public saveUserData(data:any) {
    sessionStorage.setItem(this.userData, JSON.stringify(data));
  }

  public getUserData() {
    return JSON.parse(sessionStorage.getItem(this.userData)) || {};
  }

}






