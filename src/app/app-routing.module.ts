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
    path: 'personajes',
    loadChildren: () => import('./personajes/personajes.module').then( m => m.PersonajesPageModule)
  },
  {
    path: 'portada',
    loadChildren: () => import('./portada/portada.module').then( m => m.PortadaPageModule)
  },
  {
    path: 'acercade',
    loadChildren: () => import('./acercade/acercade.module').then( m => m.AcercadePageModule)
  },
  {
    path: 'momentos',
    loadChildren: () => import('./momentos/momentos.module').then( m => m.MomentosPageModule)
  },
  {
    path: 'mivida',
    loadChildren: () => import('./mivida/mivida.module').then( m => m.MividaPageModule)
  },
  {
    path: 'contratame',
    loadChildren: () => import('./contratame/contratame.module').then( m => m.ContratamePageModule)
  },
  {
    path: 'detalle-personaje',
    loadChildren: () => import('./detalle-personaje/detalle-personaje.module').then( m => m.DetallePersonajePageModule)
  },

  { path: '', redirectTo: 'portada', pathMatch: 'full' },
  { path: 'portada', loadChildren: () => import('./portada/portada.module').then(m => m.PortadaPageModule) },
  { path: 'personajes', loadChildren: () => import('./personajes/personajes.module').then(m => m.PersonajesPageModule) },
  { path: 'detalle-personaje', loadChildren: () => import('./detalle-personaje/detalle-personaje.module').then(m => m.DetallePersonajePageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
