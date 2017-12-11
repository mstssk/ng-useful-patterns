import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface PreventBeforeunload {
    preventBeforeunload: () => Observable<boolean> | boolean;
}

@Injectable()
export class BeforeunloadGuard implements CanDeactivate<PreventBeforeunload> {
    canDeactivate(component: PreventBeforeunload) {
        let o = component.preventBeforeunload();
        if (typeof o === 'boolean') {
            o = of(o);
        }
        console.log(o);
        return o.pipe(
            map(v => v ? confirm('このページを離れてもよろしいですか？\n行った変更が保存されない可能性があります。') : true),
        );
    }
}
