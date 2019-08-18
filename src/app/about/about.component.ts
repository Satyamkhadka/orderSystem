import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../_service/firestore.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  introData = {};
  detailData = {};
  constructor(private fireService: FirestoreService) { }

  ngOnInit() {
    this.getIntroData();
    this.getDetailData();

  }

  getIntroData() {
    this.fireService.getIntro().subscribe(data => {
      if (data[0]) {
        this.introData = data[0].payload.doc.data();
      }

    });
  }
  getDetailData() {
    this.fireService.getDetail().subscribe(data => {
      if (data[0]) {
        this.detailData = data[0].payload.doc.data();
      }

    });
  }
}
