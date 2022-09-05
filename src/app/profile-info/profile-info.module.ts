import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { NgApexchartsModule } from "ng-apexcharts";
import { SharedModule } from "../shared/shared.module";
import { ProfileInfo } from "./profile-info";
import { ProfileInfoRoutingModule } from "./profile-info-routing.module";

@NgModule({
    imports: [
      IonicModule,
      ProfileInfoRoutingModule,SharedModule, NgApexchartsModule,CommonModule ,
    ],
    declarations: [ProfileInfo]
  })
  export class ProfileInfoModule {}