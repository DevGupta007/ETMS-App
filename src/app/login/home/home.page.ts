import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public bigTaskCount = 0;
  public smallTaskCount = 0;
  // public getAudio = 0;

  constructor(
    private route: Router,
    private tasksService: TasksService,
  ) {
    if (localStorage.getItem('bigTaskCount')) {
      this.bigTaskCount = +localStorage.getItem('bigTaskCount');
      console.log('hfivvberbe:::', this.bigTaskCount);
    } else {
      localStorage.setItem('bigTaskCount', '0');
    }
    if (localStorage.getItem('smallTaskCount')) {
      this.smallTaskCount = +localStorage.getItem('smallTaskCount');
    } else {
      localStorage.setItem('smallTaskCount', '0');
    }
  }

  public ngOnInit(): void {
    console.log('navigated to home page');
    this.updateBigTaskCount();
  }

  onBigPage() {
    this.route.navigate(['big-task']);
  }
  onSmallPage() {
    this.route.navigate(['small-task']);
  }

  onLiveChat() {
    this.route.navigate(['livechat']);
  }

 public updateBigTaskCount() {
    this.tasksService
      .bigTaskFinished
      .subscribe(() => {
        console.log('Big Task event is emitted and listened');
        this.bigTaskCount = +localStorage.getItem('bigTaskCount');
      });
  }

  public updateSmallTaskCount() {
    this.tasksService
      .smallTaskFinished
      .subscribe(() => {
        console.log('small Task event is emitted and listened');
        this.smallTaskCount = +localStorage.getItem('smallTaskCount');
      });
  }

    public goToBigTaskTimerPage(): void {
      this.route.navigate(['big-task']);
    }

    public goToSmallTaskTimerPage(): void {
      this.route.navigate(['small-task']);
    }

  reloadPage() {
    window.location.reload();
  }

}
