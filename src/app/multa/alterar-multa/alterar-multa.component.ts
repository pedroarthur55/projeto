import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'alterar-multa',
  templateUrl: './alterar-multa.component.html',
  styleUrls: ['./alterar-multa.component.css']
})
export class AlterarMultaComponent implements OnInit {

  multa: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
  }

  getBook(id) {
    this.http.get('/multa/'+id).subscribe(data => {
      this.multa = data;
    });
  }

  updateBook(id) {
    this.multa.updated_date = Date.now();
    this.http.put('/multa/'+id, this.multa)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/listar-multa']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
