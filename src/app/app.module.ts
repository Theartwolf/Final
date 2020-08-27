import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterviewComponent } from './interview/interview.component';
import { CustomMaterialModule } from './material.module';
import { ParticipantsService } from './participants.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectParticipantComponent } from './select-participant/select-participant.component';
import { EditParticipantComponent } from './edit-participant/edit-participant.component';
import { ViewParticipantComponent } from './view-participant/view-participant.component';

@NgModule({
  declarations: [
    AppComponent,
    InterviewComponent,
    SelectParticipantComponent,
    EditParticipantComponent,
    ViewParticipantComponent
  ],
  entryComponents: [
    SelectParticipantComponent,
    EditParticipantComponent,
    ViewParticipantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass:'toast-top-left'
    })
  ],
  exports: [
    
  ],
  providers: [
    ParticipantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
