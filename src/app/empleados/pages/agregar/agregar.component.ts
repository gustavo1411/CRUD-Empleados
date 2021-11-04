import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../../interfaces/interface';
import { ServicesService } from '../../services/services.service';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteComponent } from '../../components/confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
  example-card {
    width: 10px;
  }

  button {
    margin-right: 15px;
  }
  `
  ]
})
export class AgregarComponent implements OnInit {

  empleado: Empleado = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: 0
  }

  duration: number = 5;

  constructor(private router: Router,
              private empleadosService: ServicesService,
              private activatedRoute: ActivatedRoute,
              private snakBar: MatSnackBar,
              private dialog: MatDialog) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar')){
      return;
    }

    this.activatedRoute.params
        .pipe(
          switchMap(({id}) => this.empleadosService.getUsuariosPorId(id))
        )
        .subscribe(resp => this.empleado = resp)
  }

  openSnakBar(message: string){
    this.snakBar.open(message, 'ok!', {
      duration: 2500
    })
  }

  
  guardar(){

    if(this.empleado.nombre.trim().length === 0){
      return;
    }

    if(this.empleado.id){
        this.empleadosService.getEditarEmpleado(this.empleado)
          .subscribe(resp => {
            this.router.navigateByUrl('listado')
            this.openSnakBar('Registro Actualizado')
          })
    }else{

      this.empleadosService.guardarEmpleado(this.empleado)
            .subscribe(resp => {
              this.router.navigateByUrl('listado')
              this.openSnakBar('Registro Creado')
            })
    }

  }

  eliminarEmpleado(id: string) {

  const dialog =  this.dialog.open(ConfirmDeleteComponent, {
      width: '250px',
      data: this.empleado         // se puede mandar {...this.empleado} por si se modifica
    })

    dialog.afterClosed().subscribe(
      (result) => {
        if(result){
          this.empleadosService.eliminarEmpleado(id)
              .subscribe(resp => {
                this.router.navigateByUrl('listado')
              })
        }
      }
    )

  }

}
