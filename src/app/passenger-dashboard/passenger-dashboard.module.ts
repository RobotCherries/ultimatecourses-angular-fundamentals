import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
import { PassengerViewerComponent } from "./components/passenger-viewer/passenger-viewer.component";
import { PassengerDashboardComponent } from "./passenger-dashboard.component";

@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,

    PassengerCountComponent,
    PassengerDetailComponent
  ],
  exports: [PassengerDashboardComponent, PassengerViewerComponent]
})
export class PassengerDashboardModule {}
