import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadingsComponent } from './readings/readings.component';
import { ReadingsHistoryComponent } from './readings-history/readings-history.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CalibrationComponent } from './calibration/calibration.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadingsComponent,
    ReadingsHistoryComponent,
    NotificationsComponent,
    CalibrationComponent,
    HomeComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
