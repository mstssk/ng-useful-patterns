import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface PreventBeforeunload {
    preventBeforeunload: () => boolean;
}

@Injectable()
export class BeforeunloadGuard implements CanDeactivate<PreventBeforeunload> {
    canDeactivate(component: PreventBeforeunload) {
        if (component.preventBeforeunload()) {
            return confirm('Do you want to leave this page?\nChanges you made may not be saved.');
        }
        return true;
    }
}
