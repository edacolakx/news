import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import axios from 'axios';

interface NewsResponse {
  articles: any[];
  // diğer response alanlarını da ekleyebilirsiniz
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,MatCheckboxModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  article: any[] = [];
selectedCategories: string[] = []; // Seçili kategoriler burada saklanacak.
   categories = [
    { name: "business", label: "Business" },
    { name: "entertainment", label: "Entertainment" },
    { name: "sports", label: "Sports" }, // Ek kategoriler eklenebilir
  ]
 onCategoryChange(event: any, category: string) {
    if (event.target.checked) {
      // Checkbox seçildiğinde kategori ekle
      this.selectedCategories.push(category);
    } else {
      // Checkbox kaldırıldığında kategori çıkar
      this.selectedCategories = this.selectedCategories.filter(
        (cat) => cat !== category
      );
    }

    this.fetchArticles(); // Her değişiklikte makaleleri güncelle
  }
  onBusinessChange(event: any) {
    axios.get<NewsResponse>("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=676f017549224f488970f1835f9db971")
    .then((item)=>{
      this.article = [...item.data.articles];
      console.log("Makaleler:", this.article[0].author);
    })
  }

   onEntartainmentChange(event: any) {
    axios.get<NewsResponse>("https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=676f017549224f488970f1835f9db971")
    .then((item)=>{
      this.article = [...item.data.articles];
      console.log("Makaleler:", this.article[0].author);
    })
  }

  constructor() {
    this.fetchData()
  }
  fetchData(){
    axios.get<NewsResponse>("https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=676f017549224f488970f1835f9db971")
    .then((item)=>{
      console.log(item.data)    
    })
  }


  fetchArticles() {
    if (this.selectedCategories.length === 0) {
      // Eğer hiçbir kategori seçilmediyse makaleleri temizle
      this.article = [];
      return;
    }

    const categoryQuery = this.selectedCategories.join(",");
    axios
      .get<NewsResponse>(
        `https://newsapi.org/v2/top-headlines?country=us&category=${categoryQuery}&apiKey=676f017549224f488970f1835f9db971`
      )
      .then((response) => {
        this.article = response.data.articles;
        console.log("Güncel Makaleler:", this.article);
      })
      .catch((error) => {
        console.error("Haberleri alırken hata oluştu:", error);
      });
  }
}

