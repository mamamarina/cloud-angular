import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  listItems: string[] = ['Cloud Migration', 'Cloud Governance', 'Cloud Transformation'];
  public activeIndex: any;
}
