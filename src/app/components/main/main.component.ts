import { Component } from '@angular/core';
import { Item } from './item-class';
import  { ITEMS }  from './mock-data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  items: Item[] = ITEMS;
  activeIndex: any;
  isClicked: any = false;
  isBackground: any = false;
  isTextColor: any = false;

  images: string[] = ['../../../../assets/img/google-cloud-icon.png',
                     '../../../../assets/img/a_logo.png',
                     '../../../../assets/img/aws_icon.png'];

  toggle(): any {
    this.isClicked = !this.isClicked;
    this.isBackground = !this.isBackground;
    this.isTextColor = !this.isTextColor
  }
}
