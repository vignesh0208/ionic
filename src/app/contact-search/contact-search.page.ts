import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.page.html',
  styleUrls: ['./contact-search.page.scss'],
})
export class ContactSearchPage implements OnInit {
    public searchTerm: string = "";
    public dataValue: any;
    public dataMsg: any
    constructor(private dataService: DataService) { 
    }
  
    ngOnInit() {
      this.setFilteredItems();
    }
  
    setFilteredItems() {
      this.dataValue = this.dataService.filterItems(this.searchTerm);
      this.dataMsg = this.dataService.filterMsg(this.searchTerm)
    }
    
  }