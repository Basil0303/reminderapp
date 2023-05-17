import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.css']
})
export class DescriptionsComponent {
  constructor(private r:Router,private fb:FormBuilder,private ds:DataserviceService){}

  reminderForm=this.fb.group({
    reminder:['',[Validators.required]],
    date:['',[Validators.required]],
   
  });

clicked(){
  let reminder =this.reminderForm.value.reminder;
  let date =this.reminderForm.value.date;
  console.log(reminder,date)
 let result =this.ds.addReminder(reminder,date)
 result.subscribe(
  (resp:any)=>{
    alert(resp.message);
    this.r.navigateByUrl("details")
  },
  (err:any)=>{
    alert(err.error.message);

    
  }
 )

}




}
