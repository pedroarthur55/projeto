import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'detalhar-comunicado',
  templateUrl: './detalhar-comunicado.component.html',
  styleUrls: ['./detalhar-comunicado.component.css']
})
export class DetalharComunicadoComponent implements OnInit {
  @Input() comunicado;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {    
  }
  
  excluirComunicado(id) {
    this.http.delete('/comunicado/'+ id)
      .subscribe(res => {
          this.router.navigate(['/listar-comunicado']);
        }, (error) => {
          console.log(error);
        }
      );
  }

}