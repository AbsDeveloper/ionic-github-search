import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepositoryDetailsPage } from './repository-details';

@NgModule({
  declarations: [
    RepositoryDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RepositoryDetailsPage),
  ],
})
export class RepositoryDetailsPageModule {}
