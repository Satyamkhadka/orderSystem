import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../_service/firestore.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  detailData = {};

  constructor(private fireService: FirestoreService) { }

  ngOnInit() {
    this.getDetailData();
  }
  getDetailData() {
    this.fireService.getDetail().subscribe(data => {
      if (data[0]) {
        this.detailData = data[0].payload.doc.data();
      }

    });
  }

}
