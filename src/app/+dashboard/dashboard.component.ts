import { Painter } from '../painter';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PainterService } from '../painter.service';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public painters: Painter[];

  constructor(private painterService: PainterService, private router: Router) {}

  ngOnInit() {
    this.painterService.getPainters()
      .then(painters => this.painters = painters.slice(0, 4));
  }

  gotoDetail(painter: Painter) {
    this.router.navigate(['/painter', painter.id]);
  }
}
