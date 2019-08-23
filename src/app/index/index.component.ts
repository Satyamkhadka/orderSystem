import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../_service/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  introData = {};
  offeringData = {};
  offeringDataCard = [];
  whyusData = {};
  constructor(private fireService: FirestoreService, private router: Router) { }

  ngOnInit() {
    this.getIntroData();
    this.getOfferingText();
    this.getOfferingCards();
    this.getWhyus();

  }

  getIntroData() {
    this.fireService.getIntro().subscribe(data => {
      if (data[0]) {
        this.introData = data[0].payload.doc.data();
      }

    });
  }
  getOfferingText() {
    this.fireService.getOfferingText().subscribe(data => {
      if (data[0]) {
        this.offeringData = data[0].payload.doc.data();
      }
      // console.log(this.offeringData);
    });
  }

  getWhyus() {
    this.fireService.getWhyus().subscribe(data => {
      if (data[0]) {
        this.whyusData = data[0].payload.doc.data();
      }
    });
  }

  getOfferingCards() {
    this.fireService.getOffering().subscribe(data => {
      if (data[0]) {
        this.offeringDataCard = [];
        if (data.length > 4) {
          for (let i = 0; i < 4; i++) {
            this.offeringDataCard.push(data[i].payload.doc.data());
            this.offeringDataCard[i]['id'] = data[i].payload.doc.id;

          }
        } else {
          // tslint:disable-next-line: prefer-for-of
          for (let i = 0; i < data.length; i++) {
            this.offeringDataCard.push(data[i].payload.doc.data());
            this.offeringDataCard[i]['id'] = data[i].payload.doc.id;
          }
        }

      }
      // console.log(this.offeringData);
    });
  }
  onOfferingSelect(id) {
    const offId = { id };
    console.log(offId);
    this.router.navigate(['/offering'], { queryParams: offId });
  }
}
