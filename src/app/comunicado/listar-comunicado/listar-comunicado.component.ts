import { Component, OnInit } from '@angular/core';
import { Message, ConfirmationService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-listar-comunicado',
  templateUrl: './listar-comunicado.component.html',
  styleUrls: ['./listar-comunicado.component.css']
})
export class ListarComunicadoComponent implements OnInit {

 
  listaComunicado: any = [];
  comunicado = {};
  idComunicado: any;
  formularioComunicado: boolean = false;
  alterarComunicado: boolean = false;
  detalharComunicado: boolean = false;
  msgs: Message[] = [];
  
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, 
    private messageService: MessageService, private confirmationService: ConfirmationService) { }


  ngOnInit() {
    this.http.get('/comunicado').subscribe(comunicado => {
      console.log(comunicado);
      this.listaComunicado = comunicado;    
    })
  }

  selecionarComunicado(comunicado){
    this.comunicado = comunicado;    
  }

  modalFormularioComunicado() {
    this.formularioComunicado = true;
}

  modalAlterarComunicado() {
  this.alterarComunicado = true;
}

  modalDetalharComunicado() {
  this.detalharComunicado = true;
}

  recebeIdComunicado(idComunicado){
    this.idComunicado = idComunicado;
  }

  buscarListaComunicado(){
    this.http.get('/comunicado').subscribe(comunicado => {
      console.log(comunicado);
      this.listaComunicado = comunicado;
    })
  }

  excluirComunicado(id) {
    this.http.delete('/comunicado/'+ id)
      .subscribe(res => {
        this.mensagemSucesso();
        this.buscarListaComunicado();        
        }, (error) => {
          console.log(error);
        }
      );
  }

  confirmaExclusaoComunicado() {
    this.confirmationService.confirm({
        message: 'Deseja excluir a Comunicado?',
        accept: () => {
          this.excluirComunicado(this.idComunicado);
        }
    });   
}

mensagemSucesso() {
  this.msgs = [];
      this.msgs.push({severity:'success', summary:'Sucesso:', detail:'Exclusão de Comunicado Realizada com Sucesso.'});
}

}
