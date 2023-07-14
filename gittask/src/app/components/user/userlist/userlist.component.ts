import { Component, OnInit } from '@angular/core';
import db from '../../../../db.json'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { LoaderService } from 'src/app/services/loader.service';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  public userForm: FormGroup;
  public userData:any=[];
  public submitted:boolean;
  public selectedUser:any='';
  constructor( public datepipe: DatePipe,
    private loader:LoaderService) {
    this.userData=db;
   }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name:new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)]),
      phone:new FormControl('',Validators.required),
      dob:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
    });
  }

  addUser(){
    this.loader.show();
    let data=this.userForm.value;
    let dob=this.datepipe.transform(data.dob,'dd-MM-yyyy')
    this.submitted=true;
    if(this.userForm.invalid){
      this.loader.hide();
      return;
    }else{
      setTimeout(()=>{
    this.submitted=false;
    let body={
    id: this.userData.length+1,
    name:data.name,
    username: "",
    email:data.email,
    passowrd:"",
    phone: data.phone,
    website: "",
    Address:data.address,
    DOB:dob
    }
    this.userData.unshift(body);
    this.userForm.reset();
    this.loader.hide();
  },500)
  }
  }

  editUser(data:any){
    this.loader.show();
    setTimeout(()=>{
    this.selectedUser=data.id;
    this.userForm.controls['name'].setValue(data.name);
    this.userForm.controls['email'].setValue(data.email);
    this.userForm.controls['phone'].setValue(data.phone);
    this.userForm.controls['address'].setValue(data.Address);
    this.userForm.controls['dob'].setValue(data.DOB);
    this.loader.hide();
    },500)
  }

  updateUser(){
    this.loader.show();
   let data=this.userForm.value;
   this.submitted=true;
   if(this.userForm.invalid){
    return;
   }else{
    this.submitted=false;
    setTimeout(()=>{
      this.userData.map((i:any)=>{
        if(i.id==this.selectedUser){
          i.name=data.name
          i.email=data.email
          i.phone=data.phone
          i.Address=data.address
          i.DOB=data.dob
        }
       });
       this.userForm.reset();
       this.selectedUser='';
       this.loader.hide();
    },500)
   }
  
  }

  deleteUser(id:any){
    this.loader.show();
    setTimeout(()=>{
    let el = this.userData.find((id:any) => id == id);
    if (el) this.userData.splice(this.userData.indexOf(el), 1);
    this.loader.hide();
    },500)
  }

}
