import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/_service/firestore.service';
@Component({
  selector: 'app-offering-view',
  templateUrl: './offering-view.component.html',
  styleUrls: ['./offering-view.component.css']
})
export class OfferingViewComponent implements OnInit {
  id: string;
  // offeringData = {
  //   name: ' ',
  //   price: ' ',
  //   discount: ' ',
  //   shortDescription: ' ',
  //   keyword: ' ',
  //   description: ' ',
  //   category: ' ',
  //   subCategory: ' ',
  //   downloadURL: ' ',
  //   meta: ' '
  // };
  offeringData: any;
  constructor(private route: ActivatedRoute, private firestore: FirestoreService) {

    this.route.queryParams.subscribe(params => {
      this.id = params.id;
      this.loadOfferingData(this.id);
    });


  }

  ngOnInit() {
  }
  loadOfferingData(id) {

    this.firestore.getOneOffering(id).subscribe(data => {
      this.offeringData = data.data();
    });

  }
}
