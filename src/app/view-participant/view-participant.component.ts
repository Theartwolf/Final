import { formatDate } from '@angular/common';
import { ParticipantsService } from './../participants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-participant',
  templateUrl: './view-participant.component.html',
  styleUrls: ['./view-participant.component.css']
})
export class ViewParticipantComponent implements OnInit {

  // today = new Date();
  // currentTime = '';
  participants = [];
  displayedColumns = ["name","startTime","endTime"];
  constructor(private _participantService: ParticipantsService) {
    // this.currentTime = formatDate(this.today,'dd-MM-yyyy hh:mm:ss', 'en-US', '+0530');
    this._participantService.getParticipantsWithTimings().subscribe((data)=>{
      console.log(data);
      this.participants = data;
    });
  }
  
  ngOnInit(): void {
  }

}
