import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../_service/firestore.service';
@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.css']
})
export class CompanySettingsComponent implements OnInit {
  introForm: FormGroup;
  detailForm: FormGroup;
  offeringForm: FormGroup;
  whyusForm: FormGroup;
  introId: string = null;
  detailId: string = null;
  offeringId: string = null;
  whyusId: string = null;
  introData = {};
  detailData = {};
  offeringData = {};
  whyusData = {};
  constructor(private formBuilder: FormBuilder, private fireService: FirestoreService) { }

  ngOnInit() {
    this.introForm = this.formBuilder.group({
      id: [''],
      name: [''],
      slogan: ['']

    });
    this.detailForm = this.formBuilder.group({
      id: [''],
      street: [''],
      area: [''],
      country: [''],
      contact: [''],
      contact1: [''],
      email: [''],
      facebook: [''],
      instagram: [''],
      website: [''],
    });
    this.offeringForm = this.formBuilder.group({
      title: [''],
      content: ['']
    });
    this.whyusForm = this.formBuilder.group({
      title: [''],
      content: ['']
    });
    this.getIntroData();
    this.getDetailData();
    this.getOfferingData();
    this.getWhyusData();
  }

  onIntroSubmit(data) {
    if (this.introId === null || this.introId === '') {
      this.fireService.createIntro(data)
        .then(res => {
          console.log(res);
        });
    } else {
      this.fireService.updateIntro(data);
    }
  }

  getIntroData() {
    this.fireService.getIntro().subscribe(data => {
      if (data[0]) {
        this.introData = data[0].payload.doc.data();
        this.introId = data[0].payload.doc.id;
        this.introForm.setControl('id', new FormControl(this.introId));
        this.introForm.setControl('name', new FormControl(this.introData['name']));
        this.introForm.setControl('slogan', new FormControl(this.introData['slogan']));
      }

    });
  }


  onDetailSubmit(data) {
    console.log(data);
    if (this.detailId === null || this.detailId === '') {
      this.fireService.createDetail(data)
        .then(res => {
          console.log(res);
        });
    } else {
      this.fireService.updateDetail(data);
    }
  }

  getDetailData() {
    this.fireService.getDetail().subscribe(data => {
      if (data[0]) {
        this.detailData = data[0].payload.doc.data();
        this.detailId = data[0].payload.doc.id;
        this.detailForm.setControl('id', new FormControl(this.detailId));
        this.detailForm.setControl('street', new FormControl(this.detailData['street']));
        this.detailForm.setControl('area', new FormControl(this.detailData['area']));
        this.detailForm.setControl('country', new FormControl(this.detailData['country']));
        this.detailForm.setControl('contact', new FormControl(this.detailData['contact']));
        this.detailForm.setControl('contact1', new FormControl(this.detailData['contact1']));
        this.detailForm.setControl('email', new FormControl(this.detailData['email']));
        this.detailForm.setControl('facebook', new FormControl(this.detailData['facebook']));
        this.detailForm.setControl('instagram', new FormControl(this.detailData['instagram']));
        this.detailForm.setControl('website', new FormControl(this.detailData['website']));
      }
    });
  }


  onOfferingSubmit(data) {
    if (this.offeringId === null || this.offeringId === '') {
      this.fireService.createOffering(data)
        .then(res => {
          console.log(res);
        });
    } else {
      this.fireService.updateOffering(data);
    }
  }

  getOfferingData() {
    this.fireService.getOffering().subscribe(data => {
      if (data[0]) {
        this.offeringData = data[0].payload.doc.data();
        this.offeringId = data[0].payload.doc.id;
        this.offeringForm.setControl('id', new FormControl(this.offeringId));
        this.offeringForm.setControl('title', new FormControl(this.offeringData['title']));
        this.offeringForm.setControl('content', new FormControl(this.offeringData['content']));
      }

    });
  }

  onWhyusSubmit(data) {
    if (this.whyusId === null || this.whyusId === '') {
      this.fireService.createWhyus(data)
        .then(res => {
          console.log(res);
        });
    } else {
      this.fireService.updateWhyus(data);
    }
  }

  getWhyusData() {
    this.fireService.getWhyus().subscribe(data => {
      if (data[0]) {
        this.whyusData = data[0].payload.doc.data();
        this.whyusId = data[0].payload.doc.id;
        this.whyusForm.setControl('id', new FormControl(this.whyusId));
        this.whyusForm.setControl('title', new FormControl(this.whyusData['title']));
        this.whyusForm.setControl('content', new FormControl(this.whyusData['content']));
      }

    });
  }
}
