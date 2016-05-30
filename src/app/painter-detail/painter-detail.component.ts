import { Painter } from '../painter';
import { PainterService } from '../painter.service';
import { Component } from '@angular/core';
import { OnActivate, RouteSegment } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-painter-detail',
  templateUrl: 'painter-detail.component.html',
  styleUrls: ['painter-detail.component.css'],
  inputs: ['painter']
})
export class PainterDetailComponent implements OnActivate {
  public painter: Painter;

  constructor(private service: PainterService) {}

  routerOnActivate(current: RouteSegment) {
    const id = +current.getParam('id');
    this.service.getPainterById(id).then(painter => this.painter = painter);
  }

  public goBack() {
    window.history.back();
  }
}
