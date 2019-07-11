import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from "../services/data.service";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
    selector: 'detail-page',
    templateUrl: 'detail.page.html',
    styleUrls: ['detail.page.scss']
})

export class DetailPage {
    public id: any;
    public dataValue: any;
    currentImage: any;
    constructor(private camera: Camera, private route: ActivatedRoute, private dataService: DataService) { }
    
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getValueInfo()
    }
    
    getValueInfo() {
        this.dataValue = this.dataService.getIdnumValue(this.id);
    }
    

    chatBotValue() {
        
    }

    takePicture() {
        const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        }
      
        this.camera.getPicture(options).then((imageData) => {
          this.currentImage = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
         // Handle error
         console.log("Camera issue:" + err);
        });
    }
}