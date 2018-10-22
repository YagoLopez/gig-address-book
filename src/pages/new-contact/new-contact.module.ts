import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { NewContactPage } from './new-contact';

@NgModule({
  declarations: [
    NewContactPage,
  ],
  imports: [
    IonicPageModule.forChild(NewContactPage),
    ReactiveFormsModule
  ],
})
export class NewContactPageModule {}
