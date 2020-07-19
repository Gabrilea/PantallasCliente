import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientePageRoutingModule } from './cliente-routing.module';

import { ClientePage } from './cliente.page';
import { Routes } from '@angular/router';

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
            loadChildren: '../pedidos/pedidos.module#PedidosPageModule',
          }
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: '../perfil/perfil.module#PerfilPageModule',
          }
        ]
      },
      {
        path: '',
        redirectTo: '/proveedor/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/proveedor/home',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientePageRoutingModule
  ],
  declarations: [ClientePage]
})
export class ClientePageModule {}
