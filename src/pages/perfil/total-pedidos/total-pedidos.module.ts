import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TotalPedidosPage } from './total-pedidos';

@NgModule({
  declarations: [
    TotalPedidosPage,
  ],
  imports: [
    IonicPageModule.forChild(TotalPedidosPage),
  ],
})
export class TotalPedidosPageModule {}
