import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Message, ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'listar-multa',
  templateUrl: './listar-multa.component.html',
  styleUrls: ['./listar-multa.component.css']
})
export class ListarMultaComponent implements OnInit {

  listaMulta: any = [];
  multa = {};
  idMulta: any;
  formularioMulta: boolean = false;
  alterarMulta: boolean = false;
  detalharMulta: boolean = false;
  msgs: Message[] = [];
  
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, 
    private messageService: MessageService, private confirmationService: ConfirmationService) { }


  ngOnInit() {
    this.http.get('/multa').subscribe(multa => {
      console.log(multa);
      this.listaMulta = multa;    
    });
   
  }

  selecionarMulta(multa){
    this.multa = multa;    
  }

  modalFormularioMulta() {
    this.formularioMulta = true;
}

  modalAlterarMulta() {
  this.alterarMulta = true;
}

  modalDetalharMulta() {
  this.detalharMulta = true;
}

  recebeIdMulta(idMulta){
    this.idMulta = idMulta;
  }

  buscarListaMulta(){
    this.http.get('/multa').subscribe(multa => {
      console.log(multa);
      this.listaMulta = multa;
    })
  }

  excluirMulta(id) {
    this.http.delete('/multa/'+ id)
      .subscribe(res => {
        this.mensagemSucesso();
        this.buscarListaMulta();        
        }, (error) => {
          console.log(error);
        }
      );
  }

  confirmaExclusaoMulta() {
    this.confirmationService.confirm({
        message: 'Deseja excluir a Multa?',
        accept: () => {
          this.excluirMulta(this.idMulta);
        }
    });   
}

mensagemSucesso() {
  this.msgs = [];
      this.msgs.push({severity:'success', summary:'Sucesso:', detail:'Exclusão de Multa Realizado com Sucesso.'});
}

}
