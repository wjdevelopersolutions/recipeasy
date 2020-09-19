import { SearchsService } from './searchs.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-searchs',
  templateUrl: './searchs.component.html',
  styleUrls: ['./searchs.component.scss']
})
export class SearchsComponent implements OnInit {
  searchForm: FormGroup;
  database: any[] = [
    {
      name: 'ana delia lopez',
      image: 'https://scontent.fsti4-1.fna.fbcdn.net/v/t1.0-9/81138136_3361928123848640_8358553330691080192_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_eui2=AeHQEap40qlZhPx26iO9TV6zfPDfIMiJ-Ep88N8gyIn4SiJ9YePDEGpB02nHcBnLYwPYC1zWJpt2w8U6EdeGrYMc&_nc_ohc=vF-gNRbewfMAX9RM2-B&_nc_ht=scontent.fsti4-1.fna&oh=67dcd3c93b060eff6d17d44a150025df&oe=5F85957B'
    },
    {
      name: 'yohanna herrera',
      image: 'https://scontent.fsti4-2.fna.fbcdn.net/v/t1.0-9/118770752_10223676291313856_5560605675305753760_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_eui2=AeF_e2oSd8B1iz2AVPrtKh-2WWESX1ZpMutZYRJfVmky63UhQBYWVUTTOlJJvMViiiSBHZPzWAKsYDHknR6c7VUd&_nc_ohc=Ro5nnzhJG2cAX_Cz5Kf&_nc_ht=scontent.fsti4-2.fna&oh=9dbc89402b4a31037d3a1c3cf9d50d8e&oe=5F86B62C'
    },
    {
      name: 'joel minier',
      image: 'https://scontent.fsti4-1.fna.fbcdn.net/v/t1.0-9/75196485_112223866883720_1275705363944964096_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeHrTALphr_2BvjlNOiPRl_-zOZyoHohvIjM5nKgeiG8iNL9yuLi6U8EN9wjvpFZOOJ0K--j2IcNapQGcZDH6SW6&_nc_ohc=ki394fkRD7wAX_6Zxr7&_nc_ht=scontent.fsti4-1.fna&oh=d4ddc25598cc15e74b5b020aee448818&oe=5F85BE98'
    },
    {
      name: 'garibel lopez',
      image: 'https://scontent.fsti4-2.fna.fbcdn.net/v/t1.0-9/108283969_4196878787051179_6153618067181105108_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_eui2=AeHKf5nmEcSjP_uVdRzCyrpbueSdRgmaxkK55J1GCZrGQq34nGCD-Z8H0Z8hA-h8sOLAkCTarqeREJqvEFlMRQ1u&_nc_ohc=JpYGr4yy9swAX8oZeKw&_nc_ht=scontent.fsti4-2.fna&oh=716b32b8b3362246df30c904ff469ccb&oe=5F874A70'
    }
  ];

  constructor(
    private _SearchsService: SearchsService
  ) { }

  ngOnInit(): void
  {
    this.searchForm = new FormGroup({
      'busqueda': new FormControl(null, Validators.required)
    });
  }

  onFormSubmit()
  {
    console.log(this.searchForm);
  }

}
