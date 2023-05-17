import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DataserviceService } from '../service/dataservice.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {



  regform=this.fb.group({
    usid:['',[Validators.required,Validators.pattern("[0-9]+")]],
    username:['',[Validators.required,Validators.pattern("[a-zA-Z 0-9]+")]],
    password:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]{8,}")]]
  })
  

  constructor(private r:Router ,private fb:FormBuilder ,private ds:DataserviceService){}

  clicked(){
    let id = this.regform.value.usid
    let us = this.regform.value.username
    let pswd = this.regform.value.password
    console.log(id)
  
    if(this.regform.valid){

      let res = this.ds.register(id,us,pswd)
      res.subscribe((resp:any)=>{
      if(resp){
        alert(resp.message)
        this.r.navigateByUrl("log")
      
      }
    },
    (err)=>{
      console.log(err)
    })
   

  }
  else{
    alert("invalid data")
  }

  }}



