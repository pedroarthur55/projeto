import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/api';




@Component({
  selector: 'formulario-pauta',
  templateUrl: './formulario-pauta.component.html',
  styleUrls: ['./formulario-pauta.component.css']
})
export class FormularioPautaComponent implements OnInit {

  pauta = {};
  msgs: Message[] = [];

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
  }


  salvarPauta(){
    this.http.post('/pauta' , this.pauta).subscribe(
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
        this.msgs.push({severity:'success', summary:'Sucesso:', detail:'Cadastro de Pauta Realizado com Sucesso.'});
}



}

