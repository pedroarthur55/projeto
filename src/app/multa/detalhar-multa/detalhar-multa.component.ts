import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'detalhar-multa',
  templateUrl: './detalhar-multa.component.html',
  styleUrls: ['./detalhar-multa.component.css']
})
export class DetalharMultaComponent implements OnInit {

  @Input() multa;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {    
  }
  
  excluirMulta(id) {
    this.http.delete('/multa/'+ id)
      .subscribe(res => {
          this.router.navigate(['/listar-multa']);
        }, (error) => {
          console.log(error);
        }
      );
  }

}
