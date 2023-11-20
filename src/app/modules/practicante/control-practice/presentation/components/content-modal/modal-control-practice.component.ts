import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  Storage,
  getDownloadURL,
  getMetadata,
  listAll,
  ref,
  uploadBytesResumable,
} from '@angular/fire/storage';
import {
  DocumentBackModel,
  DocumentBackResponseModel,
  DocumentDataModel,
} from '../../../data/models/document_back_model';
import { TypeDocumentsUseCase } from '../../../domain/usecase/documents_usecase';
import { LoadingPageComponent } from 'src/app/shared/components/loading/loading-page.component';
import { CreateDocumentsUseCase } from '../../../domain/usecase/create_document_usecase';
import { DomSanitizer } from '@angular/platform-browser';
import { DeleteDocumentsUseCase } from '../../../domain/usecase/delete_document_usecase';
@Component({
  standalone: true,
  selector: 'modal-control-practice',
  templateUrl: './modal-control-practice.component.html',
  styleUrls: ['modal-control-practice.component.css'],
  imports: [CommonModule, LoadingPageComponent],
})
export class ModalControlPractice implements OnInit {
  documentCvCharged: boolean = false;
  uploadProgressDocs: number | null = null;
  currentProgress: number = 0;
  docUploadCompleted: boolean = false;

  @Input() title: string = '';
  @Input() message: string = '';
  @Input() position: string = '';
  @Input() idDocument: string = '';
  @Input() urlDoc: string = '';

  @Output() modalIsOpen = new EventEmitter<boolean>();

  userData: any;

  nameDocViewComplete: string = '';
  pesoDocViewComplete: number = 0;

  docBackData = new DocumentBackModel();

  typeDocument: DocumentBackResponseModel[] = [];

  urlOrigi: any;

  constructor(
    private storage: Storage,
    private cdr: ChangeDetectorRef,
    private typeDocumentsUseCase: TypeDocumentsUseCase,
    private sanitizer: DomSanitizer,
    private createDocumentsUseCase: CreateDocumentsUseCase,
    private deleteDocumentsUseCase: DeleteDocumentsUseCase
  ) {}

  async ngOnInit() {
    this.urlOrigi = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlDoc);
    await this.listTypeDocuments();

    this.userData = JSON.parse(sessionStorage.getItem('userbar')!);
    console.log(this.urlDoc);
  }

  async listTypeDocuments() {
    const response = await this.typeDocumentsUseCase.execute();

    this.typeDocument = response!.data;
  }

  uploadArchive($event: any, folder: string, idDoc: string) {
    this.uploadProgressDocs = 0;

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
                type: idDoc,
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

  async saveDocument() {
    await this.createDocumentsUseCase.execute(this.docBackData);

    await this.listTypeDocuments();

    this.modalIsOpen.emit(false);
  }

  closemodal() {
    this.modalIsOpen.emit(false);
    console.log(this.modalIsOpen);
  }

  async deletedocument() {
    this.urlDoc = '';
    const response = await this.deleteDocumentsUseCase.execute(this.idDocument);
    console.log(response);

  }
}
