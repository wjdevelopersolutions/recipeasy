import { Injectable, OnInit, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchsService implements OnInit {
    
    searchForm = new Subject<FormGroup>();
    databaseChange = new Subject<any[]>();
    recentSearchingChanges = new Subject<any[]>();
    ukDrop: ElementRef;

    recentSearching: any[] = [];
    database: any[] = [
        {
          name: 'marcos castillo',
          image: 'https://scontent.fsti4-2.fna.fbcdn.net/v/t1.0-1/s200x200/118232106_10215112898134369_1048496554445355837_n.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_eui2=AeFBAmuT-lDJhwXmI91U6rAgWB5BxDn2RgRYHkHEOfZGBElXZSuihiJ-FVb2b8Ro5pooqGG8fLiw5uudbZbPK58W&_nc_ohc=UcskCdbwgpMAX9tFn9Y&_nc_ht=scontent.fsti4-2.fna&tp=7&oh=60eb90af868685962a238d28b1f1a340&oe=5F86D04D'
        },
        {
          name: 'edixon juma',
          image: 'https://scontent.fsti4-1.fna.fbcdn.net/v/t1.0-9/86857604_2883078435046956_6699298488041078784_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeEHiTKd44qSx0JklIU-yCQ-bNt2BkbX21ps23YGRtfbWqZs4xk09m4AXg20vi16DClLSea_xl67UeoClckR7tje&_nc_ohc=M6tH3fg9fqoAX_vjw5G&_nc_ht=scontent.fsti4-1.fna&oh=6de4d847afcf478c504e2f00d9c467ed&oe=5F88191C'
        },
        {
          name: 'yanilka juma de gomez',
          image: 'https://scontent.fsti4-1.fna.fbcdn.net/v/t1.0-9/52638825_10217817442848414_5767617887086837760_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeHSu1lKYB_v36Pzt7gor3PNINSn2r_xu1cg1Kfav_G7V2oTzyfcVn4sHUvzYp0EAa7xTQ3GZbeiFwl8nYmQGBRz&_nc_ohc=Pfq-XqeQVYsAX-FFhaq&_nc_ht=scontent.fsti4-1.fna&oh=71a652da17ecd9679fc49267de70787e&oe=5F88C26C'
        },
        {
          name: 'adriany almonte',
          image: 'https://scontent.fsti4-2.fna.fbcdn.net/v/t1.0-9/59590283_126365305213356_8805285003840716800_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_eui2=AeErabr8reOOe0y9krS-WDN7t_xGKfbwBW63_EYp9vAFbq1JJGMNuSK3Fs7VaMAsUEmw63x30S7twNLcFSAK7bnS&_nc_ohc=yzNYfV0h4ngAX92Qp1K&_nc_ht=scontent.fsti4-2.fna&oh=34525dde9671c202b185b96fe8d97e55&oe=5F879EA0'
        },
        {
          name: 'juma dixon',
          image: 'https://scontent.fsti4-2.fna.fbcdn.net/v/t1.0-9/118052341_3517543348279688_1193795968796513235_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_eui2=AeEPM_38HARf6uof8Azim0NqZzKDNkvpbDRnMoM2S-lsNActv7_tHKt5I-mRULp5vDODqvQ4pfYaav95P487qxJC&_nc_ohc=SVURW1Wa2hkAX-W12hI&_nc_ht=scontent.fsti4-2.fna&oh=86dd30a41cfb4b77e634bc3b0d90c14b&oe=5F853C72'
        },
        {
          name: 'nathanaela martinez',
          image: 'https://scontent.fsti4-2.fna.fbcdn.net/v/t1.0-9/117681552_709898752901966_1576898493831609743_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_eui2=AeGQe0JSRZOXfqeOcx3Ow-Ehl-HwIOaLykuX4fAg5ovKS3wNfZwvTUV12ICIQ3YkA9mxfD7i6MUsB_Fn--jdZlnr&_nc_ohc=M2PZXvlfaDQAX-GfodZ&_nc_ht=scontent.fsti4-2.fna&oh=096dc5d4c337d066b7a8c377a0f8a9a9&oe=5F85B3FD'
        },
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
    ]

    getDatabase(): any[]
    { 
      return this.database.slice();
    }

    getRecentSearching(): any[]
    { 
      return this.recentSearching.slice();
    }

    constructor()
    {}

    addRecentSearching( data: any )
    {
      this.recentSearching.push( data );
      this.recentSearchingChanges.next(this.recentSearching.slice());
    }

    ngOnInit()
    {
      console.log(this.ukDrop)
    }


}