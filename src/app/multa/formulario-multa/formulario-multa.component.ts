import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/api';


@Component({
  selector: 'formulario-multa',
  templateUrl: './formulario-multa.component.html',
  styleUrls: ['./formulario-multa.component.css']
})
export class FormularioMultaComponent implements OnInit {

  multa = {};
  msgs: Message[] = [];

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
  }


  salvarMulta(){
    this.http.post('/multa' , this.multa).subscribe(
      res => {
        let id = res['_id'];
        this.mensagemSucesso();
      }, (error) => {
        console.log(error);
      }
    );
  }
  
  mensagemSucesso() {
    this.msgs = [];
        this.msgs.push({severity:'success', summary:'Sucesso:', detail:'Cadastro de Multa Realizado com Sucesso.'});
}


}
