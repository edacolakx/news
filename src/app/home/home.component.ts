import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbCarousel, NgbPagination, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import axios from 'axios';

interface NewsItem {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule,NgbCarousel,NgbSlide,NgbPagination],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
news:any
  sliderNews: NewsItem[] = []; 
  listNews: NewsItem[] = []; 
  totalResults:number=0;
  page:number=1;


  constructor(private router: Router) {
    this.fetchData()
 
  }

fetchData(){
  axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=676f017549224f488970f1835f9db971").then((item)=>{
    this.news=item.data
     this.sliderNews = this.news.articles.slice(0, 3);
   this.listNews = this.news.articles.slice(3);
   this.totalResults = this.news.totalResults;
  })
}
getPositionClass(index: number): string {
  return index % 2 === 0 ? 'left' : 'right'; 
}

goToDetailsPage(image: any) {
    
    console.log("object")
    this.router.navigate(['/newspage'], { queryParams: image });
  }

  }

