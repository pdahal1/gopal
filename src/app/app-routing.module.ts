import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BracletComponent } from './braclet/braclet.component';
import { EarRingComponent } from './ear-ring/ear-ring.component';
import { HaarComponent } from './haar/haar.component';
import { RingsComponent } from './rings/rings.component';
import { ExtrasComponent } from './extras/extras.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'braclets', component: BracletComponent },
  { path: 'ear-rings', component: EarRingComponent },
  { path: 'haars', component: HaarComponent },
  { path: 'rings', component: RingsComponent },
  { path: 'extras', component: ExtrasComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
