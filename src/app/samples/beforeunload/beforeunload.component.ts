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
    return !!this.data;
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnload(e: Event) {
    if (this.preventBeforeunload()) {
      e.returnValue = true;
    }
  }

}
