import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();

  constructor() {}

  handleSearch(event:any, value:string) {
    if (event.target.checkValidity()) {
      event.preventDefault();
      event.target.reset();
      this.searchEvent.emit(value);
    }
  }

  ngOnInit(): void {}
}
