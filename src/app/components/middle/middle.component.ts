import { Component, OnInit } from '@angular/core';
import { MiddleInfo } from './middleCardInfo';
import * as AOS from 'aos';
@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {

  desktopImg='../../../assets/images/image-computer.png'
  devicesImg='../../../assets/images/image-devices.png'
  public data: MiddleInfo [];
  constructor() { 
    this.data = [
      new MiddleInfo('Quick Search','Easily search your snippets by content, category, web address, application, and more.'),
      new MiddleInfo('iCloud Sync','Instantly saves and syncs snippets across all your devices.'),
      new MiddleInfo('Complete History','Retrieve any snippets from the first moment you started using the app.'),
    ]
  }

  ngOnInit(): void {
    AOS.init()
  }

}
