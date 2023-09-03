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
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  getMetadata,
  uploadBytesResumable,
  deleteObject,
} from '@angular/fire/storage';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { InputTextMedium } from 'src/app/shared/components/input-text-medium/input-text-medium';
import {
  BannersFirebase,
  DocumementsFirebase,
} from '../../../../data/models/array_modules';
import { CommonModule } from '@angular/common';
import { GlobasToast } from 'src/app/shared/components/toast/globas-toast';
import { GlobalBgAlerts } from 'src/app/shared/components/bg-alerts/global-bg-alerts';
@Component({
  standalone: true,
  selector: 'create-new-plan',
  templateUrl: './create-new-plan.html',
  imports: [InputTextMedium, CommonModule, GlobasToast, GlobalBgAlerts],
})
export class CreateNewPlanModal implements OnInit {
  toast: boolean = false;
  message: string = '';

  validated: boolean = true;
  alertPosition!: number;

  bannerList: BannersFirebase[] = [];

  documents: DocumementsFirebase[] = [];

  uploadProgressBanner: number | null = null;
  uploadProgressDocs: number | null = null;

  constructor(
    private storage: Storage,
    private router: Router,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  actionAlert() {
    if (!this.validated) this.validated = true;
    else this.validated = false;

    this.cdr.detectChanges();
  }

  no() {
    this.validated = false;
  }

  uploadArchive($event: any, folder: string) {
    const pathFirebase = `documents/comite/${folder}/`;
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `${pathFirebase}/${file.name}`);

    getMetadata(imgRef)
      .then(async (metadata) => {
        // Aquí puedes mostrar una advertencia al usuario de que el archivo ya existe.
        this.message = `El archivo "${metadata.name}" ya existe. Intente subir el archivo con otro nombre.`;
        this.toast = true;
        if (folder == 'banners') {
          this.uploadProgressBanner = null;
          this.cdr.detectChanges();
        } else if (folder == 'docs') {
          this.uploadProgressDocs = null;
          this.cdr.detectChanges();
        }
        setTimeout(() => ((this.toast = false), (this.message = '')), 5000);
      })
      .catch((error) => {
        // Si el archivo no existe, puedes proceder a subirlo.
        if (error.code === 'storage/object-not-found') {
          const uploadTask = uploadBytesResumable(imgRef, file);
          let currentProgress = 0;
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              // Manejar cambios de estado durante la subida.
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

              const increment = (progress - currentProgress) / 100; // Incremento progresivo
              const interval = setInterval(() => {
                currentProgress += increment;
                if (folder == 'banners')
                  this.uploadProgressBanner = Math.round(currentProgress);
                else if (folder == 'docs')
                  this.uploadProgressDocs = Math.round(currentProgress);

                if (currentProgress >= progress) {
                  clearInterval(interval);
                }
              }, 10);

              this.cdr.detectChanges();
            },
            (error) => {
              console.log('Error de subida:', error);
            },
            () => {
              const docRef = ref(this.storage, pathFirebase);

              listAll(docRef).then(async (result) => {
                for (let items of result.items) {
                  if (file.name == items.name) {
                    this.message = `Se ha subido un archivo correctamente...!!!`;
                    this.toast = true;
                    const [metadata, url] = await Promise.all([
                      getMetadata(items),
                      getDownloadURL(items),
                    ]);

                    const fileSizeBytes = metadata.size;
                    const fileSizeKilobytes = fileSizeBytes / 1024;
                    const fileSizeMegabytes = fileSizeKilobytes / 1024;

                    // Subida completa, hacer lo que sea necesario.
                    if (folder == 'banners') {
                      this.bannerList.push({
                        name: items.name,
                        url: url,
                        peso: `${fileSizeMegabytes.toFixed(2)} mb`,
                      });

                      this.uploadProgressBanner = null;
                      this.cdr.detectChanges();

                      setTimeout(
                        () => (
                          (this.toast = false),
                          (this.message = ''),
                          (this.uploadProgressBanner = null),
                          this.cdr.detectChanges()
                        ),
                        5000
                      );
                    } else if (folder == 'docs') {
                      console.log(items.name);

                      this.documents.push({
                        name: items.name,
                        urlDocument: url,
                        description: '',
                        status: true,
                        type: '',
                      });

                      this.uploadProgressDocs = null;
                      this.cdr.detectChanges();

                      setTimeout(
                        () => (
                          (this.toast = false),
                          (this.message = ''),
                          (this.uploadProgressDocs = null),
                          this.cdr.detectChanges()
                        ),
                        5000
                      );
                    }
                  }
                }
              });
            }
          );

          uploadTask.resume(); // Iniciar la subida.
        } else {
          console.log('Quefue no se' + error);
        }
      });
  }

  deleteArchive(folder: string, name: string) {
    const pathFirebase = `documents/comite/${folder}`;
    const imgRef = ref(this.storage, `${pathFirebase}/${name}`);

    deleteObject(imgRef)
      .then(async () => {
        if (folder == 'banners')
          this.bannerList = this.bannerList.filter(
            (banner) => banner.name !== name
          );
        else if (folder == 'docs')
          this.documents = this.documents.filter((docs) => docs.name !== name);

        console.log('El archivo se ha eliminado...!');
      })
      .catch((error) => {
        console.log('Error al eliminar el archivo...! ' + error);
      });
  }

  prueba() {
    console.log("devuelve?");

  }
}
