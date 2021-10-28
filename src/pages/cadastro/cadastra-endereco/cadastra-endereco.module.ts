import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastraEnderecoPage } from './cadastra-endereco';

@NgModule({
  declarations: [
    CadastraEnderecoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastraEnderecoPage),
  ],
})
export class CadastraEnderecoPageModule {}
