import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from "../services/data.service";

@Component({
    selector: 'detail-page',
    templateUrl: 'detail.page.html',
    styleUrls: ['detail.page.scss']
})

export class DetailPage {
    public id: any;
    public dataValue: any;
    constructor(private route: ActivatedRoute, private dataService: DataService) { }
    
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getValueInfo()
    }
    
    getValueInfo() {
        this.dataValue = this.dataService.getIdnumValue(this.id);
    }
    

    chatBotValue() {
        
    }
}