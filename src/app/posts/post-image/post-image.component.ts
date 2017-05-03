import { Component, EventEmitter, ViewChild, Output, Renderer, Input,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.css']
})
export class PostImageComponent implements OnChanges  {
  @Output() imageChange = new EventEmitter();
  @Input() image : string

  @ViewChild('uploader') fileInput;

  constructor(private renderer : Renderer) { }

  triggerFileUpload() {
    this.renderer.invokeElementMethod(
      this.fileInput.nativeElement,
      'dispatchEvent',
      [new MouseEvent('click', {bubbles:true})]
    );
  }

  uploadImage(event) {
    const render = new FileReader();
    const image = event.target.files[0];

    render.onload = () => {
      const result = render.result;
      this.image = result;
      this.imageChange.emit(result);
    }

    render.readAsDataURL(image);
  }
  ngOnChanges(change : SimpleChanges) {
    if(!change['image'].currentValue){
      this.image = "/assets/no-image.png"
    }
  }
}
