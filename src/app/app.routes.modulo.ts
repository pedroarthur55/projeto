import { ListarComunicadoComponent } from './comunicado/listar-comunicado/listar-comunicado.component';
import { AlterarEnqueteComponent } from './enquete/alterar-enquete/alterar-enquete.component';

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { FormularioAtaComponent } from "./ata/formulario-ata/formulario-ata.component";
import { FormularioPautaComponent } from "./pauta/formulario-pauta/formulario-pauta.component";
import { ListarPautaComponent } from "./pauta/listar-pauta/listar-pauta.component";
import { FormularioLazerComponent } from "./lazer/formulario-lazer/formulario-lazer.component";
import { ListarLazerComponent } from "./lazer/listar-lazer/listar-lazer.component";
import { DetalharLazerComponent } from "./lazer/detalhar-lazer/detalhar-lazer.component";
import { AlterarLazerComponent } from "./lazer/alterar-lazer/alterar-lazer.component";
import { FormularioMultaComponent } from './multa/formulario-multa/formulario-multa.component';
import { AlterarMultaComponent } from './multa/alterar-multa/alterar-multa.component';
import { ListarMultaComponent } from './multa/listar-multa/listar-multa.component';
import { DetalharMultaComponent } from './multa/detalhar-multa/detalhar-multa.component';
import { FormularioAdvertenciaComponent } from './advertencia/formulario-advertencia/formulario-advertencia.component';
import { AlterarAdvertenciaComponent } from './advertencia/alterar-advertencia/alterar-advertencia.component';
import { ListarAdvertenciaComponent } from './advertencia/listar-advertencia/listar-advertencia.component';
import { DetalharAdvertenciaComponent } from './advertencia/detalhar-advertencia/detalhar-advertencia.component';
import { FormularioFuncionarioComponent } from "./funcionario/formulario-funcionario/formulario-funcionario.component";
import { FormularioEnqueteComponent } from "./enquete/formulario-enquete/formulario-enquete.component";
import { ListarEnqueteComponent } from "./enquete/listar-enquete/listar-enquete.component";
import { DetalharEnqueteComponent } from "./enquete/detalhar-enquete/detalhar-enquete.component";


const appRoutes: Routes = [  
    { path: 'formulario-ata', component: FormularioAtaComponent },
    { path: 'formulario-pauta', component: FormularioPautaComponent},
    { path: 'listar-pauta', component: ListarPautaComponent},   
    { path: 'listar-pauta/:id', component: ListarPautaComponent},
    { path: 'formulario-lazer', component: FormularioLazerComponent},
	{ path: 'listar-lazer', component: ListarLazerComponent},
    { path: 'detalhar-lazer/:id', component: DetalharLazerComponent},
    { path: 'alterar-lazer/:id', component: AlterarLazerComponent},
    { path: 'formulario-multa', component: FormularioMultaComponent},
    { path: 'listar-multa', component: ListarMultaComponent},
    { path: 'alterar-multa/:id', component: AlterarMultaComponent},
    { path: 'detalhar-multa/:id', component: DetalharMultaComponent},
    { path: 'formulario-advertencia', component: FormularioAdvertenciaComponent},
    { path: 'listar-advertencia', component: ListarAdvertenciaComponent},
    { path: 'alterar-advertencia/:id', component: AlterarAdvertenciaComponent},
    { path: 'detalhar-advertencia/:id', component: DetalharAdvertenciaComponent},        
    { path: 'listar-funcionario', component: FormularioFuncionarioComponent },    
    { path: 'formulario-enquete', component: FormularioEnqueteComponent},
    { path: 'listar-enquete', component: ListarEnqueteComponent},   
    { path: 'listar-enquete/:id', component: ListarEnqueteComponent},
    { path: 'detalhar-enquete/:id', component: DetalharEnqueteComponent},
    { path: 'alterar-enquete/:id', component: AlterarEnqueteComponent},
    { path: 'listar-comunicado', component: ListarComunicadoComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutesModulo {

}