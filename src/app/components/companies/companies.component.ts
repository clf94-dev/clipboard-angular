import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  google='../../../assets/images/logo-google.png'
  hp='../../../assets/images/logo-hp.png'
  ibm='../../../assets/images/logo-ibm.png'
  microsoft='../../../assets/images/logo-microsoft.png'
  vector='../../../assets/images/logo-vector-graphics.png'
  constructor() { }

  ngOnInit(): void {
  }

}
