import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'formulario-multa',
  templateUrl: './formulario-multa.component.html',
  styleUrls: ['./formulario-multa.component.css']
})
export class FormularioMultaComponent implements OnInit {

  multa = {}

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  salvarLazer() {
    this.http.post('/multa', this.multa)
      .subscribe(res => {
        this.router.navigate(['/listar-multa']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
