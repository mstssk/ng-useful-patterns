import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface PreventBeforeunload {
    preventBeforeunload: () => boolean;
}

@Injectable()
export class BeforeunloadGuard implements CanDeactivate<PreventBeforeunload> {
    canDeactivate(component: PreventBeforeunload) {
        if (!component.preventBeforeunload()) {
            return true;
        }
        return confirm('このページを離れてもよろしいですか？\n行った変更が保存されない可能性があります。');
    }
}
