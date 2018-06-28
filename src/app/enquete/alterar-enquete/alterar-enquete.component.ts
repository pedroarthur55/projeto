import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'alterar-enquete',
  templateUrl: './alterar-enquete.component.html',
  styleUrls: ['./alterar-enquete.component.css']
})
export class AlterarEnqueteComponent implements OnInit {
  @Input() enquete;
  msgs: Message[] = [];
  

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,
     private messageService: MessageService) { }

  ngOnInit() {
    this.buscaEnqueteId(this.route.snapshot.params['id']);
  }

  buscaEnqueteId(id) {
    this.http.get('/enquete/'+id).subscribe(enqueteId => {
      this.enquete = enqueteId;
    });
  }

  atualizarEnquete(id) {
    this.enquete.updated_date = Date.now();
    this.http.put('/enquete/'+id, this.enquete)
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
        this.msgs.push({severity:'success', summary:'Sucesso:', detail:'Atualização de Enquete Realizado com Sucesso.'});
}

}