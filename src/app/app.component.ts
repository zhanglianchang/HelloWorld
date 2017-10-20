import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'app';
  imgSrc: string = 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3776029529,3338575645&fm=58&bpow=513&bpoh=512&u_exp_0=3589050425,3021808512&fm_exp_0=86';
  
  userName: string = 'care';

  mapStatus: number = 1;

  currentTime: Date = new Date();
  flag: boolean = false;
  testClick() {
    alert('测试事件');
  }

  public currentClasses: {};
  
  public canSave: boolean = true;
  public isUnchanged: boolean = true;
  public isSpecial: boolean = true;
  
  setCurrentClasses() {
      this.currentClasses = {
          'saveable': this.canSave,
          'modified': this.isUnchanged,
          'special': this.isSpecial
      };
  }

  constructor() {
    setInterval(()=>{
      this.currentTime = new Date();
    }, 1000);
  }
}
