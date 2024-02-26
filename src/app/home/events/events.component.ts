import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServiceService } from '../../shared/service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent implements OnInit, OnDestroy {

  dataEvent:any;
  subscription: Subscription = new Subscription();

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.select(1).subscribe(
      (data) => {
        this.dataEvent = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
