import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'detalhar-enquete',
  templateUrl: './detalhar-enquete.component.html',
  styleUrls: ['./detalhar-enquete.component.css']
})
export class DetalharEnqueteComponent implements OnInit {
  @Input() enquete;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {    
  }
  
  excluirEnquete(id) {
    this.http.delete('/enquete/'+ id)
      .subscribe(res => {
          this.router.navigate(['/listar-enquete']);
        }, (error) => {
          console.log(error);
        }
      );
  }

}