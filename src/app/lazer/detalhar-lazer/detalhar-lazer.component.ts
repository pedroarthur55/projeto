import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'detalhar-lazer',
  templateUrl: './detalhar-lazer.component.html',
  styleUrls: ['./detalhar-lazer.component.css']
})
export class DetalharLazerComponent implements OnInit {

  @Input() lazer;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {    
  }
  
  excluirLazer(id) {
    this.http.delete('/lazer/'+ id)
      .subscribe(res => {
          this.router.navigate(['/listar-lazer']);
        }, (error) => {
          console.log(error);
        }
      );
  }

}
