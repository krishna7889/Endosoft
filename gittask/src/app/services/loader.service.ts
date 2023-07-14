import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderState } from '../interface/loader';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  private loaderSubject = new Subject<LoaderState>();
  public loaderState = this.loaderSubject.asObservable();
  constructor() { }
  show() {
    this.loaderSubject.next(<LoaderState>{ loading: true });
    document.body.style.overflow = 'hidden';
  }
  hide() {
    this.loaderSubject.next(<LoaderState>{ loading: false });
    document.body.style.overflow = 'auto';
  }
}