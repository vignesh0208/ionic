import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  valu
  ev: any;
  constructor(public popoverController: PopoverController) { }

  async presentPopover(ev: any) {
    // const popoverController = document.querySelector('ion-popover-controller');
    // await popoverController.componentOnReady();
    // const popover = await this.popoverController.create({
    //   component: PopoverComponent,
    //   event: ev,
    //   translucent: true,
    //   animated: true,
    // });
    const popoverElement = await this.popoverController.create({
      component: PopoverComponent,
      event: ev
    });
    // return await popover.present();
    return await popoverElement.present();
  }

}
