import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/api';

@Component({
  selector: 'formulario-lazer',
  templateUrl: './formulario-lazer.component.html',
  styleUrls: ['./formulario-lazer.component.css']
})
export class FormularioLazerComponent implements OnInit {

  lazer = {};
  msgs: Message[] = [];

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
  }


  salvarLazer(){
    this.http.post('/lazer' , this.lazer).subscribe(
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
        this.msgs.push({severity:'success', summary:'Sucesso:', detail:'Cadastro de Lazer Realizado com Sucesso.'});
}




}
