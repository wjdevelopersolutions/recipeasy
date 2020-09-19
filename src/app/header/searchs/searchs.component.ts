import { SearchsService } from './searchs.service';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-searchs',
  templateUrl: './searchs.component.html',
  styleUrls: ['./searchs.component.scss']
})
export class SearchsComponent implements OnInit, OnDestroy {

  @ViewChild('ukDrop') ukDrop: ElementRef;

  searchForm: FormGroup;

  subscriptionSearch: Subscription;
  subscriptionRecent: Subscription;

  database: any[] = [];
  recentSearching: any[] = [];
 
  constructor(
    private _SearchsService: SearchsService
  ) 
  {

  }

  ngOnInit(): void
  {
    this.searchForm = new FormGroup({
      'busqueda': new FormControl(null, Validators.required)
    });

    this._SearchsService.ukDrop = this.ukDrop;
    
    this.subscriptionSearch = this.searchForm.valueChanges
        .subscribe( () => {
          this._SearchsService.searchForm.next(this.searchForm);
        });
    
    this.subscriptionRecent = this._SearchsService.recentSearchingChanges
        .subscribe( recentSearchingUpdated => {
          this.recentSearching = recentSearchingUpdated;
        })

    this.database = this._SearchsService.getDatabase();
    this.recentSearching = this._SearchsService.getRecentSearching();
  }

  onFormSubmit()
  {
    this.searchForm.reset();
  }

  ngOnDestroy()
  {
    this.subscriptionSearch.unsubscribe();
    this.subscriptionRecent.unsubscribe();
  }

}
