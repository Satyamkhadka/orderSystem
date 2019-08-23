import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/_service/firestore.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { FirestorageService } from '../../_service/firestorage.service';
@Component({
  selector: 'app-add-offering',
  templateUrl: './add-offering.component.html',
  styleUrls: ['./add-offering.component.css']
})
export class AddOfferingComponent implements OnInit {
  offeringForm: FormGroup;
  fileName = ' sss';
  file: File;
  constructor(
    private formBuilder: FormBuilder,
    private fireService: FirestoreService,
    private router: Router,
    private fireStorage: FirestorageService) { }

  ngOnInit() {
    this.offeringForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      discount: [''],
      shortDescription: ['', Validators.required],
      keyword: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      subCategory: ['', Validators.required],
      meta: [''],
      downloadURL: ['']
    });
  }


  preview(files) {
    console.log(files[0]);
    this.file = files[0];
    // this.fileName = '';
    // for (const element of files.target.files) {
    //   this.fileName += element.name + ', ';
    // }
    // console.log(this.fileName);
  }


  onOfferingSubmit(formData) {
    if (!this.offeringForm.valid) {
      swal.fire('Oops!', 'Please check the fields', 'warning');
    }

    this.fireStorage.startUpload(this.file).then(async data => {
      console.log(await data.getDownloadURL().toPromise());
      console.log(await data.getMetadata().toPromise());
      const url = await data.getDownloadURL().toPromise();
      const meta = await data.getMetadata().toPromise();
      formData['downloadURL'] = url;
      formData['meta'] = meta.fullPath;
      console.log(formData);
      this.fireService.createOffering(formData)
        .then(res => {
          swal.fire('Yeaa..', ' Offering Created Successfully', 'success');
          this.router.navigateByUrl('/admin');
        }).catch(e => {
          console.log(e);
          swal.fire('Oops!', 'error!', 'error');
        });
    }).catch(e => {
      console.log(e);

      swal.fire('Oops!', 'error!', 'error');
    });


  }

}
