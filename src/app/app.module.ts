import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";
import { HttpClientModule } from "@angular/common/http";
import { PassengerViewerComponent } from "./passenger-viewer/passenger-viewer.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PassengerDashboardModule,
    PassengerViewerComponent
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
