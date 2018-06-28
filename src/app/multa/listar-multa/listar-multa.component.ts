import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'listar-multa',
  templateUrl: './listar-multa.component.html',
  styleUrls: ['./listar-multa.component.css']
})
export class ListarMultaComponent implements OnInit {

 multas: any;

 constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/multa').subscribe(data => {
      console.log(data);
      this.multas = data;
    });
  }

}
