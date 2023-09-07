import { Component } from '@angular/core';
import { Usuarios } from '../../interfaces/usuarios';
import { DataearnService } from '../../providers/dataearn.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public data : Usuarios[] = [];
  displayedColumns: string[] = ['idUsuario','nombre','apellido','email','contrasena'];

  constructor(private dataProvider: DataearnService) { }
  
  ngOnInit() {
    this.dataProvider.getAllUsers().subscribe((response) => { 
      this.data = (response as Usuarios[]); 
    })
  }
}
