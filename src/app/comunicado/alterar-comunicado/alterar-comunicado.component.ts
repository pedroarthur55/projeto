import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'alterar-comunicado',
  templateUrl: './alterar-comunicado.component.html',
  styleUrls: ['./alterar-comunicado.component.css']
})
export class AlterarComunicadoComponent implements OnInit {

  @Input() comunicado;
  msgs: Message[] = [];
  

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,
     private messageService: MessageService) { }

  ngOnInit() {
    this.buscaComunicadoId(this.route.snapshot.params['id']);
  }

  buscaComunicadoId(id) {
    this.http.get('/comunicado/'+id).subscribe(comunicadoId => {
      this.comunicado = comunicadoId;
    });
  }

  atualizarComunicado(id) {
    this.comunicado.updated_date = Date.now();
    this.http.put('/comunicado/'+id, this.comunicado)
      .subscribe(res => {
          let id = res['_id'];
          this.mensagemSucesso();
        }, (error) => {
          console.log(error);
        }
      );
  }

  mensagemSucesso() {
    this.msgs = [];
        this.msgs.push({severity:'success', summary:'Sucesso:', detail:'Atualização de Comunicado Realizado com Sucesso.'});
}

}