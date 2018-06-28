import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Message, ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'listar-advertencia',
  templateUrl: './listar-advertencia.component.html',
  styleUrls: ['./listar-advertencia.component.css']
})
export class ListarAdvertenciaComponent implements OnInit {

  listaAdvertencia: any = [];
  advertencia = {};
  idAdvertencia: any;
  formularioAdvertencia: boolean = false;
  alterarAdvertencia: boolean = false;
  detalharAdvertencia: boolean = false;
  msgs: Message[] = [];
  
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, 
    private messageService: MessageService, private confirmationService: ConfirmationService) { }


  ngOnInit() {
    this.http.get('/advertencia').subscribe(advertencia => {
      console.log(advertencia);
      this.listaAdvertencia = advertencia;    
    });
   
  }

  selecionarAdvertencia(advertencia){
    this.advertencia = advertencia;    
  }

  modalFormularioAdvertencia() {
    this.formularioAdvertencia = true;
}

  modalAlterarAdvertencia() {
  this.alterarAdvertencia = true;
}

  modalDetalharAdvertencia() {
  this.detalharAdvertencia = true;
}

  recebeIdAdvertencia(idAdvertencia){
    this.idAdvertencia = idAdvertencia;
  }

  buscarListaAdvertencia(){
    this.http.get('/advertencia').subscribe(advertencia => {
      console.log(advertencia);
      this.listaAdvertencia = advertencia;
    })
  }

  excluirAdvertencia(id) {
    this.http.delete('/advertencia/'+ id)
      .subscribe(res => {
        this.mensagemSucesso();
        this.buscarListaAdvertencia();        
        }, (error) => {
          console.log(error);
        }
      );
  }

  confirmaExclusaoAdvertencia() {
    this.confirmationService.confirm({
        message: 'Deseja excluir a Advertencia?',
        accept: () => {
          this.excluirAdvertencia(this.idAdvertencia);
        }
    });   
}

mensagemSucesso() {
  this.msgs = [];
      this.msgs.push({severity:'success', summary:'Sucesso:', detail:'Exclusão de Advertencia Realizado com Sucesso.'});
}

}
