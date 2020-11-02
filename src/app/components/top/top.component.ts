import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  logo='../../../assets/images/logo.svg'
  backTop='../../../assets/images/bg-header-desktop.png'
  backTopM='../../../assets/images/bg-header-mobile.png'
  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
