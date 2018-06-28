import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'detalhar-multa',
  templateUrl: './detalhar-multa.component.html',
  styleUrls: ['./detalhar-multa.component.css']
})
export class DetalharMultaComponent implements OnInit {

  multa = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
    this.http.get('/multa/'+id).subscribe(data => {
      this.multa = data;
    });
  }

  deleteBook(id) {
    this.http.delete('/multa/'+id)
      .subscribe(res => {
          this.router.navigate(['/listar-multa']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
