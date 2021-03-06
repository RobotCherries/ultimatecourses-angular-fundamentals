import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
import { PassengerFormComponent } from "./components/passenger-form/passenger-form.component";
import { PassengerViewerComponent } from "./components/passenger-viewer/passenger-viewer.component";
import { PassengerDashboardComponent } from "./passenger-dashboard.component";

@NgModule({
  imports: [BrowserModule, CommonModule, HttpClientModule],
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponent,

    PassengerViewerComponent
  ],
  exports: [PassengerViewerComponent]
})
export class PassengerDashboardModule {}
