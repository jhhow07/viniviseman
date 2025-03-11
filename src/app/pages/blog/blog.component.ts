import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { NewsletterComponent } from "../../components/newsletter/newsletter.component";
import { BlogService } from '../../services/blog.service';
import { CommonModule } from '@angular/common';
import { Route, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NewsletterComponent, CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  postsList: any
  filteredPosts: any
  highLightPost: any;
  postsCategories: string[] = ["Todos"];
  activeFilter: string | null = null;

  paginatedPosts: any[] = [];
  itemsPerPage: number = 3;
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.blogService.getPosts()
      .subscribe((_postsList: any) => {
        this.postsList = _postsList;
        this.filteredPosts = _postsList;
        this.highLightPost = this.postsList.find((x: any) => x.acf.ishighlight === true);

        const uniqueCategories = new Set<string>(["Todos"]);
        this.postsList.forEach((x: any) => {
          uniqueCategories.add(x.acf.category.name);
        });

        this.postsCategories = Array.from(uniqueCategories);
        this.calculateTotalPages();
        this.updatePaginatedPosts();
      });
  }

  filterPosts(category: string): void {
    if (this.activeFilter === category) {
      this.activeFilter = null;
      this.filteredPosts = this.postsList;
    } else {
      this.activeFilter = category;
      if (category.toLowerCase() === "todos") {
        this.filteredPosts = this.postsList;
      } else {
        this.filteredPosts = this.postsList.filter((post: any) =>
          post.acf.category.name.toLowerCase() === category.toLowerCase()
        );
      }
    }
    this.currentPage = 1; // Resetar para a primeira página ao aplicar um filtro
    this.calculateTotalPages();
    this.updatePaginatedPosts();
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.filteredPosts.length / this.itemsPerPage);
  }

  updatePaginatedPosts(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedPosts = this.filteredPosts.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedPosts();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedPosts();
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedPosts();
    }
  }

  getPages(): number[] {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = 1;

    if (this.currentPage > Math.floor(maxPagesToShow / 2)) {
      startPage = this.currentPage - Math.floor(maxPagesToShow / 2);
    }

    if (startPage + maxPagesToShow > this.totalPages) {
      startPage = this.totalPages - maxPagesToShow + 1;
    }

    startPage = Math.max(startPage, 1);

    for (let i = 0; i < maxPagesToShow && startPage + i <= this.totalPages; i++) {
      pages.push(startPage + i);
    }

    return pages;
  }
}
