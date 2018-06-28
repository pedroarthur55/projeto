import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'detalhar-lazer',
  templateUrl: './detalhar-lazer.component.html',
  styleUrls: ['./detalhar-lazer.component.css']
})
export class DetalharLazerComponent implements OnInit {

  lazer = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
    this.http.get('/lazer/'+id).subscribe(data => {
      this.lazer = data;
    });
  }

  deleteBook(id) {
    this.http.delete('/lazer/'+id)
      .subscribe(res => {
          this.router.navigate(['/listar-lazer']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
