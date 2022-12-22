import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  listItems: string[] = ['Learn', 'Develope', 'Founders', 'Community', 'News'];
  activeIndex: any;
}
