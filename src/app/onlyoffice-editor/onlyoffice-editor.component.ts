import { Component, Input, SimpleChanges, OnChanges, ElementRef, ViewChild } from '@angular/core';

declare global { interface Window { DocsAPI: any; } }

@Component({
  selector: 'app-onlyoffice-editor',
  standalone: true,
  templateUrl: './onlyoffice-editor.component.html'
})
export class OnlyofficeEditorComponent implements OnChanges {

  @Input() nodeData!: {
    label: string,
    key: string,
    data: {
      type: string,
      storege_refrence_id: string,
      title: string,
      per_edit: boolean,
      per_download: boolean,
      mode: string,
      creator: string
    }
  };

  @ViewChild('editorContainer', { static: true }) editorContainer!: ElementRef<HTMLDivElement>;

  private editorInstance: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['nodeData'] && this.nodeData) {
      this.loadEditor();
    }
  }

  loadEditor(): void {
    // پاک کردن ادیتور قبلی (در صورت وجود)
    if (this.editorInstance) {
      this.editorInstance.destroyEditor();
      this.editorContainer.nativeElement.innerHTML = '';
    }

    const file = this.nodeData.data;
    const options = {
      width: '100%',
      height: '100%',
      type: 'desktop',
      documentServerUrl: 'http://192.168.11.70:8080/',
      document: {
        fileType: file?.type,
        key: Date.now().toString(),
        title: this.nodeData.label,
        url: file?.storege_refrence_id,
        permissions: {
          edit: file?.per_edit,
          download: file?.per_download
        }
      },
      editorConfig: {
        mode: file?.mode,
        lang: 'fa',
        user: { id: 'user-1', name: file?.creator },
        paragraphDirection: 'rtl'
      },
      customization: {
        availableFonts: ['B Zar', 'B Titr', 'Far.Nazanin', 'IranNastaliq']
      },
      events: {
        onDocumentReady: () => console.log('OnlyOffice آماده است')
      }
    };

    // ساخت ادیتور جدید
    this.editorInstance = new window.DocsAPI.DocEditor('onlyoffice-editor-container', options);
  }
}
