import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { Empleado } from '../../interfaces/interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styles: [
    `
    img{
      width: 30%;
      height: 300px;
    }

    .btn-volver{
      margin-bottom: 20px;
    }
    
    `]
})
export class DetallesComponent implements OnInit {

  empleado!: Empleado;

  constructor(private empleadosService: ServicesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private snakBar: MatSnackBar) { }


  openSnakBar(message: string){
      this.snakBar.open(message, '!!', {
        duration: 2500
      })

  }            

  ngOnInit(): void {

    this.activatedRoute.params
        .pipe(
          switchMap(({id})=> this.empleadosService.getUsuariosPorId(id))
        )
        .subscribe(resp => this.empleado = resp)

  }


  eliminarEmpleado(id: string){

    this.empleadosService.eliminarEmpleado(id)
      .subscribe(resp => {
        this.router.navigateByUrl('listado')
        this.openSnakBar('Registro Eliminado')
      })
  }
}
