import { Component, HostListener } from '@angular/core';

import { PreventBeforeunload } from './beforeunload.guard';

@Component({
  selector: 'app-beforeunload',
  templateUrl: './beforeunload.component.html',
  styleUrls: ['./beforeunload.component.css']
})
export class BeforeunloadComponent implements PreventBeforeunload {

  data = '';

  preventBeforeunload() {
    if (this.data) {
      return true;
    }
    return false;
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnload(e: Event) {
    console.log(this.preventBeforeunload(), e);
    if (this.preventBeforeunload()) {
      e.cancelBubble = true;
      e.returnValue = true;
    }
  }

}
