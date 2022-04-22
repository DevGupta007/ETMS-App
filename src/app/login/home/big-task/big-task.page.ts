import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { TasksService } from '../../../services/tasks/tasks.service';
import { Insomnia } from '@awesome-cordova-plugins/insomnia/ngx';

@Component({
  selector: 'app-big-task',
  templateUrl: './big-task.page.html',
  styleUrls: ['./big-task.page.scss'],
})
export class BigTaskPage implements OnInit, OnDestroy {

  timeLeftMin = 89;
  timeLeftSec = 60;
  count: any = 0;
  interval;


  constructor(
    private insomnia: Insomnia,
    private route: Router,
    public tasksService: TasksService,
    public alertService: AlertService,
  ) {}


  ngOnInit() {
    this.startInsomia();
    this.startTimerMin();
    this.startTimerSec();
  }

  // Count down timer for minute
  startTimerMin() {
    this.interval = setInterval(() => {
      if (this.timeLeftMin > 0) {
        this.timeLeftMin--;
      } else {
        this.timeLeftMin = 0;
        this.count = localStorage.getItem('bigTaskCount');
        this.count++;
        localStorage.setItem('bigTaskCount', this.count);
        this.tasksService.bigTaskFinished.emit();
        this.playAudio();
        this.showAlert();
      }
    }, 1000 * 60);
  }

  startTimerSec() {
    this.interval = setInterval(() => {
      console.log('second interval is running');
      if (this.timeLeftSec > 0) {
        this.timeLeftSec--;
      } else {
        this.timeLeftSec = 59;
      }
    }, 1000);
  }

  // Keep Screen Awake Function till Timer 0 >> Start//
  startInsomia() {
    this.insomnia.keepAwake()
      .then(
        () => console.log('success'),
        () => console.log('error')
      );
  }

  stopInsomia() {
    this.insomnia.allowSleepAgain()
      .then(
        () => console.log('success'),
        () => console.log('error')
      );
  }
  // Keep Screen Awake Function till Timer 0 >> Stop//

  showExitConfirm() {
    let buttons = [{
      text: 'Stay',
      role: 'cancel',
    }, {
      text: 'Exit',
      handler: () => {
        navigator['app'].exitApp();
      }
    }];
    this.alertService.showAlert('App termination', 'Do you want to close the app?', buttons);
  }

  playAudio() {
    const audio = new Audio();
    audio.src = '../../../../assets/5GY.mp3';
    audio.muted = false;
    audio.load();
    audio.play();
    audio.loop = true;
  }

  showAlert() {
    setTimeout(() => {
    window.confirm("Time's up");
    this.goToHomePage();
    this.ngOnDestroy();
    },1000);
  }


  goToHomePage() {
    // this.route.navigate(['/', 'home']);
    window.location.href = '/home';
  }


  ngOnDestroy() {
    // this.onHomePage();
    // this.minuteInterval;
    // this.secondInterval;
    // setTimeout(() => {
    // },10000);
    // console.log(this.playAudio);
    this.stopInsomia();
    // window.location.href = '/home';
    // this.showExitConfirm();
    console.log('destroyed');
  }
}
