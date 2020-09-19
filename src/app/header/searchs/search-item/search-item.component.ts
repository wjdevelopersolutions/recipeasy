import { Component, Input, OnInit, Host } from '@angular/core';
import { SearchsService } from '../searchs.service';
declare var UIkit;

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input('dbs') item;

  constructor(
    private _SearchsService: SearchsService
  ) {}

  ngOnInit(): void {}

  onAddRecentSearching()
  {
    this._SearchsService.addRecentSearching( this.item );
    UIkit.drop(this._SearchsService.ukDrop).hide();
  }

}
