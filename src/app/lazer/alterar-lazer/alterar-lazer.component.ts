import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/api';

@Component({
  selector: 'alterar-lazer',
  templateUrl: './alterar-lazer.component.html',
  styleUrls: ['./alterar-lazer.component.css']
})
export class AlterarLazerComponent implements OnInit {

  @Input() lazer;
  msgs: Message[] = [];
  

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,
     private messageService: MessageService) { }

  ngOnInit() {
    this.buscaLazerId(this.route.snapshot.params['id']);
  }

  buscaLazerId(id) {
    this.http.get('/lazer/'+id).subscribe(lazerId => {
      this.lazer = lazerId;
    });
  }

  atualizarLazer(id) {
    this.lazer.updated_date = Date.now();
    this.http.put('/lazer/'+id, this.lazer)
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
        this.msgs.push({severity:'success', summary:'Sucesso:', detail:'Atualização de Lazer Realizado com Sucesso.'});
}

}
