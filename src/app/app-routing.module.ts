import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FirmOverviewComponent } from './firm-overview/firm-overview.component';


const routes: Routes = [
  {
    path: "",
    component: FirmOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
