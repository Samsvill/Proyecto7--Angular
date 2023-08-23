import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  
  selectedOption: string = ''; //selected option

  //traer interfaz gastos
  options = [
    { label: 'Option 1', value: 'Alice' },
    { label: 'Option 2', value: 'Bob' },
    { label: 'Option 3', value: 'Carol' }
  ];

  displayedColumns: string[] = ['name', 'age']; // Define displayed columns
  dataSource: any[] = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Carol', age: 22 }
  ]; //Service provider aquuuiiii

  get filteredDataSource(): any[] {
    if (this.selectedOption === 'All') {
      return this.dataSource;
    } else {
      return this.dataSource.filter(item => item.name === this.selectedOption);
    }
  }
}
