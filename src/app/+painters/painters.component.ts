import { Painter } from '../painter';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PainterService } from '../painter.service';

@Component({
  moduleId: module.id,
  selector: 'app-painters',
  templateUrl: 'painters.component.html',
  styleUrls: ['painters.component.css']
})
export class PaintersComponent implements OnInit {

  public painters: Painter[];
  public selectedPainter: Painter;

  constructor(private router: Router, private service: PainterService) {}

  ngOnInit() {
    this.service.getPainters().then(painters => this.painters = painters);
  }

  onSelect(painter: Painter) {
    this.selectedPainter = painter;
  }

  gotoDetail() {
    this.router.navigate(['/painter', this.selectedPainter.id]);
  }
}
