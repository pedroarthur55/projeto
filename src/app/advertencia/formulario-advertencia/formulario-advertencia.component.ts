import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/api';


@Component({
  selector: 'formulario-advertencia',
  templateUrl: './formulario-advertencia.component.html',
  styleUrls: ['./formulario-advertencia.component.css']
})
export class FormularioAdvertenciaComponent implements OnInit {

  advertencia = {};
  msgs: Message[] = [];

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
  }


  salvarAdvertencia(){
    this.http.post('/advertencia' , this.advertencia).subscribe(
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
        this.msgs.push({severity:'success', summary:'Sucesso:', detail:'Cadastro de Advertencia Realizado com Sucesso.'});
}


}
