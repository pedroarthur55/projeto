import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

//Imports PRIMENG
import { AccordionModule } from 'primeng/accordion';     
import { MenuItem } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { PanelMenuModule } from 'primeng/panelmenu';                
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PaginatorModule } from 'primeng/paginator';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';



import { AppComponent } from './app.component';
import { AppRoutesModulo } from './app.routes.modulo';
import { FormularioAtaComponent } from './ata/formulario-ata/formulario-ata.component';
import { FormularioPautaComponent } from './pauta/formulario-pauta/formulario-pauta.component';
import { AlterarPautaComponent } from './pauta/alterar-pauta/alterar-pauta.component';
import { DetalharPautaComponent } from './pauta/detalhar-pauta/detalhar-pauta.component';
import { ListarPautaComponent } from './pauta/listar-pauta/listar-pauta.component';
import { FormularioLazerComponent } from './lazer/formulario-lazer/formulario-lazer.component';
import { ListarLazerComponent } from './lazer/listar-lazer/listar-lazer.component';
import { DetalharLazerComponent } from './lazer/detalhar-lazer/detalhar-lazer.component';
import { AlterarLazerComponent } from './lazer/alterar-lazer/alterar-lazer.component';
import { FormularioMultaComponent } from './multa/formulario-multa/formulario-multa.component';
import { ListarMultaComponent } from './multa/listar-multa/listar-multa.component';
import { AlterarMultaComponent } from './multa/alterar-multa/alterar-multa.component';
import { DetalharMultaComponent } from './multa/detalhar-multa/detalhar-multa.component';
import { FormularioAdvertenciaComponent } from './advertencia/formulario-advertencia/formulario-advertencia.component';
import { ListarAdvertenciaComponent } from './advertencia/listar-advertencia/listar-advertencia.component';
import { AlterarAdvertenciaComponent } from './advertencia/alterar-advertencia/alterar-advertencia.component';
import { DetalharAdvertenciaComponent } from './advertencia/detalhar-advertencia/detalhar-advertencia.component';
import { ListarFuncionarioComponent } from './funcionario/listar-funcionario/listar-funcionario.component';
import { DetalharFuncionarioComponent } from './funcionario/detalhar-funcionario/detalhar-funcionario.component';
import { FormularioFuncionarioComponent } from './funcionario/formulario-funcionario/formulario-funcionario.component';
import { AlterarFuncionarioComponent } from './funcionario/alterar-funcionario/alterar-funcionario.component';
import { AlterarEnqueteComponent } from './enquete/alterar-enquete/alterar-enquete.component';
import { DetalharEnqueteComponent } from './enquete/detalhar-enquete/detalhar-enquete.component';
import { FormularioEnqueteComponent } from './enquete/formulario-enquete/formulario-enquete.component';
import { ListarEnqueteComponent } from './enquete/listar-enquete/listar-enquete.component';
import { AlterarComunicadoComponent } from './comunicado/alterar-comunicado/alterar-comunicado.component';
import { DetalharComunicadoComponent } from './comunicado/detalhar-comunicado/detalhar-comunicado.component';
import { FormularioComunicadoComponent } from './comunicado/formulario-comunicado/formulario-comunicado.component';
import { ListarComunicadoComponent } from './comunicado/listar-comunicado/listar-comunicado.component';

@NgModule({
  declarations: [
    AppComponent,    
    FormularioAtaComponent, 
    FormularioPautaComponent, 
    AlterarPautaComponent, 
    DetalharPautaComponent, 
    ListarPautaComponent, 
    AppComponent,
    FormularioAtaComponent,
    FormularioLazerComponent,
    ListarLazerComponent,
    DetalharLazerComponent,
    AlterarLazerComponent,
    FormularioMultaComponent,
    ListarMultaComponent,
    AlterarMultaComponent,
    DetalharMultaComponent,
    FormularioAdvertenciaComponent,
    ListarAdvertenciaComponent,
    AlterarAdvertenciaComponent,
    DetalharAdvertenciaComponent,
    FormularioAtaComponent, 
    ListarFuncionarioComponent, 
    DetalharFuncionarioComponent, 
    FormularioFuncionarioComponent, 
    AlterarFuncionarioComponent, 
    AlterarEnqueteComponent, 
    DetalharEnqueteComponent, 
    FormularioEnqueteComponent, 
    ListarEnqueteComponent, AlterarComunicadoComponent, DetalharComunicadoComponent, FormularioComunicadoComponent, ListarComunicadoComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModulo,
    FormsModule,
    //Imports PRIMENG
    AccordionModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    CardModule,
    CalendarModule,
    FieldsetModule,
    ButtonModule,
    DialogModule,
    TableModule,
    InputTextModule,
    InputTextareaModule,
    PaginatorModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule


    
    
  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
