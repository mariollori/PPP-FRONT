import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import {
  Storage,
  getDownloadURL,
  getMetadata,
  listAll,
  ref,
  uploadBytesResumable,
} from '@angular/fire/storage';
import { DocumentBackModel } from '../../../data/models/document_back_model';
@Component({
  standalone: true,
  selector: 'modal-control-practice',
  templateUrl: './modal-control-practice.component.html',
  styleUrls: ['modal-control-practice.component.css'],
  imports: [CommonModule],
})
export class ModalControlPractice implements OnInit {
  documentCvCharged: boolean = false;
  uploadProgressDocs: number | null = null;
  currentProgress: number = 0;
  docUploadCompleted: boolean = false;

  @Input() title: string = '';
  @Input() message: string = '';
  @Input() position: number = 0;
  @Input() urlDoc: string = '';

  userData: any;

  nameDocViewComplete: string = '';
  pesoDocViewComplete: number = 0;

  docBackData = new DocumentBackModel();

  constructor(private storage: Storage, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.userData = JSON.parse(sessionStorage.getItem('userbar')!);
    console.log(this.userData);
  }

  uploadArchive($event: any, folder: string, nameDoc: number) {
    this.uploadProgressDocs = 0;
    console.log(nameDoc);

    const pathFirebase = `documents/students/${this.userData.code}/${folder}/`;
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `${pathFirebase}/${file.name}`);

    const uploadTask = uploadBytesResumable(imgRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Manejar cambios de estado durante la subida.
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        const increment = (progress - this.currentProgress) / 100; // Incremento progresivo
        const interval = setInterval(() => {
          this.currentProgress += increment;
          this.uploadProgressDocs = Math.round(this.currentProgress);

          if (this.currentProgress >= progress) {
            clearInterval(interval);
          }
        }, 10);

        this.cdr.detectChanges();
      },
      (error) => {
        console.log('Error de subida:', error);
      },
      async () => {
        const docRef = ref(this.storage, pathFirebase);

        await listAll(docRef).then(async (result) => {
          for (let items of result.items) {
            if (file.name == items.name) {
              const [metadata, url] = await Promise.all([
                getMetadata(items),
                getDownloadURL(items),
              ]);

              const fileSizeBytes = metadata.size;
              const fileSizeKilobytes = fileSizeBytes / 1024;
              const fileSizeMegabytes = fileSizeKilobytes / 1024;

              this.nameDocViewComplete = items.name;
              this.pesoDocViewComplete = fileSizeMegabytes;
              // Subida completa, hacer lo que sea necesario.

              const docsData: DocumentBackModel = {
                type: 'pdf',
                name: items.name,
                urlDocument: url,
                dateUpload: new Date(),
                status: 'Pendiente',
                ppp: this.userData.ppp.id,
              };

              this.docBackData = docsData;
            }
          }
        });
        this.uploadProgressDocs = null;
        this.docUploadCompleted = true;
        this.cdr.detectChanges();
      }
    );

    uploadTask.resume(); // Iniciar la subida.
  }
}
