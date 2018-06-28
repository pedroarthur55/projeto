import { Component } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label: 'Administração',
              icon: 'fa fa-fw fa-file-o',
              items: [

                {label: 'Advertencia' ,  routerLink:['formulario-advertencia']},
                {label: 'Ata'},
                {label: 'Comunicado', routerLink:['listar-comunicado']},
                {label: 'Enquete', routerLink:['listar-enquete']},
                {label: 'Funcionario',  routerLink:['formulario-funcionario']},
                {label: 'Lazer' , routerLink:['formulario-lazer']},
                {label: 'Pauta', routerLink:['listar-pauta']},
                {label: 'Multa' ,  routerLink:['listar-multa']},
              ]
          },
          {
              label: 'Edit',
              icon: 'fa fa-fw fa-edit',
              items: [
                  {label: 'Undo', icon: 'fa fa-fw fa-mail-forward'},
                  {label: 'Redo', icon: 'fa fa-fw fa-mail-reply'}
              ]
          },
          {
              label: 'Help',
              icon: 'fa fa-fw fa-question',
              items: [
                  {
                      label: 'Contents'
                  },
                  {
                      label: 'Search', 
                      icon: 'fa fa-fw fa-search', 
                      items: [
                          {
                              label: 'Text', 
                              items: [
                                  {
                                      label: 'Workspace'
                                  }
                              ]
                          },
                          {
                              label: 'File'
                          }
                  ]}
              ]
          },
          {
              label: 'Sair',
              icon: 'fa fa-fw fa-gear',
             
              
          }
      ];
  }
}
