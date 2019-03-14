import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './modules/principal/component/inicio/inicio.component';
import { ContactoComponent } from './modules/principal/component/contacto/contacto.component';
import { CreditoComponent } from './modules/principal/component/credito/credito.component';

const routes: Routes = [
  {path: 'home', component: InicioComponent },
  {path: 'contact', component: ContactoComponent },
  {path: 'creditos', component: CreditoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
