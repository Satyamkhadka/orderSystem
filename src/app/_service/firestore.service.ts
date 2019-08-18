import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  createIntro(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('intro_data')
        .add(data)
        .then(res => {
        }, err => reject(err));
    });
  }

  getIntro() {
    return this.firestore.collection('intro_data').snapshotChanges();
  }
  updateIntro(data) {
    const id = data.id;
    delete data.id;
    return this.firestore
      .collection('intro_data')
      .doc(id)
      .set(data, { merge: true });
  }

  createDetail(data) {
    delete data.id;
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('detail_data')
        .add(data)
        .then(res => {
        }, err => reject(err));
    });
  }

  getDetail() {
    return this.firestore.collection('detail_data').snapshotChanges();
  }
  updateDetail(data) {
    const id = data.id;
    delete data.id;
    return this.firestore
      .collection('detail_data')
      .doc(id)
      .set(data, { merge: true });
  }

  createOffering(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('offering_data')
        .add(data)
        .then(res => {
        }, err => reject(err));
    });
  }

  getOffering() {
    return this.firestore.collection('offering_data').snapshotChanges();
  }
  updateOffering(data) {
    const id = data.id;
    delete data.id;
    return this.firestore
      .collection('offering_data')
      .doc(id)
      .set(data, { merge: true });
  }

  createWhyus(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('whyus_data')
        .add(data)
        .then(res => {
        }, err => reject(err));
    });
  }

  getWhyus() {
    return this.firestore.collection('whyus_data').snapshotChanges();
  }
  updateWhyus(data) {
    const id = data.id;
    delete data.id;
    return this.firestore
      .collection('whyus_data')
      .doc(id)
      .set(data, { merge: true });
  }

}
