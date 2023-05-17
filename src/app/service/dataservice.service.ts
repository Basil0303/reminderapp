import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
const options ={headers:new HttpHeaders()}
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private hc:HttpClient) { }
  
getToken(){
  const token = localStorage.getItem('token')
  console.log(token,"client")
  let header = new HttpHeaders()
  if(token){
    header=header.append("x-access-token",token)
    options.headers = header;
  }
  console.log(options)
  return options
}


  register(usid:any,uname:any,pswd:any){

    let data={
      usid,
      uname,
      pswd
    }

  return  this.hc.post("http://localhost:3000/register",data)
   
  }


  login(uname:any,psw:any){

    let data={
      uname,
      psw
    }
    return this.hc.post("http://localhost:3000/login",data)

    
  }

addReminder(reminder:any,date:any){
  let data={
    reminder,
    date
  }
  return this.hc.post("http://localhost:3000/reminder",data,this.getToken())

}

getReminders(){
  const data  = {username:localStorage.getItem('currentUserName')}
  return this.hc.post('http://localhost:3000/reminders',data,this.getToken())
}



}
