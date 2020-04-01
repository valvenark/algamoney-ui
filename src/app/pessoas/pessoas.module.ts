import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxCurrencyModule } from 'ngx-currency';

import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';


import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoasGridComponent } from './pessoas-grid/pessoas-grid.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    PessoasGridComponent,
    PessoaCadastroComponent,
    PessoasPesquisaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    NgxCurrencyModule,
    InputMaskModule,
    InputTextModule,
    InputTextareaModule,
    TooltipModule,
    TableModule,

    SharedModule,
  ],
  exports: [
    PessoaCadastroComponent,
    PessoasPesquisaComponent,
  ]
})
export class PessoasModule { }
