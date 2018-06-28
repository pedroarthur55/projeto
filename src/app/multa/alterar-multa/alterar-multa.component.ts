import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/api';

@Component({
  selector: 'alterar-multa',
  templateUrl: './alterar-multa.component.html',
  styleUrls: ['./alterar-multa.component.css']
})
export class AlterarMultaComponent implements OnInit {

  @Input() multa;
  msgs: Message[] = [];
  

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,
     private messageService: MessageService) { }

  ngOnInit() {
    this.buscaMultaId(this.route.snapshot.params['id']);
  }

  buscaMultaId(id) {
    this.http.get('/multa/'+id).subscribe(multaId => {
      this.multa = multaId;
    });
  }

  atualizarMulta(id) {
    this.multa.updated_date = Date.now();
    this.http.put('/multa/'+id, this.multa)
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
        this.msgs.push({severity:'success', summary:'Sucesso:', detail:'Atualização de Multa Realizado com Sucesso.'});
}


}
