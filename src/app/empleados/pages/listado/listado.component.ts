import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Empleado } from '../../interfaces/interface';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
  table {
    width: 100%;
    margin-top: 15px;
  }

  button {
    margin-right: 5px;
  }
`
  ]
})
export class ListadoComponent implements OnInit {

  empleados: Empleado[] = []


  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email','telefono', 'acciones'];



  constructor( private serviceEmpleado: ServicesService,
                private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.serviceEmpleado.getUsuarios().subscribe(res => {
      this.empleados = res
      // console.log(this.empleados)
    })

  }

 

  eliminarEmpleado(id: string){
    this.serviceEmpleado.eliminarEmpleado(id)
      .subscribe(resp => {
        console.log('empleado elminado')
        this.serviceEmpleado.getUsuarios()
        .subscribe(resp => {
          this.empleados = resp
        })
      })
  }

}
