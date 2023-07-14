import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { LoaderService } from 'src/app/services/loader.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted:boolean=false;
  public valiError:any='';
  constructor(
    private tokenStorage: TokenService,
    private router: Router,
    public api:CommonService,
    public loader:LoaderService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login(){
    this.loader.show();
    this.submitted=true;
    let data=this.loginForm.value;
     if(this.loginForm.invalid){
      this.loader.hide();
      return;
     }else{
      setTimeout(()=>{
        let body={
          email:data.email,
          password:data.password
         }
         console.log(body)
          let res:any=this.api.login(body);
          if(res.status==200){
            this.valiError='';
            const encodedData = btoa(res.data.username); 
            this.tokenStorage.saveToken(encodedData)
            this.tokenStorage.saveUserData(res.data)
            this.router.navigate([`user/user`]);
          }else{
            this.valiError='Invalid Login Details'
          }
          this.loader.hide();
      },500)
      
     }
  }

}
