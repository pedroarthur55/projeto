import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'formulario-comunicado',
  templateUrl: './formulario-comunicado.component.html',
  styleUrls: ['./formulario-comunicado.component.css']
})
export class FormularioComunicadoComponent implements OnInit {
  
  comunicado = {};
  msgs: Message[] = [];

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
  }


  salvarComunicado(){
    this.http.post('/comunicado' , this.comunicado).subscribe(
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
        this.msgs.push({severity:'success', summary:'Sucesso:', detail:'Cadastro de Comunicado Realizado com Sucesso.'});
}



}

