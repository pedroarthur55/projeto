import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'detalhar-advertencia',
  templateUrl: './detalhar-advertencia.component.html',
  styleUrls: ['./detalhar-advertencia.component.css']
})
export class DetalharAdvertenciaComponent implements OnInit {

  @Input() advertencia;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {    
  }
  
  excluirAdvertencia(id) {
    this.http.delete('/advertencia/'+ id)
      .subscribe(res => {
          this.router.navigate(['/listar-advertencia']);
        }, (error) => {
          console.log(error);
        }
      );
  }


}
