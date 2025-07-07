import { ChangeDetectorRef, Component, OnInit, OnDestroy, ViewChild, PLATFORM_ID, Inject, Input } from '@angular/core';
import { Galleria } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';

// import { PhotoService } from '@service/photoservice';

@Component({
    selector: 'app-gallery',
      standalone: true,
    imports: [ButtonModule, GalleriaModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',

    // providers: [PhotoService]
})
export class GalleryComponent {
// implements OnInit, OnDestroy
    isFullscreen = false;

    toggleFullScreen() {
        if (this.fullscreen) {
            this.closePreviewFullScreen();
        } else {
            this.openPreviewFullScreen();
        }

        this.cd.detach();
    }

   @Input() images: any[] =[];

    showThumbnails: boolean | undefined;

    fullscreen: boolean = false;

    activeIndex: number = 0;

    onFullScreenListener: any;

    @ViewChild('galleria') galleria: Galleria | undefined;

    constructor(@Inject(PLATFORM_ID) private platformId: any,  private cd: ChangeDetectorRef) {}

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];
    
    ngOnInit() {
        // this.photoService.getImages().then((images) => (this.images = images));

        this.bindDocumentListeners();

    }

    onThumbnailButtonClick() {
        this.showThumbnails = !this.showThumbnails;
    }



    openPreviewFullScreen() {
        let elem = this.galleria?.element.nativeElement.querySelector('.p-galleria');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem['mozRequestFullScreen']) {
            /* Firefox */
            elem['mozRequestFullScreen']();
        } else if (elem['webkitRequestFullscreen']) {
            /* Chrome, Safari & Opera */
            elem['webkitRequestFullscreen']();
        } else if (elem['msRequestFullscreen']) {
            /* IE/Edge */
            elem['msRequestFullscreen']();
        }
    }

    onFullScreenChange() {
        this.fullscreen = !this.fullscreen;
        this.cd.detectChanges();
        this.cd.reattach();
    }

    closePreviewFullScreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        // خطاهاش بررسی بشه
        //  else if (document['mozCancelFullScreen']) {
        //     document['mozCancelFullScreen']();
        // } else if (document['webkitExitFullscreen']) {
        //     document['webkitExitFullscreen']();
        // } else if (document['msExitFullscreen']) {
        //     document['msExitFullscreen']();
        // }
    }

    bindDocumentListeners() {
        this.onFullScreenListener = this.onFullScreenChange.bind(this);
        document.addEventListener('fullscreenchange', this.onFullScreenListener);
        document.addEventListener('mozfullscreenchange', this.onFullScreenListener);
        document.addEventListener('webkitfullscreenchange', this.onFullScreenListener);
        document.addEventListener('msfullscreenchange', this.onFullScreenListener);
    }

    unbindDocumentListeners() {
        document.removeEventListener('fullscreenchange', this.onFullScreenListener);
        document.removeEventListener('mozfullscreenchange', this.onFullScreenListener);
        document.removeEventListener('webkitfullscreenchange', this.onFullScreenListener);
        document.removeEventListener('msfullscreenchange', this.onFullScreenListener);
        this.onFullScreenListener = null;
    }

    ngOnDestroy() {
        this.unbindDocumentListeners();
    }

    galleriaClass() {
        return `custom-galleria ${this.fullscreen ? 'fullscreen' : ''}`;
    }

    fullScreenIcon() {
        return `pi ${this.fullscreen ? 'pi-window-minimize' : 'pi-window-maximize'}`;
    }
}