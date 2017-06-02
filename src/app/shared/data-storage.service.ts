import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs'

// import { UtilityService } from './utility.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http){}

  //get collection by type

  //get product by id

  //get random 4 products (featured)



  getProductSpread(typeId: string) {
    return this.http.get('http://localhost:4201/api/collections/'+typeId)
    .map(
      (response: Response) => {
        const data = response.json()
        return data;
      }
    );
  }
}
