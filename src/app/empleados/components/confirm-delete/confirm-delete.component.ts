import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Empleado } from '../../interfaces/interface';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styles: [
  ]
})
export class ConfirmDeleteComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Empleado) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  borrar(){
    this.dialogRef.close(true)
  }

  cancelar(){
    this.dialogRef.close();
  }

}
