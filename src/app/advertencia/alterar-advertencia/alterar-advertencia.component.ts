import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'alterar-advertencia',
  templateUrl: './alterar-advertencia.component.html',
  styleUrls: ['./alterar-advertencia.component.css']
})
export class AlterarAdvertenciaComponent implements OnInit {

  advertencia: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
  }

  getBook(id) {
    this.http.get('/advertencia/'+id).subscribe(data => {
      this.advertencia = data;
    });
  }

  updateBook(id) {
    this.advertencia.updated_date = Date.now();
    this.http.put('/advertencia/'+id, this.advertencia)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/listar-advertencia']);
        }, (err) => {
          console.log(err);
        }
      );
  }


}
