import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleComprasPageRoutingModule } from './detalle-compras-routing.module';

import { DetalleComprasPage } from './detalle-compras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleComprasPageRoutingModule
  ],
  declarations: [DetalleComprasPage]
})
export class DetalleComprasPageModule {}
