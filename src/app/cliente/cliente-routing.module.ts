import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientePage } from './cliente.page';

const routes: Routes = [
  {
    path: '',
    component: ClientePage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: ( ) => import('../home/home.module').then(m => m.HomePageModule),
          }
        ]
      },
      {
        path: 'pedidos',
        children: [
          {
            path: '',
            loadChildren: ( ) => import('../pedidos/pedidos.module').then(m => m.PedidosPageModule),
          }
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: ( ) => import('../perfil/perfil.module').then(m => m.PerfilPageModule),
          }
        ]
      }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientePageRoutingModule {}
