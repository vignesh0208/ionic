import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  dataValue: any;
  
  constructor() {}

  ionViewWillEnter() {
    setTimeout(() => {
      this.dataValue = [
        {name:'rob',image:'https://semantic-ui.com/images/avatar2/large/matthew.png',message:'UN rejects Saeed\'s plea for removal fro..',id:'1', icons:'call_received',iconColor:'red'},
        {name:'sansa',image:'https://semantic-ui.com/images/avatar2/large/molly.png',message:'Seeking ban on Pak despite ICC snub..',id:'2',icons:'call_received',iconColor:'green'},
        {name:'arya',image:'https://semantic-ui.com/images/avatar2/large/molly.png',message:'Hizbul behind Jammu grenade attack: ..',id:'3',icons:'call_received',iconColor:'red'},
        {name:'jon',image:'https://semantic-ui.com/images/avatar2/large/matthew.png',message:'Celebrate Women\'s Day',id:'4',icons:'call_received',iconColor:'red'},
        {name:'bran',image:'https://semantic-ui.com/images/avatar2/large/elyse.png',message:'Apple CEO \'Tim Apple\'',id:'5',icons:'call_made',iconColor:'green'},
        {name:'ned',image:'https://semantic-ui.com/images/avatar2/large/matthew.png',message:'UN rejects  plea for removal fro..',id:'6',icons:'call_made',iconColor:'green'},
        {name:'tyrion',image:'https://semantic-ui.com/images/avatar2/large/elyse.png',message:'Hizbul behind Jammu attack: ..',id:'7',icons:'call_received',iconColor:'red'},
        {name:'robert',image:'https://semantic-ui.com/images/avatar2/large/matthew.png',message:'Seeking ban on despite ICC snub..',id:'8',icons:'call_made',iconColor:'green'},
        {name:'nick',image:'https://semantic-ui.com/images/avatar2/large/matthew.png',message:'Seeking ban on despite BCC snub..',id:'8',icons:'call_made',iconColor:'green'}
      ];
    }, 2000);
  }
}