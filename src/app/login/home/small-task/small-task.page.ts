import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subject } from 'rxjs';


export interface Entry {
  create: Date;
  id: string;
}

export interface TimeSpan {
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-small-task',
  templateUrl: './small-task.page.html',
  styleUrls: ['./small-task.page.scss'],
})
export class SmallTaskPage implements OnInit {
//for Countdown in Secondes
  timeLeft = 900;
  // interval;
//for Countdown in Secondes end//

  public route;
  public interval;
  private destroyed$ = new Subject();


  // eslint-disable-next-line @typescript-eslint/member-ordering
  newId: string;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  entries: Entry[] = [];

  constructor(private changeDetector: ChangeDetectorRef, route: Router) { }

  ngOnInit() {
    this.startTimer();  //for Countdown in Secondes//
    this.newId = 'first';
    this.addEntry();

    interval(1000).subscribe(() => {
      // eslint-disable-next-line @typescript-eslint/dot-notation
      if(!this.changeDetector['destroyed']) {
        this.changeDetector.detectChanges();
      }
    });
    this.changeDetector.detectChanges();
  }
//for Countdown in Secondes
  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000);
  }


  onHomePage() {
    this.route.navigate(['home']);
  }
//for Countdown in Secondes end//

  getElapsedTime(entry: Entry): TimeSpan {
    let totalSeconds = Math.floor((new Date().getTime() - entry.create.getTime()) / 1000);;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if(totalSeconds >= 3600){
      hours = Math.floor(totalSeconds / 3600);
      totalSeconds -= 3600 * hours;
    }
    if(totalSeconds >= 60){
      minutes = Math.floor(totalSeconds / 60);
      totalSeconds -= 60 * minutes;
    }
    seconds = totalSeconds;

    return {
      hours,
      minutes,
      seconds
    };

  }

  addEntry() {
    this.entries.push({
      create: new Date(),
      id: this.newId

    });
    this.newId = '';

  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnDestroy(){
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
