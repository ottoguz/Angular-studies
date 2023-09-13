import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    NewComponentComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    AssignmentTwoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
