import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  i;
  width = 0;
  public id: any;
  public dataValue: any;
  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getValueInfo();
    this.loadTimer();
  }

  goBack() {
    this.router.navigate(['/tabs/tab2']);
  }

  getValueInfo() {
    this.dataValue = this.dataService.getIdnumValue(this.id);
  }

  loadTimer() {
    for(this.i=0; this.i<=99; this.i++) {
      setTimeout(() => {
        this.width++
        if(this.width == 100) {
          this.goBack()
        }
      }, 2000);
    }
    
  }
}
