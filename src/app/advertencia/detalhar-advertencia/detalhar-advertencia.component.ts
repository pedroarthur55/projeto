import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'detalhar-advertencia',
  templateUrl: './detalhar-advertencia.component.html',
  styleUrls: ['./detalhar-advertencia.component.css']
})
export class DetalharAdvertenciaComponent implements OnInit {

  advertencia = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
    this.http.get('/advertencia/'+id).subscribe(data => {
      this.advertencia = data;
    });
  }

  deleteBook(id) {
    this.http.delete('/advertencia/'+id)
      .subscribe(res => {
          this.router.navigate(['/listar-advertencia']);
        }, (err) => {
          console.log(err);
        }
      );
  }


}
