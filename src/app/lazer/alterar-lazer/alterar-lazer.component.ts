import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'alterar-lazer',
  templateUrl: './alterar-lazer.component.html',
  styleUrls: ['./alterar-lazer.component.css']
})
export class AlterarLazerComponent implements OnInit {

  lazer: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
  }

  getBook(id) {
    this.http.get('/lazer/'+id).subscribe(data => {
      this.lazer = data;
    });
  }

  updateBook(id) {
    this.lazer.updated_date = Date.now();
    this.http.put('/lazer/'+id, this.lazer)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/listar-lazer']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
