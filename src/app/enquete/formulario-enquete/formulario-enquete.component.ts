import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/api';

@Component({
  selector: 'formulario-enquete',
  templateUrl: './formulario-enquete.component.html',
  styleUrls: ['./formulario-enquete.component.css']
})
export class FormularioEnqueteComponent implements OnInit {

  enquete = {};
  msgs: Message[] = [];

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
  }


  salvarEnquete(){
    this.http.post('/enquete' , this.enquete).subscribe(
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
        this.msgs.push({severity:'success', summary:'Sucesso:', detail:'Cadastro de Enquete Realizado com Sucesso.'});
}



}

