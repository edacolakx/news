import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  categories=[
    "Anasayfa",
    "İş",
    "Eğlence",
    "Genel",
    "Sağlık",
    "Bilim",
    "Spor",
    "Teknoloji",
    "Kategoriler",
    "Hakkımda"
  ]
  constructor(private router: Router) {
    
  }
  goToDetailsPage(route:string) {

    if (route== "Anasayfa") {
      this.router.navigate(["/"]);
    } else if (route == "İş") {
      this.router.navigate(["/individual"], { queryParams: { category: route } });
    }else if (route == "Eğlence") {
      this.router.navigate(["/individual"], { queryParams: { category: route } });
    }else if (route == "Genel") {
      this.router.navigate(["/general"]);
    }else if (route == "Sağlık") {
      this.router.navigate(["/health"]);
    }else if (route == "Bilim") {
      this.router.navigate(["/science"]);
    }else if (route == "Spor") {
      this.router.navigate(["/sports"]);
    }else if (route == "Teknoloji") {
      this.router.navigate(["/technology"]);
    }else if (route == "Hakkımda") {
      this.router.navigate(["/app-about"]);
    }else if (route == "Kategoriler") {
      this.router.navigate(["/app-categories"]);
    }
  }
}
