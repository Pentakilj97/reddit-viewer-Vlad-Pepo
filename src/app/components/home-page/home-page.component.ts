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

  pageSize: number = 1;

  constructor(private redditService: RedditService){
    this.loadPosts()
    this.getPage()
    redditService.PAGE_LIMIT = this.pageSize
  }

  getPage() {
    console.log(this.pageSize)
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

