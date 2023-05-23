import { Component, Injectable } from '@angular/core';
import { Post } from 'src/app/model/post';
import { RedditService } from 'src/app/services/reddit-service/reddit.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

@Injectable()
export class HomePageComponent {

  selectedArgument='all'

  posts:Post[]=[];



  constructor(private redditService: RedditService){
    this.loadPosts()
  }


  changeTheme(){
    document.body.classList.toggle('dark-mode')
    console.log(document.body.classList)
  }

  loadPosts(){
    this.redditService.getRedditPosts(this.selectedArgument).subscribe({
      next:data=>this.posts=data,
      error: err=> console.log(err)
    })
  }
}

