import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {




  logform=this.fb.group({
    uname:['',[Validators.required,Validators.pattern("[a-zA-Z 0-9]+")]],
   password :['',[Validators.required,Validators.pattern("[a-zA-Z0-9]{8,}")]]
  })


  constructor(private r:Router, private ds:DataserviceService ,private fb:FormBuilder){}  
  
  //dependancy injection
  


  clicked(){
    let uname = this.logform.value.uname
    let psw = this.logform.value.password
    let res = this.ds.login(uname,psw)
 console.log(uname,psw + 'from reactive form')
  res.subscribe((resp:any)=>{
    if(resp){
      localStorage.setItem("currentUser",resp.currentUser)
      localStorage.setItem("currentUsid",resp.currentUserName)
      localStorage.setItem("token",JSON.stringify(resp.token))
      alert(resp.message)
      this.r.navigateByUrl("des")
    }
  },
  (err)=>{
    alert(err.error.message)
  })
}




}


