import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'detalhar-pauta',
  templateUrl: './detalhar-pauta.component.html',
  styleUrls: ['./detalhar-pauta.component.css']
})
export class DetalharPautaComponent implements OnInit {

 @Input() pauta;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {    
  }
  
  excluirPauta(id) {
    this.http.delete('/pauta/'+ id)
      .subscribe(res => {
          this.router.navigate(['/listar-pauta']);
        }, (error) => {
          console.log(error);
        }
      );
  }

}