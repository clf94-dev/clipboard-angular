import { Component, OnInit } from '@angular/core';
import { FeaturesData } from './featuresData';
import * as AOS from 'aos';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  public data: FeaturesData[];
  imgArray = [ '../../../assets/images/icon-blacklist.svg','../../../assets/images/icon-text.svg','../../../assets/images/icon-preview.svg'];
  
   
  constructor() {

    this.data = [
      new FeaturesData('Create blacklists', 'Ensure sensitive information never makes its way to your clipboard by excluding certain sources.', 'Create blacklists',100),
      new FeaturesData('Plain text snippets', 'Remove unwanted formatting from copied text for a consistent look.', 'Plain text snippets',300),
      new FeaturesData('Sneak preview', 'Quick preview of all snippets on your Clipboard for easy access.', 'Sneak preview',500)
    ]
   }

  ngOnInit(): void {
    AOS.init()
  }

}
