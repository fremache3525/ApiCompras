import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    loadChildren: () => import('./compras/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'agregar-usuario',
    loadChildren: () => import('./compras/agregar-usuario/agregar-usuario.module').then( m => m.AgregarUsuarioPageModule)
  },
  {
    path: 'compras',
    loadChildren: () => import('./compras/compras/compras.module').then( m => m.ComprasPageModule)
  },
  {
    path: 'detalle-compras',
    loadChildren: () => import('./compras/detalle-compras/detalle-compras.module').then( m => m.DetalleComprasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
