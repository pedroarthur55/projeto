import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'formulario-advertencia',
  templateUrl: './formulario-advertencia.component.html',
  styleUrls: ['./formulario-advertencia.component.css']
})
export class FormularioAdvertenciaComponent implements OnInit {

  advertencia = {}

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  salvarAdvertencia() {
    this.http.post('/advertencia', this.advertencia)
      .subscribe(res => {
        this.router.navigate(['/listar-advertencia']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
