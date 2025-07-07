import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CWAttachmentsComponent } from './cw-attachments.component';

describe('CWAttachmentsComponent', () => {
  let component: CWAttachmentsComponent;
  let fixture: ComponentFixture<CWAttachmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CWAttachmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CWAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
