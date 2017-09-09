import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GitHubProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GitHubProvider {

  constructor(public http: Http) {
  }

  getRepos(username) {
      let repos = this.http.get(`https://api.github.com/users/${username}/repos`);
      return repos;
  }

}
