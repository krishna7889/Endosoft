import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';
import { CommonService } from '../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  public token: any;
  public userName:any;
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private api_call: CommonService
  ) {
   let token = this.tokenService.getToken();
    this.userName=this.tokenService.getUserData().username;
    this.token  = atob(token);
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.token==this.userName) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return true;
    }
  }
}
