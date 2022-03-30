import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';


@Component({
  selector: 'app-big-task',
  templateUrl: './big-task.page.html',
  styleUrls: ['./big-task.page.scss'],
})
export class BigTaskPage implements OnInit {

  // timeLeftMint = 89;
  count: any=0;
  timeLeftSec = 15;
  interval;
  private maxValue = 10;
  // public const = number;


  constructor(private route: Router) {}


  ngOnInit() {
    this.onClick();
    this.startTimer();
    // this.local.get(count)
    App.addListener('backButton', ({ canGoBack }) => {
      if(canGoBack){
        window.history.back();
      } else {
        App.exitApp();
      }
    });
  }

  startTimer() {
    let localValue;
    this.interval = setInterval(() => {
      if(this.timeLeftSec > 0) {
        this.timeLeftSec--;
      } else {
        this.timeLeftSec = 1000000;
        // this.count++;
        // localValue = localStorage.getItem('dataSource');
        // if(localValue < 20){
        //   this.count++;
        // }
        // localStorage.setItem('dataSource', this.count);

        this.onHomePage(); //once time Out then Route to Home Page
      }
    },1000);
  }


  // pauseTimer() {
  //   clearInterval(this.interval);
  // }

  onClick() {
    if(this.count <= 20) {
      this.count ++;
      localStorage.setItem('dataSource', this.count);
    }
    // console.log(this.count);
    console.log(localStorage.getItem('dataSource'));

  }
  onHomePage() {
    this.route.navigate(['home']);
  }


}

