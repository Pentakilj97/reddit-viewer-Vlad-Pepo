import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';
import { Post } from 'src/app/model/post';

@Injectable({
  providedIn: 'root',
})
export class RedditService {


  constructor(
    private http: HttpClient,
    // private homePageComponent: HomePageComponent
  ) {
    // this.PAGE_LIMIT = this.homePageComponent.pageSize;
  }

  getRedditPosts(argument: string, pageSize: number): Observable<Post[]> {
    return this.http
      .get<any>(
        'https://www.reddit.com/r/' +
          argument +
          '/hot.json?limit=' +
          pageSize
      )
      .pipe(
        map((obj) => obj.data),
        map((data) => data.children),
        // map((children)=>children.map((child:any)=>child.data)),
        map(
          (children) =>
            children.map((child: any) => {
              if (child.data.url) {
                return child.data;
              }
            })
          // tap((childrenData)=>console.log('sono dentro il quarto tap',childrenData)),
        )
      );
  }
}
