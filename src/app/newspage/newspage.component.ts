import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newspage',
  imports: [],
  templateUrl: './newspage.component.html',
  styleUrl: './newspage.component.css'
})
export class NewspageComponent implements OnInit {
details: any = {};

  constructor(private route: ActivatedRoute) {
    console.log(this.details)
  }

  ngOnInit(): void {
    // Query parametrelerini al
    this.route.queryParams.subscribe((params) => {
      this.details = params;
    });
  }


}
