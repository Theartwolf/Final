import { ParticipantsService } from './../participants.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { formatDate } from '@angular/common';

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
  selectedId = [];

  constructor(private _participantService: ParticipantsService,public dialog: MatDialog) {
    this._participantService.getParticipantsWithTimings().subscribe((data)=>{
      console.log(data);
      this.participants = data;
    });
  }
  
  getSelectedId(e:any,id:any,startTime:any,endTime:any){
      if(e.target.checked){
        this.selectedId.push({id,startTime,endTime});
        this.isChecked = !this.isChecked;
      }
      console.log(this.selectedId);
      this._participantService.editParticipantTimings(this.selectedId).subscribe((data)=>{
          console.log(data);
      });
    }
  //getting participants
//   this._participantService.getParticipantsWithTimings().subscribe((data)=>{
//    console.log(data);
//    this.participants = data;
//  });

  ngOnInit(): void {
  }

}
