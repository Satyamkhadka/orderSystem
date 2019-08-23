import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  file: File;
  task;
  downloadURL;
  snapshot;
  async startUpload(file) {
    this.file = file;

    // The storage path
    const path = `test/${Date.now()}_${this.file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    return this.storage.upload(path, this.file).then(data => {
      return ref;
    });

    // Progress monitoring
    // this.percentage = this.task.percentageChanges();

    // this.snapshot = this.task.snapshotChanges().pipe(
    //   tap(console.log),
    //   // The file's download URL
    //   finalize(async () => {
    //     this.downloadURL = await ref.getDownloadURL().toPromise();

    //     this.db.collection('files').add({ downloadURL: this.downloadURL, path });
    //   }),
    // );
  }

}
