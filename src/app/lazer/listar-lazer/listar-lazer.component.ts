import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Message, ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'listar-lazer',
  templateUrl: './listar-lazer.component.html',
  styleUrls: ['./listar-lazer.component.css']
})
export class ListarLazerComponent implements OnInit {
  
  listaLazer: any = [];
  lazer = {};
  idLazer: any;
  formularioLazer: boolean = false;
  alterarLazer: boolean = false;
  detalharLazer: boolean = false;
  msgs: Message[] = [];
  
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, 
    private messageService: MessageService, private confirmationService: ConfirmationService) { }


  ngOnInit() {
    this.http.get('/lazer').subscribe(lazer => {
      console.log(lazer);
      this.listaLazer = lazer;    
    });
   
  }

  selecionarLazer(lazer){
    this.lazer = lazer;    
  }

  modalFormularioLazer() {
    this.formularioLazer = true;
}

  modalAlterarLazer() {
  this.alterarLazer = true;
}

  modalDetalharLazer() {
  this.detalharLazer = true;
}

  recebeIdLazer(idLazer){
    this.idLazer = idLazer;
  }

  buscarListaLazer(){
    this.http.get('/lazer').subscribe(lazer => {
      console.log(lazer);
      this.listaLazer = lazer;
    })
  }

  excluirLazer(id) {
    this.http.delete('/lazer/'+ id)
      .subscribe(res => {
        this.mensagemSucesso();
        this.buscarListaLazer();        
        }, (error) => {
          console.log(error);
        }
      );
  }

  confirmaExclusaoLazer() {
    this.confirmationService.confirm({
        message: 'Deseja excluir a Lazer?',
        accept: () => {
          this.excluirLazer(this.idLazer);
        }
    });   
}

mensagemSucesso() {
  this.msgs = [];
      this.msgs.push({severity:'success', summary:'Sucesso:', detail:'Exclusão de Lazer Realizado com Sucesso.'});
}

}
