import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public bigTaskFinished: EventEmitter<any> = new EventEmitter();
  public smallTaskFinished: EventEmitter<any> = new EventEmitter();

  constructor() { }

}
