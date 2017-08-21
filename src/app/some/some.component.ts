import { Component, OnInit, ViewChild  } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css']
})
export class SomeComponent {

  private footers;
  private name;
  public status;
  @ViewChild(ChildComponent) private childccc: ChildComponent;

  constructor() {
    this.footers = [
      {a: 'lixin1', b: 1, c: 'hahah '},
      {a: 'lixin2', b: 2, c: 'hahah '},
      {a: 'lixin3', b: 3, c: 'hahah '},
      {a: 'lixin4', b: 4, c: 'hahah '}
    ];
    this.name = '李鑫最帅';
    this.status = true;
  }
  clickEvent () {
    this.name = '刘蕊最美';
    this.childccc.fn();
  }
  childEvent (a) {
    console.log(a);
  }
}
