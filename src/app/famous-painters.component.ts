import { Painter } from './painter';
import { Component, OnInit } from '@angular/core';
import { PainterService } from './painter.service';
import { PainterDetailComponent } from './painter-detail/painter-detail.component';

@Component({
  moduleId: module.id,
  selector: 'famous-painters-app',
  templateUrl: 'famous-painters.component.html',
  styleUrls: ['famous-painters.component.css'],
  directives: [PainterDetailComponent],
  providers: [PainterService]
})
export class FamousPaintersAppComponent implements OnInit {

  public title = 'famous-painters works!';
  public painters: Painter[];
  public selectedPainter: Painter;

  constructor(private _painterService: PainterService) { }

  getPainters() {
    this._painterService.getPainters().then(p => this.painters = p);
  }

  ngOnInit() {
    this.getPainters();
  }

  onSelect(p: Painter) { this.selectedPainter = p; }
}
