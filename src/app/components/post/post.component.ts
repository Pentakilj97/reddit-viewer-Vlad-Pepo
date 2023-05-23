import { Component } from '@angular/core';
import { HomePageComponent } from '../home-page/home-page.component';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  get posts() {
    return this.homePageComponent.posts;
 }

 constructor (private homePageComponent: HomePageComponent) {

 }


}
