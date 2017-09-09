import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GitHubProvider } from '../../providers/git-hub/git-hub';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GitHubProvider],
})
export class HomePage {
  public foundRepos;
  public username;

  constructor(public navCtrl: NavController, public navParams: NavParams, private github: GitHubProvider) {
  }

  getRepos() {
      this.github.getRepos(this.username).subscribe(
          data => {
              this.foundRepos = data.json();
          },
          err => console.error(err),
          () => console.log('getRepos completed')
      );
  }

}
