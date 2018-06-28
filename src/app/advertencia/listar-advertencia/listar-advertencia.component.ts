import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'listar-advertencia',
  templateUrl: './listar-advertencia.component.html',
  styleUrls: ['./listar-advertencia.component.css']
})
export class ListarAdvertenciaComponent implements OnInit {

  advertencias: any;

 constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/advertencia').subscribe(data => {
      console.log(data);
      this.advertencias = data;
    });
  }

}
