import { Component, OnInit } from '@angular/core';
import {SearchsService} from './searchs/searchs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _SearchsService: SearchsService
  ) { }

  ngOnInit(): void {
    console.log('');
  }

}
