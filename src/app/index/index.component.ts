import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../_service/firestore.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  introData = {};
  offeringData = {};
  whyusData = {};
  constructor(private fireService: FirestoreService) { }

  ngOnInit() {
    this.getIntroData();
    this.getOffering();
    this.getWhyus();

  }

  getIntroData() {
    this.fireService.getIntro().subscribe(data => {
      if (data[0]) {
        this.introData = data[0].payload.doc.data();
      }

    });
  }
  getOffering() {
    this.fireService.getOffering().subscribe(data => {
      if (data[0]) {
        this.offeringData = data[0].payload.doc.data();
      }

    });
  }

  getWhyus() {
    this.fireService.getWhyus().subscribe(data => {
      if (data[0]) {
        this.whyusData = data[0].payload.doc.data();
      }

    });
  }
}
