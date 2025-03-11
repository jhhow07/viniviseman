import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog.service';
import { NewsletterComponent } from "../../../components/newsletter/newsletter.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [NewsletterComponent],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent {
  post: any;
  relatedPosts: any;

  constructor(private route: ActivatedRoute, private blogService: BlogService, private datePipe: DatePipe) { }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug) {
      this.blogService.getPostBySlug(slug)
        .subscribe((post: any) => {
          this.post = post
        });
    }
  }

  formatDate(date: string): string {
    return this.datePipe.transform(date, 'd MMMM, y') || '';
  }
}
