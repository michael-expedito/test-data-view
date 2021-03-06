import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { DataViewModule } from "primeng/dataview";
import { PanelModule } from "primeng/panel";
import { InputTextModule } from "primeng/inputtext";
import { RatingModule } from "primeng/rating";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { TabViewModule } from "primeng/tabview";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    DataViewModule,
    PanelModule,
    DropdownModule,
    TabViewModule,
    InputTextModule,
    RatingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
