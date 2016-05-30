import { Painter } from './painter';
import { PAINTERS } from './painters.mock';
import { Injectable } from '@angular/core';

@Injectable()
export class PainterService {

  constructor() { }

  getPainters() {
    return Promise.resolve(PAINTERS);
  }

  getPainterById(id: number) {
    return Promise.resolve(PAINTERS)
      .then(painters => painters.find(painter => painter.id === id));
  }

  getLaggedPainters() {
    return new Promise<Painter[]>(resolve =>
      setTimeout(() => resolve(PAINTERS), 2000)
    );
  }
}
