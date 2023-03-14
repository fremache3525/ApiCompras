import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleComprasPage } from './detalle-compras.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleComprasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleComprasPageRoutingModule {}
