import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'li-header',
  templateUrl: './header.html',
  styleUrls: ['./header.less']
})
export class Header {
  @Input() config;
};
