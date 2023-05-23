import { Component,OnInit } from '@angular/core';
import { ApiCalls } from './services/api-calls.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
loadPosts() {
throw new Error('Method not implemented.');
}
  title = 'reddit-viewer';
  private url:string='https://www.reddit.com/r/worldnews.json'
selectedArgument: any;

  constructor(private apiCalls: ApiCalls){
    apiCalls.getPosts()
  }
  ngOnInit(): void {
    fetch(this.url)
    .then((resp)=>resp.json())
    .then(console.log)
  }

  changeTheme(){
    document.body.classList.toggle('dark-mode')
    console.log(document.body.classList)
  }

}
