import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apiURL = "https://wp.viniviseman.com.br";

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get(`${this.apiURL}/wp-json/wp/v2/blogposts?acf_format=standard&_fields=id,title.rendered,acf,slug,date`);
  }

  getPostBySlug(slug: string) {
    return this.httpClient.get(`${this.apiURL}/wp-json/wp/v2/blogposts?slug=${slug}&acf_format=standard&_fields=id,title.rendered,acf,slug,date`)
      .pipe(map((posts: any) => posts[0]));
  }
}
