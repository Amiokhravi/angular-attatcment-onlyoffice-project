import { Component } from '@angular/core';
import { NgIf, NgFor, NgClass, CommonModule } from '@angular/common';
import { TreeNode } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TreeModule } from 'primeng/tree';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule } from '@angular/forms';
import { OnlyofficeEditorComponent } from '../onlyoffice-editor/onlyoffice-editor.component'
import { GalleryComponent } from '../gallery/gallery.component'
@Component({
  selector: 'app-cw-attachments',
  standalone: true,
  imports: [
    OnlyofficeEditorComponent,
    GalleryComponent,
    FormsModule,
    NgIf,
    NgFor,
    NgClass,
    CommonModule,
    ToolbarModule,
    ButtonModule,
    TreeModule,
    CardModule,
    DialogModule,
    FileUploadModule
  ],
  templateUrl: './cw-attachments.component.html',
  styleUrls: ['./cw-attachments.component.css']
})
export class CWAttachmentsComponent {
  hoverEdit: string | null = null;
  hoverDelete: string | null = null;
  editingNode: TreeNode | null = null;
  editingLabel: string = '';
  visibleSidebar = true;
  nodeData!: {
    label: string,
    key: string, data: {
      type: string, sort_no: number,
      is_main_file: boolean,
      is_deleted: boolean,
      mode: string,
      per_edit: boolean,
      per_download: boolean,
      per_delete: boolean,
      create_date_time: string,
      creator: string,
      update_date_time: string,
      updator: string,
      delete_date_time: string,
      deletor: string,
      storege_refrence_id: string,
      bucket_name: string,
      title: string
    }
  };
  images: any[] = []
  //  type: '.xls[.xlsx,.doc,.docx,.pdf,.jpg,.jpeg,.rar,.zip,.html,.xml,.tif,.tiff,.dot,.dotx,.gif,.png,.pps,.ppsx,.ppt,.pptm,.pptx]' ,
  fileTypes = {
    word: ['doc', 'docx', 'dot', 'dotx'],
    pdf: ['pdf'],
    excel: ['xls', 'xlsx', 'xml'],
    powerPoint: ['pps', 'ppsx', 'ppt', 'pptm', 'pptx'],
    rar: ['rar', 'zip'],
    image: ['gif', 'jpg', 'jpeg', 'png'],
    tiff: ['tif', 'tiff',],
    html: ['html'],
    file: ['']

  }
  editNode(node: TreeNode) {
    alert(`در حال ویرایش: ${node.label}`);
    // اینجا می‌تونی دیالوگ یا فرم ویرایش باز کنی
  }

  deleteNode(node: TreeNode) {
    const confirmed = confirm(`آیا از حذف "${node.label}" مطمئنی؟`);
    if (confirmed) {
      this.removeNode(this.nodes, node);
    }
  }


  removeNode(nodes: TreeNode[], target: TreeNode): boolean {
    const index = nodes.indexOf(target);
    if (index > -1) {
      nodes.splice(index, 1);
      return true;
    }

    for (const node of nodes) {
      if (node.children) {
        const removed = this.removeNode(node.children, target);
        if (removed) return true;
      }
    }

    return false;
  }
  //  data: { 
  //  type: '.xls[.xlsx,.doc,.docx,.pdf,.jpg,.jpeg,.rar,.zip,.html,.xml,.tif,.tiff,.dot,.dotx,.gif,.png,.pps,.ppsx,.ppt,.pptm,.pptx]' ,
  //  sort_no:1;
  //  is_main_file:true,
  //  is_deleted:false,
  //  mode:'',
  //  per_edit:false,
  //  per_download:false,
  //  per_delete:false,
  //  create_date_time:'',
  //  creator:'',
  //  update_date_time:'',
  //  updator:'',
  //  delete_date_time:'',
  //  deletor:'',
  //  storege_refrence_id:'',
  //  bucket_name:''} 
  // task error handling when not find file or type error
  nodes: TreeNode[] = [
    {
      label: 'اسناد پروژه',
      key: '0',
      icon: 'pi',
      collapsedIcon: 'pi pi-folder',        // وقتی بسته
      expandedIcon: 'pi pi-folder-open',    // وقتی باز
      children: [
        {
          label: `1463946-بسم الله الرحمن الرحيم متن  مستند تجارب  مصطفي لكزيان`,
          key: '0-0',
          data: {
            type: 'dotx', sort_no: 1,
            is_main_file: false,
            is_deleted: false,
            mode: 'edit',
            per_edit: true,
            per_download: true,
            per_delete: false,
            create_date_time: '',
            creator: '',
            update_date_time: '',
            updator: '',
            delete_date_time: '',
            deletor: '',
            storege_refrence_id: `http://192.168.11.70:8090/myfiles/zarif/1463946-Mustafa Lakzian's Experience Document.dotx`,
            bucket_name: '',
            title: `Mustafa Lakzian's Experience Document`,

          }
        },
        {
          // ?
          label: `2111761-ليست كسري اسناد جاري و سرمايه98`,
          key: '0-1',
          data: {
            type: 'xml', sort_no: 2,
            is_main_file: false,
            is_deleted: false,
            mode: 'edit',
            per_edit: true,
            per_download: true,
            per_delete: true,
            create_date_time: '',
            creator: '',
            update_date_time: '',
            updator: '',
            delete_date_time: '',
            deletor: '',
            storege_refrence_id: `http://192.168.11.70:8090/myfiles/zarif/2111761-List of current and capital instruments deficits 98.xml`,
            bucket_name: '',
            title: `2111761-List of current and capital instruments deficits 98`,
          }
        },
        {
          label: `2218057-لايحه رجب زاده`,
          key: '0-2',
          // title?
          data: {
            type: 'html', sort_no: 3,
            is_main_file: false,
            is_deleted: false,
            mode: 'edit',
            per_edit: true,
            per_download: true,
            per_delete: false,
            create_date_time: '',
            creator: '',
            update_date_time: '',
            updator: '',
            delete_date_time: '',
            deletor: '',
            storege_refrence_id: `http://192.168.11.70:8090/myfiles/zarif/2218057-Rajabzadeh's bill.html`,
            bucket_name: '',
            title: `2218057-Rajabzadeh's bill`,
          }

        },
        // {
        //   label: `گزارش اورهال تپ چنجر`,
        //   key: '0-3',
        //   data: {
        //     type: 'docx', sort_no: 4,
        //     is_main_file: true,
        //     is_deleted: false,
        //     mode: '',
        //     per_edit: true,
        //     per_download: false,
        //     per_delete: false,
        //     create_date_time: '',
        //     creator: '',
        //     update_date_time: '',
        //     updator: '',
        //     delete_date_time: '',
        //     deletor: '',
        //     storege_refrence_id: 'http://192.168.11.70:8090/myfiles/zarif/2681361-overhal.docx',
        //     bucket_name: '',
        //     title: ``,
        //   }
        // },
        {
          label: `2225661-vahdati 92094- 20`,
          key: '0-4',
          data: {
            type: 'pptm', sort_no: 5,
            is_main_file: false,
            is_deleted: false,
            mode: 'edit',
            per_edit: true,
            per_download: true,
            per_delete: false,
            create_date_time: '',
            creator: '',
            update_date_time: '',
            updator: '',
            delete_date_time: '',
            deletor: '',
            storege_refrence_id: `http://192.168.11.70:8090/myfiles/zarif/2225661-vahdati 92094- 20.pptm`,
            bucket_name: '',
            title: `2225661-vahdati 92094- 20`,

          }
        }, {
          label: `2504536-File1`,
          key: '0-5',
          data: {
            type: 'tiff', sort_no: 5,
            is_main_file: false,
            is_deleted: false,
            mode: 'edit',
            per_edit: true,
            per_download: true,
            per_delete: false,
            create_date_time: '',
            creator: '',
            update_date_time: '',
            updator: '',
            delete_date_time: '',
            deletor: '',
            storege_refrence_id: `http://192.168.11.70:8090/myfiles/zarif/2504536-File1.tiff`,
            bucket_name: '',
            title: `2504536-File1`,

          }
        }, {
          label: `2508697-ارايه نيم پليت هاي پست طالقاني`,
          key: '0-6',
          data: {
            type: 'pps', sort_no: 5,
            is_main_file: false,
            is_deleted: false,
            mode: 'edit',
            per_edit: true,
            per_download: true,
            per_delete: false,
            create_date_time: '',
            creator: '',
            update_date_time: '',
            updator: '',
            delete_date_time: '',
            deletor: '',
            storege_refrence_id: `http://192.168.11.70:8090/myfiles/zarif/2508697-Presentation of Taleghani postal half plates.pps`,
            bucket_name: '',
            title: `2508697-Presentation of Taleghani postal half plates test`,

          }
        }, {
          label: `2575001-مانور شريعتي`,
          key: '0-7',
          data: {
            type: 'dot', sort_no: 5,
            is_main_file: false,
            is_deleted: false,
            mode: 'edit',
            per_edit: true,
            per_download: true,
            per_delete: false,
            create_date_time: '',
            creator: '',
            update_date_time: '',
            updator: '',
            delete_date_time: '',
            deletor: '',
            storege_refrence_id: `http://192.168.11.70:8090/myfiles/zarif/2575001-Shariati maneuver.dot`,
            bucket_name: '',
            title: `2575001-Shariati maneuver`,

          }
        }, {
          label: `2622570-Map`,
          key: '0-8',
          data: {
            type: 'gif', sort_no: 5,
            is_main_file: false,
            is_deleted: false,
            mode: 'edit',
            per_edit: true,
            per_download: true,
            per_delete: false,
            create_date_time: '',
            creator: '',
            update_date_time: '',
            updator: '',
            delete_date_time: '',
            deletor: '',
            storege_refrence_id: '',
            bucket_name: `http://192.168.11.70:8090/myfiles/zarif/2622570-Map.gif`,
            title: `2622570-Map`,

          }
        }, {
          label: `2622956-تصوير نهايي نامه`,
          key: '0-9',
          data: {
            type: 'tif', sort_no: 5,
            is_main_file: false,
            is_deleted: false,
            mode: 'edit',
            per_edit: true,
            per_download: true,
            per_delete: false,
            create_date_time: '',
            creator: '',
            update_date_time: '',
            updator: '',
            delete_date_time: '',
            deletor: '',
            storege_refrence_id: `http://192.168.11.70:8090/myfiles/zarif/2622956-final image of the letter.tif`,
            bucket_name: '',
            title: `2622956-final image of the letter`,

          }
        }, {
          label: `2706389-اطلاعيه خريد كالا از ايوان و خيامي`,
          key: '0-10',
          data: {
            type: 'ppsx', sort_no: 5,
            is_main_file: false,
            is_deleted: false,
            mode: 'edit',
            per_edit: true,
            per_download: true,
            per_delete: false,
            create_date_time: '',
            creator: '',
            update_date_time: '',
            updator: '',
            delete_date_time: '',
            deletor: '',
            storege_refrence_id: `http://192.168.11.70:8090/myfiles/zarif/2706389-Notice of purchase of goods from Ivan and Khayami.ppsx`,
            bucket_name: '',
            title: `2706389-Notice of purchase of goods from Ivan and Khayami`,

          }
        }, {
          label: `2710093-آقاي پاپلي`,
          key: '0-11',
          data: {
            type: 'pptx', sort_no: 5,
            is_main_file: false,
            is_deleted: false,
            mode: 'edit',
            per_edit: true,
            per_download: true,
            per_delete: false,
            create_date_time: '',
            creator: '',
            update_date_time: '',
            updator: '',
            delete_date_time: '',
            deletor: '',
            storege_refrence_id: `http://192.168.11.70:8090/myfiles/zarif/2710093-Mr. Popeli.pptx`,
            bucket_name: '',
            title: `2710093-Mr. Popeli`,

          }
        }, {
          label: `2712501-File1`,
          key: '0-12',
          data: {
            type: 'JPEG', sort_no: 5,
            is_main_file: false,
            is_deleted: false,
            mode: 'edit',
            per_edit: true,
            per_download: false,
            per_delete: false,
            create_date_time: '',
            creator: '',
            update_date_time: '',
            updator: '',
            delete_date_time: '',
            deletor: '',
            storege_refrence_id: `http://192.168.11.70:8090/myfiles/zarif/2712501-File1.JPEG`,
            bucket_name: '',
            title: `2712501-File1`,

          }
        }, {
          label: `2713049-پروژه بررسي حادثه ترانس`,
          key: '0-13',
          data: {
            type: 'ppt', sort_no: 5,
            is_main_file: false,
            is_deleted: false,
            mode: 'edit',
            per_edit: true,
            per_download: false,
            per_delete: false,
            create_date_time: '',
            creator: '',
            update_date_time: '',
            updator: '',
            delete_date_time: '',
            deletor: '',
            storege_refrence_id: `http://192.168.11.70:8090/myfiles/zarif/2713049-Trans Incident Investigation Project.ppt`,
            bucket_name: '',
            title: `2713049-Trans Incident Investigation Project`,

          }
        }, {
          label: `2714413-فرم جديد كاركرد پرسنل (1)`,
          key: '0-14',
          data: {
            type: 'xls', sort_no: 5,
            is_main_file: false,
            is_deleted: false,
            mode: 'edit',
            per_edit: true,
            per_download: false,
            per_delete: false,
            create_date_time: '',
            creator: '',
            update_date_time: '',
            updator: '',
            delete_date_time: '',
            deletor: '',
            storege_refrence_id: 'http://192.168.11.70:8090/myfiles/zarif/2714413-New personnel function form (1).xls',
            bucket_name: '',
            title: `2714413-New personnel function form (1)`,

          }
        }, {
          label: `2714592-File1`,
          key: '0-15',
          data: {
            type: 'tiff', sort_no: 5,
            is_main_file: false,
            is_deleted: false,
            mode: 'edit',
            per_edit: true,
            per_download: false,
            per_delete: false,
            create_date_time: '',
            creator: '',
            update_date_time: '',
            updator: '',
            delete_date_time: '',
            deletor: '',
            storege_refrence_id: 'http://192.168.11.70:8090/myfiles/zarif/2714592-File1.tiff',
            bucket_name: '',
            title: `2714592-File1`,

          }
        }, {
          label: `2715024-پيك پايش منطقه تربت حيدريه`,
          key: '0-16',
          data: {
            type: 'xlsx', sort_no: 5,
            is_main_file: false,
            is_deleted: false,
            mode: 'edit',
            per_edit: true,
            per_download: false,
            per_delete: false,
            create_date_time: '',
            creator: '',
            update_date_time: '',
            updator: '',
            delete_date_time: '',
            deletor: '',
            storege_refrence_id: 'http://192.168.11.70:8090/myfiles/zarif/2715024-Monitoring Peak in Torbat-e-Heidarieh Region.xlsx',
            bucket_name: '',
            title: `2715024-Monitoring Peak in Torbat-e-Heidarieh Region`,

          }
        }, {
          label: `2715290-1404-04-02 12-57-50 _0000`,
          key: '0-17',
          data: {
            type: 'jpg', sort_no: 5,
            is_main_file: false,
            is_deleted: false,
            mode: 'edit',
            per_edit: true,
            per_download: false,
            per_delete: false,
            create_date_time: '',
            creator: '',
            update_date_time: '',
            updator: '',
            delete_date_time: '',
            deletor: '',
            storege_refrence_id: 'http://192.168.11.70:8090/myfiles/zarif/2715290-1404-04-02 12-57-50 _0000.jpg',
            bucket_name: '',
            title: `2715290-1404-04-02 12-57-50 _0000`,

          }
        }, {
          label: `2715302-Neishabour_Foolad_1404_03_25`,
          key: '0-18',
          data: {
            type: 'rar', sort_no: 5,
            is_main_file: false,
            is_deleted: false,
            mode: 'edit',
            per_edit: true,
            per_download: false,
            per_delete: false,
            create_date_time: '',
            creator: '',
            update_date_time: '',
            updator: '',
            delete_date_time: '',
            deletor: '',
            storege_refrence_id: 'http://192.168.11.70:8090/myfiles/zarif/2715302-Neishabour_Foolad_1404_03_25.rar',
            bucket_name: '',
            title: `2715302-Neishabour_Foolad_1404_03_25`,

          }
        }, {
          label: `2715334-متن اصلي`,
          key: '0-19',
          data: {
            type: 'doc', sort_no: 5,
            is_main_file: false,
            is_deleted: false,
            mode: 'edit',
            per_edit: true,
            per_download: false,
            per_delete: false,
            create_date_time: '',
            creator: '',
            update_date_time: '',
            updator: '',
            delete_date_time: '',
            deletor: '',
            storege_refrence_id: '',
            bucket_name: '',
            title: `http://192.168.11.70:8090/myfiles/zarif/2715334-maint matn.doc`,

          }
        }, {
          label: `2715348-28090`,
          key: '0-20',
          data: {
            type: 'zip', sort_no: 5,
            is_main_file: false,
            is_deleted: false,
            mode: 'edit',
            per_edit: true,
            per_download: false,
            per_delete: false,
            create_date_time: '',
            creator: '',
            update_date_time: '',
            updator: '',
            delete_date_time: '',
            deletor: '',
            storege_refrence_id: '',
            bucket_name: '',
            title: `http://192.168.11.70:8090/myfiles/zarif/2715348-28090.zip`,

          }
        }, {
          label: `2715431-27896`,
          key: '0-21',
          data: {
            type: 'pdf', sort_no: 5,
            is_main_file: false,
            is_deleted: false,
            mode: 'edit',
            per_edit: true,
            per_download: false,
            per_delete: false,
            create_date_time: '',
            creator: '',
            update_date_time: '',
            updator: '',
            delete_date_time: '',
            deletor: '',
            storege_refrence_id: '',
            bucket_name: '',
            title: `http://192.168.11.70:8090/myfiles/zarif/2715431-27896.pdf`,

          }
        }, {
          label: `2716590-لوازم قابل اشتعال مجاورت پست ثامن`,
          key: '0-22',
          data: {
            type: 'docx', sort_no: 5,
            is_main_file: false,
            is_deleted: false,
            mode: 'edit',
            per_edit: true,
            per_download: false,
            per_delete: false,
            create_date_time: '',
            creator: '',
            update_date_time: '',
            updator: '',
            delete_date_time: '',
            deletor: '',
            storege_refrence_id: `http://192.168.11.70:8090/myfiles/zarif/2715431-27896.docx`,
            bucket_name: '',
            title: `2715431-27896`,

          }
        }, {
          label: `2715431-27896`,
          key: '0-23',
          data: {
            type: 'pdf', sort_no: 5,
            is_main_file: false,
            is_deleted: false,
            mode: 'edit',
            per_edit: true,
            per_download: false,
            per_delete: false,
            create_date_time: '',
            creator: '',
            update_date_time: '',
            updator: '',
            delete_date_time: '',
            deletor: '',
            storege_refrence_id: 'http://192.168.11.70:8090/myfiles/zarif/2715431-27896.pdf',
            bucket_name: '',
            title: `2715431-27896`,

          }
        },
        {
          label: `عکس`,
          key: '1',
          icon: 'pi',
          collapsedIcon: 'pi pi-folder',
          expandedIcon: 'pi pi-folder-open',
          children: [
            {
              label: 'اسکرین‌شات',
              key: '1-0',
              // icon: 'pi pi-image',
              data: {
                type: 'jpg', sort_no: 5,
                is_main_file: false,
                is_deleted: false,
                mode: 'edit',
                per_edit: true,
                per_download: false,
                per_delete: false,
                create_date_time: '',
                creator: '',
                update_date_time: '',
                updator: '',
                delete_date_time: '',
                deletor: '',
                storege_refrence_id: 'http://192.168.11.70:8090/myfiles/zarif/2715290-1404-04-02 12-57-50 _0000.jpg',
                bucket_name: '',
                title: `2715290-1404-04-02 12-57-50 _0000`,

              }
            }
          ]
        }
      ]
    },

  ];
  selectedNode: TreeNode | null = null;



  showUploadDialog = false;

  openUpload() {
    this.showUploadDialog = true;
  }

  handleUpload(event: any) {
    this.showUploadDialog = false;
  }


  startEdit(node: TreeNode) {
    this.editingNode = node;
    this.editingLabel = node.label ?? '';
  }
  saveEdit(node: TreeNode) {
    if (this.editingLabel?.trim()) {
      node.label = this.editingLabel.trim();
    }
    this.editingNode = null;
    this.editingLabel = '';
  }
  finishEdit(node: TreeNode) {
    node.label = this.editingLabel;
    this.editingNode = null;
  }
  toggleEdit(node: TreeNode) {
    if (this.editingNode === node) {
      this.saveEdit(node);
    } else {
      this.editingNode = node;
      this.editingLabel = node.label ?? '';
    }
  }
  isFolder(node: TreeNode): boolean {
    return Array.isArray(node.children) && node.children.length > 0;
  }
  getFileColor(node: TreeNode): string {
    const type = node?.data?.type;
    // console.log("get file color",type);
    if (this.fileTypes.pdf.includes(type)) {
      return 'crimson'
    } else if (this.fileTypes.image.includes(type)) {
      return 'teal'
    } else if (this.fileTypes.excel.includes(type)) {
      return 'green'
    } else if (this.fileTypes.word.includes(type)) {
      return 'dodgerblue'
    }
    else if (this.fileTypes.file.includes(type)) {
      return 'gray'
    }
    else {
      return '#333'
    }
  }

  //  word: ['.doc', '.docx', '.dot', '.dotx'],
  //     pdf: ['.pdf'],
  //     excel: ['.xls', '.xlsx', '.xml'],
  //     ?powerPoint: ['.pps', '.ppsx', '.ppt', '.pptm', '.pptx'],
  //     ?rar: ['.rar', '.zip'],
  //     image: ['.gif', '.jpg', '.jpeg', '.png'],
  //     ?tiff: ['.tif', '.tiff',],
  //     ?html: ['.html'],
  //     file: ['']
  getFileIcon(node: TreeNode): string {
    // console.log('tree node',node);
    const type = node?.data?.type.toLowerCase();
    if (this.fileTypes.pdf.includes(type)) {
      return 'pi pi-file-pdf'
    } else if (this.fileTypes.image.includes(type)) {
      return 'pi pi-image'
    } else if (this.fileTypes.excel.includes(type)) {
      return 'pi pi-file-excel'
    } else if (this.fileTypes.word.includes(type)) {
      return 'pi pi-file-word'
    } else if (this.fileTypes.html.includes(type)) {
      return `assets/icons/html.jfif`
    } else if (this.fileTypes.rar.includes(type)) {
      return `assets/icons/rar.svg`
    } else if (this.fileTypes.powerPoint.includes(type)) {
      return `assets/icons/ppt.jfif`
    }
    else if (this.fileTypes.tiff.includes(type)) {
      return `assets/icons/tiff1.png`
    }
    else {
      return 'pi pi-file'
    }
  }
  treeClickEventHandle(event: any) {
    this.nodeDataFiller(event)
    this.imageFiller([])
  }
  nodeDataFiller(event: any) {
    console.log('tree Data', event);
    this.nodeData = event.node
    return this.nodeData
  }


  imageFiller(event: any) {
    this.images = []
    debugger
    const nodes = this.nodes[0]
    if (nodes?.children) {
      debugger
      this.collectImages(nodes.children)


    }


  }
  collectImages(nodes: any) {
    const imageExtensions = this.fileTypes.image

    nodes.map((node: any) => {
      if (imageExtensions.includes(node?.data?.type.toLowerCase())) {
        this.images.push({
          itemImageSrc: node.data.storege_refrence_id,
          thumbnailImageSrc: node.data.storege_refrence_id,
          title: node.data.title,
          alt: node.data.title
        });
        if (node.children?.length>0) {
          this.collectImages(node.children)
        }
      }
      console.log('this is collectImages',this.images)
    })
  }
}