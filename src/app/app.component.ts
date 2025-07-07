import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CWAttachmentsComponent } from './cw-attachments/cw-attachments.component';
import { OnlyofficeEditorComponent } from './onlyoffice-editor/onlyoffice-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CWAttachmentsComponent,OnlyofficeEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `<app-cw-attachments></app-cw-attachments>`

})
export class AppComponent {
  title = 'onlyoffice-angular';
}
