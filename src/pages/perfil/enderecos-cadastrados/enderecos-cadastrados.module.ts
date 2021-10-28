import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnderecosCadastradosPage } from './enderecos-cadastrados';

@NgModule({
  declarations: [
    EnderecosCadastradosPage,
  ],
  imports: [
    IonicPageModule.forChild(EnderecosCadastradosPage),
  ],
})
export class EnderecosCadastradosPageModule {}
