import { ToastrService } from 'ngx-toastr';
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
  data = {id:{},time:{}};

  constructor(private _participantService: ParticipantsService,private toastr: ToastrService ,public dialog: MatDialog) {
    this.participantSettings = {
      singleSelection: false,
      idField: 'par_id',
      textField: 'first_name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 7,
      allowSearchFilter: true,
    };
    this._participantService.getParticipants().subscribe((data)=>{
      this.participants = data;
      console.log(this.participants);
    });
  }

  setparticipant(type){
    console.log(this.selectedId);
  }

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

    this._participantService.checkAvailbility(this.data).subscribe((serverData: any)=>{
      console.log(serverData);
      if(serverData.message === "Select atleast 2 Participants"){
        this.toastr.error("Select atleast 2 Participants");
      } else if(serverData.message === "Interview Scheduled"){
        this.toastr.success("Interview Scheduled");
      } else {
        this.toastr.error(serverData.message);
      }
      this.alertSuccess = true;
    },(err)=>{
      this.alertRed = true;
    });

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
  
  

  

  
   

}
