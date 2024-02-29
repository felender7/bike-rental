import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OnBoardingPageRoutingModule } from './on-boarding-routing.module';
import { OnBoardingPage } from './on-boarding.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnBoardingPageRoutingModule
  ],
  declarations: [OnBoardingPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OnBoardingPageModule {}
