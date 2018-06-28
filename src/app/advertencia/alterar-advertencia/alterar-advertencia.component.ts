import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/api';

@Component({
  selector: 'alterar-advertencia',
  templateUrl: './alterar-advertencia.component.html',
  styleUrls: ['./alterar-advertencia.component.css']
})
export class AlterarAdvertenciaComponent implements OnInit {

  @Input() advertencia;
  msgs: Message[] = [];
  

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,
     private messageService: MessageService) { }

  ngOnInit() {
    this.buscaAdvertenciaId(this.route.snapshot.params['id']);
  }

  buscaAdvertenciaId(id) {
    this.http.get('/advertencia/'+id).subscribe(advertenciaId => {
      this.advertencia = advertenciaId;
    });
  }

  atualizarAdvertencia(id) {
    this.advertencia.updated_date = Date.now();
    this.http.put('/advertencia/'+id, this.advertencia)
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
        this.msgs.push({severity:'success', summary:'Sucesso:', detail:'Atualização de Advertencia Realizado com Sucesso.'});
}


}
