import { Component, OnInit, OnDestroy } from '@angular/core';
import {SearchsService} from './searchs/searchs.service';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  searchForm: FormGroup;
  formIsValid: boolean;
  subscription: Subscription;

  constructor(
    private _SearchsService: SearchsService
  ) { }

  ngOnInit(): void {
    this.formIsValid = false;
    this.subscription = this._SearchsService.searchForm
        .subscribe( (searchForm: FormGroup) => {
          this.searchForm = searchForm;
          this.formIsValid = this.searchForm.valid;
          // console.log(this.searchForm)
        });
  }

  onClearForm() {
    this.searchForm.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
