import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var UIkit;

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @ViewChild('offCanvas') offCanvas: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleMenu(event: Event) {

    event.preventDefault();

    UIkit.offcanvas(this.offCanvas.nativeElement).show();
  }

}
