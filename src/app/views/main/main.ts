import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrls: ['./main.less']
})
export class Main {
  private headerConfig;
  ngOnInit () {
    this.headerConfig = {
      left: '',
      title: '高级前端工程师',
      right: '意向'
    };
  }
};
