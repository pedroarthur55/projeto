import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'listar-lazer',
  templateUrl: './listar-lazer.component.html',
  styleUrls: ['./listar-lazer.component.css']
})
export class ListarLazerComponent implements OnInit {
  
  lazers: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/lazer').subscribe(data => {
      console.log(data);
      this.lazers = data;
    });
  }

}
