import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GitHubProvider } from '../../providers/git-hub/git-hub';

/**
 * Generated class for the RepositoryDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-repository-details',
  templateUrl: 'repository-details.html',
  providers: [GitHubProvider],
})
export class RepositoryDetailsPage {
  public readme = '';
  public repo;

  constructor(public navCtrl: NavController, public navParams: NavParams, private github: GitHubProvider) {

    this.repo = navParams.get('repo');

    this.github.getRepoDetails(this.repo).subscribe(
          data => this.readme = data.text(),
          err => {
              if (err.status == 404) {
                  this.readme = 'This repo does not have a README. :(';
              } else {
                  console.error(err);
              }
          },
          () => console.log('getRepoDetails completed')
    );
  }

}
