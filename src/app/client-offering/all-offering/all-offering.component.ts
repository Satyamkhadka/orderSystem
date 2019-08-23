import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/_service/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-offering',
  templateUrl: './all-offering.component.html',
  styleUrls: ['./all-offering.component.css']
})
export class AllOfferingComponent implements OnInit {



  constructor(private router: Router, private fireService: FirestoreService) { }

  offeringData = [];
  offeringView = {
    name: ' ',
    price: ' ',
    discount: ' ',
    shortDescription: ' ',
    keyword: ' ',
    description: ' ',
    category: ' ',
    subCategory: ' '
  };
  viewId: number;
  ngOnInit() {
    this.getOffering();
  }
  getOffering() {
    this.fireService.getOffering().subscribe(data => {
      if (data[0]) {
        this.offeringData = [];
        for (let i = 0; i < data.length; i++) {
          this.offeringData.push(data[i].payload.doc.data());
          this.offeringData[i]['id'] = data[i].payload.doc.id;
        }
      }
    });
  }



  setView(i) {
    console.log(i);
    this.offeringView = this.offeringData[i];
    this.viewId = i;
  }

  onOfferingSelect(id) {
    const offId = { id };
    this.router.navigate(['/offering'], { queryParams: offId, skipLocationChange: true });
  }

}

