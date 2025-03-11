import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PostDetailComponent } from './pages/blog/post-detail/post-detail.component';
import { CommunityComponent } from './pages/community/community.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "sobre", component: AboutComponent },
    { path: "blog", component: BlogComponent },
    { path: "blog/:slug", component: PostDetailComponent },
    { path: "solucoes", component: SolutionsComponent },
    { path: "contato", component: ContactComponent },
    { path: "comunidade", component: CommunityComponent },
];
