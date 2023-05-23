import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Post } from 'src/app/model/post';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http: HttpClient) { }
  getRedditPosts(argument:string):Observable<Post[]>{
    return this.http.get<any>('https://www.reddit.com/r/'+argument+'/hot.json?limit=100').pipe(
      // tap((obj)=>console.log("sono dentro il tap",obj)),
      map((obj)=>obj.data),
      // tap((data)=>console.log('sono dentro il secondo tap',data)),
      map((data)=> data.children),
      // tap((children)=>console.log('sono dentro il terzo tap',children)),
      // map((children)=>children.map((child:any)=>child.data)),
      map((children)=>children.map((child:any)=> {
        if(child.data.url) {
          return child.data
        }
      }),
      // tap((childrenData)=>console.log('sono dentro il quarto tap',childrenData)),
      )

    )
  }
}
