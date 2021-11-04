import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../interfaces/interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

 baseUrl : string = environment.url;

  constructor(private http: HttpClient) { }



  getUsuarios(): Observable<Empleado[]> {
    return  this.http.get<Empleado[]>(`${this.baseUrl}/usuarios`)
    
  }

  guardarEmpleado(empleado: Empleado): Observable<Empleado>{
    return this.http.post<Empleado>(`${this.baseUrl}/usuarios`, empleado)
  }

  getUsuariosPorId(id: string): Observable <Empleado>{
    return this.http.get<Empleado>(`${this.baseUrl}/usuarios/${id}`)
  }

  getEditarEmpleado(empleado: Empleado): Observable<Empleado>{
    return this.http.put<Empleado>(`${this.baseUrl}/usuarios/${empleado.id}`, empleado)
  }

  eliminarEmpleado(id: string):Observable<Empleado>{
    return this.http.delete<Empleado>(`${this.baseUrl}/usuarios/${id}`)
  }


}
