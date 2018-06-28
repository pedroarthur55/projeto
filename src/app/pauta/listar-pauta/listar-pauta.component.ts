import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Message, ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'listar-pauta',
  templateUrl: './listar-pauta.component.html',
  styleUrls: ['./listar-pauta.component.css']
})
export class ListarPautaComponent implements OnInit {  

  listaPauta: any = [];
  pauta = {};
  idPauta: any;
  formularioPauta: boolean = false;
  alterarPauta: boolean = false;
  detalharPauta: boolean = false;
  msgs: Message[] = [];
  
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, 
    private messageService: MessageService, private confirmationService: ConfirmationService) { }


  ngOnInit() {
    this.http.get('/pauta').subscribe(pauta => {
      console.log(pauta);
      this.listaPauta = pauta;    
    });
   
  }

  selecionarPauta(pauta){
    this.pauta = pauta;    
  }

  modalFormularioPauta() {
    this.formularioPauta = true;
}

  modalAlterarPauta() {
  this.alterarPauta = true;
}

  modalDetalharPauta() {
  this.detalharPauta = true;
}

  recebeIdPauta(idPauta){
    this.idPauta = idPauta;
  }

  buscarListaPauta(){
    this.http.get('/pauta').subscribe(pauta => {
      console.log(pauta);
      this.listaPauta = pauta;
    })
  }

  excluirPauta(id) {
    this.http.delete('/pauta/'+ id)
      .subscribe(res => {
        this.mensagemSucesso();
        this.buscarListaPauta();        
        }, (error) => {
          console.log(error);
        }
      );
  }

  confirmaExclusaoPauta() {
    this.confirmationService.confirm({
        message: 'Deseja excluir a Pauta?',
        accept: () => {
          this.excluirPauta(this.idPauta);
        }
    });   
}

mensagemSucesso() {
  this.msgs = [];
      this.msgs.push({severity:'success', summary:'Sucesso:', detail:'Exclusão de Pauta Realizado com Sucesso.'});
}

}
