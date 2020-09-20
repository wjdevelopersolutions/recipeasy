import { SearchsService } from './searchs.service';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
declare var UIkit;

@Component({
  selector: 'app-searchs',
  templateUrl: './searchs.component.html',
  styleUrls: ['./searchs.component.scss']
})
export class SearchsComponent implements OnInit, OnDestroy {

  @ViewChild('ukDrop') ukDrop: ElementRef;
  @ViewChild('ukIconDatabase') ukIconDatabase: ElementRef;

  searchForm: FormGroup;

  subscriptionSearch: Subscription;
  subscriptionRecent: Subscription;

  database: any[] = [];
  recentSearching: any[] = [];
 
  constructor(
    private _SearchsService: SearchsService
  ) {}

  ngOnInit(): void
  {
    this.searchForm = new FormGroup({
      'busqueda': new FormControl(null, Validators.required)
    });
    
    console.log(this.ukIconDatabase)
    UIkit.icon(this.ukIconDatabase, { ratio: 30 });
    
    this.subscriptionSearch = this.searchForm.valueChanges
        .subscribe( termino => {
          this._SearchsService.searchForm.next(this.searchForm);
          UIkit.drop(this.ukDrop.nativeElement).show();
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

  onAddRecentSearching(item: any) {
    this._SearchsService.addRecentSearching(item);
    UIkit.drop(this.ukDrop.nativeElement).hide();
    this.searchForm.reset();
  }

  onDeleteSearching(i: number) {
    this._SearchsService.deleteRecentSearching(i);
    // UIkit.drop(this.ukDrop.nativeElement).hide();
  }

  ngOnDestroy()
  {
    this.subscriptionSearch.unsubscribe();
    this.subscriptionRecent.unsubscribe();
  }

}
