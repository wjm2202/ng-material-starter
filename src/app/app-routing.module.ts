import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalibrationComponent } from './calibration/calibration.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ReadingsComponent } from './readings/readings.component';
import { ReadingsHistoryComponent } from './readings-history/readings-history.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'calibrate', component: CalibrationComponent },
  { path: 'notify', component: NotificationsComponent },
  { path: 'reading', component: ReadingsComponent },
  { path: 'readinghistory', component: ReadingsHistoryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
