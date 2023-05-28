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

  pageSize: number = 10;

  index: number = 1;

  pageCount = this.pageSize * this.index;

  posts:Post[]=[];

  constructor(private redditService: RedditService){
    this.loadPosts()
  }

  changeTheme(){
    document.body.classList.toggle('dark-mode')
  }

  loadPosts(){
    // this.posts.filter(post => (post.post_hint === 'hosted:video' || post.post_hint === 'image'))
    this.redditService.getRedditPosts(this.selectedArgument, this.pageSize, this.index).subscribe({
      next:data=>this.posts=data,
      error: err=> console.log(err)
    })
  }

  loadPostsNewSub(){
    this.pageSize = 10;
    this.redditService.getRedditPosts(this.selectedArgument, this.pageSize, this.index).subscribe({
      next:data=>this.posts=data,
      error: err=> console.log(err)
    })
  }

  // previousPage(){
  //   this.index -= 1;
  //   this.redditService.getRedditPosts(this.selectedArgument, this.pageSize, this.index).subscribe({
  //     next:data=>{this.posts = data
  //         // ,window.scrollTo(0, 0)
  //         },
  //     error: err=> console.log(err)
  //   })
  // }

  nextPage(){
    this.index += 1;
    this.redditService.getRedditPosts(this.selectedArgument, this.pageSize, this.index).subscribe({
      next:data=>{this.posts=data,  console.log(this.index)},
      error: err=> console.log(err)
    })
  }

  backToTop() {
    window.scrollTo(0, 0)
  }

}

