import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../../../services/tasks/tasks.service';
import { Insomnia } from '@awesome-cordova-plugins/insomnia/ngx';


@Component({
  selector: 'app-small-task',
  templateUrl: './small-task.page.html',
  styleUrls: ['./small-task.page.scss'],
})
export class SmallTaskPage implements OnInit {

  // for Countdown in Secondes
  timeLeftMin = 14;
  timeLeftSec = 60;
  count: any = 0;
  interval;

  //for Countdown in Secondes end//

  constructor(
    private insomnia: Insomnia,
    private route: Router,
    public tasksService: TasksService,
  ) { }

  ngOnInit() {
    this.startInsomia();
    this.startTimerMin();
    this.startTimerSecond();
  }

  //count down for minut
  startTimerMin() {
    this.interval = setInterval(() => {
      if (this.timeLeftMin > 0) {
        this.timeLeftMin--;
      } else {
        this.timeLeftMin = 0;
        this.count = localStorage.getItem('smallTaskCount');
        this.count++;
        localStorage.setItem('smallTaskCount', this.count);
        this.tasksService.smallTaskFinished.emit();
        this.playAudio();
        this.showAlert();
      }
    }, 1000 * 60);
  }
  //for Countdown in Secondes
  startTimerSecond() {
    this.interval = setInterval(() => {
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

  //Audio + Alert
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
    this.route.navigate(['home']);
    // window.location.href = '/home';
  }

  ngOnDestroy() {
    // this.playAudio();
    // console.log(this.playAudio);
    this.stopInsomia();
    window.location.href = '/home';
    console.log('destroyed');
  }
}
