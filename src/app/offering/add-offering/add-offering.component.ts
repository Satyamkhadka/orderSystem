import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FirestoreService } from 'src/app/_service/firestore.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-offering',
  templateUrl: './add-offering.component.html',
  styleUrls: ['./add-offering.component.css']
})
export class AddOfferingComponent implements OnInit {
  public imagePath;
  imgURL: any;
  public message: string;
  offeringForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private fireService: FirestoreService) { }

  ngOnInit() {
    this.offeringForm = this.formBuilder.group({
      name: [''],
      price: [''],
      discount: [''],
      shortDescription: [''],
      keyword: [''],
      description: [''],
      category: [''],
      subCategory: ['']
    });
  }


  preview(files) {
    if (files.length === 0) {
      return;
    }
    console.log(files);
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();

    reader.onload = (event: any) => {
      this.imgURL = event.target.result;
    };

    reader.readAsDataURL(files[0]);
  }

  onIntroSubmit(data) {
    this.fireService.createIntro(data)
      .then(res => {
        console.log(res);
      });
  }
}
