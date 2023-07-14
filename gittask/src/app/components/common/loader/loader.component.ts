import { Component, OnInit, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderState } from 'src/app/interface/loader';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  height = window.innerHeight;
  loading = false;
  private subscription: Subscription;

  constructor(
    private loaderService: LoaderService
  ) {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.loading = state.loading;
      });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    // event.target.innerWidth;
    this.height = event.target.innerHeight;
  }
}

