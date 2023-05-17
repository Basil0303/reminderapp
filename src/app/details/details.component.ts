import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  reminders:any
  constructor(private r:Router,private ds:DataserviceService){
    ds.getReminders().subscribe((res:any)=>{
      console.log(res +"from getReminder-client")
      this.reminders=res.data
      
    })
  }



}

