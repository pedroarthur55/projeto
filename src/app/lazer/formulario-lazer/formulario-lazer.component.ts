import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'formulario-lazer',
  templateUrl: './formulario-lazer.component.html',
  styleUrls: ['./formulario-lazer.component.css']
})
export class FormularioLazerComponent implements OnInit {

  lazer = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  salvarLazer() {
    this.http.post('/lazer', this.lazer)
      .subscribe(res => {
        this.router.navigate(['/listar-lazer']);
        }, (err) => {
          console.log(err);
        }
      );
  }



}
