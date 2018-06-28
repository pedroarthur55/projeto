import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Message, ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'listar-enquete',
  templateUrl: './listar-enquete.component.html',
  styleUrls: ['./listar-enquete.component.css']
})
export class ListarEnqueteComponent implements OnInit {

  listaEnquete: any = [];
  enquete = {};
  idEnquete: any;
  formularioEnquete: boolean = false;
  alterarEnquete: boolean = false;
  detalharEnquete: boolean = false;
  msgs: Message[] = [];
  
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, 
    private messageService: MessageService, private confirmationService: ConfirmationService) { }


  ngOnInit() {
    this.http.get('/enquete').subscribe(enquete => {
      console.log(enquete);
      this.listaEnquete = enquete;    
    })
  }

  selecionarEnquete(enquete){
    this.enquete = enquete;    
  }

  modalFormularioEnquete() {
    this.formularioEnquete = true;
}

  modalAlterarEnquete() {
  this.alterarEnquete = true;
}

  modalDetalharEnquete() {
  this.detalharEnquete = true;
}

  recebeIdEnquete(idEnquete){
    this.idEnquete = idEnquete;
  }

  buscarListaEnquete(){
    this.http.get('/enquete').subscribe(enquete => {
      console.log(enquete);
      this.listaEnquete = enquete;
    })
  }

  excluirEnquete(id) {
    this.http.delete('/enquete/'+ id)
      .subscribe(res => {
        this.mensagemSucesso();
        this.buscarListaEnquete();        
        }, (error) => {
          console.log(error);
        }
      );
  }

  confirmaExclusaoEnquete() {
    this.confirmationService.confirm({
        message: 'Deseja excluir a Enquete?',
        accept: () => {
          this.excluirEnquete(this.idEnquete);
        }
    });   
}

mensagemSucesso() {
  this.msgs = [];
      this.msgs.push({severity:'success', summary:'Sucesso:', detail:'Exclusão de Enquete Realizada com Sucesso.'});
}

}
