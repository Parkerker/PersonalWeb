import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adHost]', //這個directive的名字
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }//在directive裡去取得View元件以方便做操作
}
//ViewContainerRef可以讓我們得知目前所在的HTML元素中包含的View內容，
//也可以透過它來改變View的結果(ex: 動態的產生Component、移除某個Component等等)。
