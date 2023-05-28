import { Component } from '@angular/core';
import { HomePageComponent } from '../home-page/home-page.component';
import { Input } from '@angular/core';
import { Post } from 'src/app/model/post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() post?: Post;

  get posts() {
    return this.homePageComponent.posts;


 }

 constructor (private homePageComponent: HomePageComponent) {

 }




 ngOnChanges() {
   let video : HTMLElement | null = document.getElementById('video-post');
   let audio = document.getElementById('audio-post');

   if(video && !video.onplay) {
     video.onplay = function audioAndVideo() {
       console.log(
         "The Boolean paused property is now 'false'. Either the play() method was called or the autoplay attribute was toggled."
       );
     };
   }
 }

}
