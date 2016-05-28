import { Painter } from '../painter';
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-painter-detail',
  templateUrl: 'painter-detail.component.html',
  styleUrls: ['painter-detail.component.css'],
  inputs: ['painter']
})
export class PainterDetailComponent {
  public painter: Painter;
}
