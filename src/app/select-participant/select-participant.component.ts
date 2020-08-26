import { ParticipantsService } from './../participants.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-select-participant',
  templateUrl: './select-participant.component.html',
  styleUrls: ['./select-participant.component.css']
})
export class SelectParticipantComponent implements OnInit {

  participants = [];
  selectedId  = [];
  timings = [];
  required = true;
  participantSettings = {};
  alertSuccess = false;
  alertRed = false;

  constructor(private _participantService: ParticipantsService,public dialog: MatDialog) {
    this.participantSettings = {
      singleSelection: false,
      idField: 'par_id',
      textField: 'first_name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 7,
      allowSearchFilter: true,
    };
  }
  

   //getting participants
   participant = this._participantService.getParticipants().subscribe((data)=>{
    // console.log(data);
    this.participants = data;
    console.log(this.participants);
  });

  setparticipant(type){
    console.log(this.selectedId);
  }
  isValid: boolean;
  validate(inputField) {
    this.isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(inputField.value);

    if (this.isValid) {
        inputField.style.backgroundColor = '#bfa';
    } else {
        inputField.style.backgroundColor = '#fba';
    }
}



  ngOnInit(): void {
  }


 //multiple selecting the participants in selectedId array
  // getSelectedId(e:any,id:any){
  //   if(e.target.checked){
  //     this.selectedId.push(id);
  //   } else {
  //     this.selectedId = this.selectedId.filter(i_id=>i_id!=id);
  //   }
  //   console.log(this.selectedId);
  // }
   x ;
  data = {id:{},time:{}};
  

  //sending participants details to backend
  doneOnClick(startTime, endTime, date){
    this.timings = [];
    //validate start time
    //validate end time
    //validate date
    //throw error if not correct
    this.timings.push(date.value + " " + startTime.value);
    this.timings.push(date.value + " " + endTime.value);
    this.data.id = this.selectedId;
    this.data.time = this.timings;

    this.x = this._participantService.checkAvailbility(this.data).subscribe((message: any)=>{
      console.log(message);
      this.alertSuccess = true;
    },(err)=>{
      this.alertRed = true;
    });

  }

  
   

}
