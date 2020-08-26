import { NgModule } from '@angular/core';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [NavBarComponent],
  imports: [Router],
  exports: [NavBarComponent],
})
export class CoreModule {}
