import { ViewParticipantComponent } from './../view-participant/view-participant.component';
import { EditParticipantComponent } from './../edit-participant/edit-participant.component';
import { SelectParticipantComponent } from './../select-participant/select-participant.component';
import { ParticipantsService } from './../participants.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {

  constructor(private _participantsService: ParticipantsService,public dialog: MatDialog) { }


  ngOnInit(): void {
  }

  getDataFromApi(){
    this._participantsService.getParticipants().subscribe((data)=>{
      console.log(data);
    });
  }
  createInterviewDialog(): void {
    this.dialog.open(SelectParticipantComponent,{
        height: '700px',
        width: '900px',
    });
  }

  editInterviewDialog(): void {
    this.dialog.open(EditParticipantComponent,{
        height: '700px',
        width: '900px',
    });
  }

  upcomingInterviewDialog():void{
    this.dialog.open(ViewParticipantComponent,{
      height: '700px',
      width: '900px',
    });
  }
    

}
