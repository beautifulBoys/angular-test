import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'some-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  private nameChild;
  @Output() emitEvent = new EventEmitter();
  @Input() foot;
  @Input()
  set name (name: String) {
    if (name === '李鑫最帅') this.nameChild = name;
  }
  constructor() { }
  clickEvent () {
    // console.log(this);
    // this.fn();
    this.emitEvent.emit({df: '哈哈哈，我是传出事件'});
  }
  fn () {
    console.log(this.foot);
  }
}
