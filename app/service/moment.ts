import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MomentService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'http://localhost:81/backend/project/moment.php';

  constructor(private http:Http) {
  }

  getMoments():Promise<any> {
    return this.http.get(this.url)
      .toPromise()
      .then(response=>response.json());
  }
}
