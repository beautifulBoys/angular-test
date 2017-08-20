import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css']
})
export class SomeComponent {

  private footers;
  private Name;
  public status;

  constructor() {
    this.footers = [
      {a: 'lixin1', b: 1, c: 'hahah '},
      {a: 'lixin2', b: 2, c: 'hahah '},
      {a: 'lixin3', b: 3, c: 'hahah '},
      {a: 'lixin4', b: 4, c: 'hahah '}
    ];
    this.Name = '李鑫最帅';
    this.status = true;
  }
  clickEvent () {
    this.status = false;
  }
}