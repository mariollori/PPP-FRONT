import { Component } from '@angular/core';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

@Component({
    standalone: true,
    selector: 'modal-viewer-doc-component',
    templateUrl: './modal-viewer-doc.component.html',
    imports: [ NgxDocViewerModule ]
})
export class ModalViewerDocComponent {

    url = 'https://firebasestorage.googleapis.com/v0/b/ppp-upeu.appspot.com/o/documents%2Fstudents%2F201711882%2Fcv%2Fmario_rosado_cv.pdf?alt=media&token=e7cf15c8-d2f9-45c2-85d7-301ebaa852fd'

    constructor() { }

}
