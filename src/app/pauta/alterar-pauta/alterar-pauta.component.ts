import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/api';

@Component({
  selector: 'alterar-pauta',
  templateUrl: './alterar-pauta.component.html',
  styleUrls: ['./alterar-pauta.component.css']
})
export class AlterarPautaComponent implements OnInit {

  @Input() pauta;
  msgs: Message[] = [];
  

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,
     private messageService: MessageService) { }

  ngOnInit() {
    this.buscaPautaId(this.route.snapshot.params['id']);
  }

  buscaPautaId(id) {
    this.http.get('/pauta/'+id).subscribe(pautaId => {
      this.pauta = pautaId;
    });
  }

  atualizarPauta(id) {
    this.pauta.updated_date = Date.now();
    this.http.put('/pauta/'+id, this.pauta)
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
        this.msgs.push({severity:'success', summary:'Sucesso:', detail:'Atualização de Pauta Realizado com Sucesso.'});
}

}