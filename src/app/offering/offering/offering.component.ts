import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/_service/firestore.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import swal from 'sweetalert2';
@Component({
  selector: 'app-offering',
  templateUrl: './offering.component.html',
  styleUrls: ['./offering.component.css']
})
export class OfferingComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private fireService: FirestoreService) { }

  offeringData = [];
  offeringForm: FormGroup;
  offeringEdit = {};
  offeringView = {
    name: ' ',
    price: ' ',
    discount: ' ',
    shortDescription: ' ',
    keyword: ' ',
    description: ' ',
    category: ' ',
    subCategory: ' ',
    downloadURL: ' ',
    meta: ' '
  };
  viewId: number;
  ngOnInit() {
    this.offeringForm = this.formBuilder.group({
      id: [''],
      name: [''],
      price: [''],
      discount: [''],
      shortDescription: [''],
      keyword: [''],
      description: [''],
      category: [''],
      subCategory: ['']
    });
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
      console.log(this.offeringData);
    });
  }



  setEdit(i) {
    this.offeringEdit = this.offeringData[i];

    this.offeringForm.setControl('id', new FormControl(this.offeringEdit['id']));
    this.offeringForm.setControl('name', new FormControl(this.offeringEdit['name']));
    this.offeringForm.setControl('price', new FormControl(this.offeringEdit['price']));
    this.offeringForm.setControl('discount', new FormControl(this.offeringEdit['discount']));
    this.offeringForm.setControl('shortDescription', new FormControl(this.offeringEdit['shortDescription']));
    this.offeringForm.setControl('keyword', new FormControl(this.offeringEdit['keyword']));
    this.offeringForm.setControl('description', new FormControl(this.offeringEdit['description']));
    this.offeringForm.setControl('category', new FormControl(this.offeringEdit['category']));
    this.offeringForm.setControl('subCategory', new FormControl(this.offeringEdit['subCategory']));
  }

  onEdit(data) {
    swal.fire({
      title: 'Are you sure?',
      text: 'Update Info?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, update it!',
      cancelButtonText: 'No, keep as it is'
    }).then((result) => {
      if (result.value) {
        this.fireService.updateOffering(data);
        swal.fire(
          'updated!',
          'updated successfully',
          'success'
        );
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal.fire(
          'Cancelled',
          'update cancelled :)',
          'success'
        );
      }
    });
  }


  setView(i) {
    console.log(i);
    this.offeringView = this.offeringData[i];
    this.viewId = i;
  }


  onDelete(id) {
    swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this !',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.fireService.deleteOffering(id);
        swal.fire(
          'Deleted!',
          'deleted successfully',
          'success'
        );
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal.fire(
          'Cancelled',
          'Deletion Cancelled :)',
          'error'
        );
      }
    });
  }
}
