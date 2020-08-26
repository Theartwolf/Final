import { ParticipantsService } from './../participants.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-participant',
  templateUrl: './edit-participant.component.html',
  styleUrls: ['./edit-participant.component.css']
})
export class EditParticipantComponent implements OnInit {
  
  participants = [];
  required = true;
  disabled = false;
  displayedColumns = ["radioButton","name","startTime","endTime","edit"];
  isChecked = false;
  prevIdAndTime = [];
  newTimings = [];
  data = {prevTime:{},newTime:{}};

  constructor(private _participantService: ParticipantsService,public dialog: MatDialog) {
    this._participantService.getParticipantsWithTimings().subscribe((data)=>{
      console.log(data);
      this.participants = data;
    });
  }
  
  getSelectedId(e:any,id:any,startTime:any,endTime:any){
      if(e.target.checked){
        this.prevIdAndTime.push({id,startTime,endTime});
        this.isChecked = !this.isChecked;
      }
      console.log(this.prevIdAndTime);
  }

    
  editOnClick(startTime,endTime,date){
    this.newTimings = [];
    this.newTimings.push(date.value + " " + startTime.value);
    this.newTimings.push(date.value + " " + endTime.value);
    this.data.prevTime = this.prevIdAndTime;
    this.data.newTime = this.newTimings;

    this._participantService.editParticipantTimings(this.data).subscribe((data)=>{
      console.log(data);
  }); 
  
}

  ngOnInit(): void {
  }

}
