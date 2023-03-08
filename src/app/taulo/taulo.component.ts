import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shered/api.service';

@Component({
  selector: 'app-taulo',
  templateUrl: './taulo.component.html',
  styleUrls: ['./taulo.component.scss']
})
export class TauloComponent {
  
  students:any = [];

  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.api.getStudents().subscribe({
      next: (res:any) => {
        this.students = res;
      },
      error: (err:any) => {
        console.log("Hiba! Sikertelen rest api lekérés!");
        
      }
      
    });
  }


}
