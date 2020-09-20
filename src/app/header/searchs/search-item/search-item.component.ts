import { Component, Input, OnInit, Host } from '@angular/core';

// NOTE: Esto es obligatorio para que el ng-content funcione
import { SearchsComponent } from '../searchs.component';
import { SearchsService } from '../searchs.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input('dbs') item;

  constructor() {}

  ngOnInit(): void {}


}
