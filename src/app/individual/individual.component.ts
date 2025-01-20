import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-individual',
  imports: [CommonModule],
  templateUrl: './individual.component.html',
  styleUrl: './individual.component.css'
})
export class IndividualComponent {
  details: any = {};
  newsData: any[] = []; // Haberleri saklamak için dizi

  constructor(private route: ActivatedRoute) {
    console.log(this.details)
    this.fetchdata()
  }

  ngOnInit(): void {
    // Query parametrelerini al
    this.route.queryParams.subscribe((params) => {
      this.details = params;
    });
  }

routename:string=""
  fetchdata(){
    if (this.details=="İş") {
      this.routename= "business"
    }else if(this.details=="Eğlence"){
      this.routename= "entertainment"
    }
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${this.routename}&apiKey=676f017549224f488970f1835f9db971`)
    .then((response:any) =>{
      console.log("response",response.data.articles); // Kontrol için konsola yazdır
      this.newsData=response.data.articles
    })
    .catch((error) => {
      console.error('Veri çekme hatası:', error);
    });
  }
}
