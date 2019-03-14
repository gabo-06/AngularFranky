import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { CreditoComponent } from './component/credito/credito.component';


@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    InicioComponent,
    ContactoComponent,
    CreditoComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ]
})
export class PrincipalModule { }
