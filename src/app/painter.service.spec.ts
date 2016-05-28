import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PainterService } from './painter.service';

describe('Painter Service', () => {
  beforeEachProviders(() => [PainterService]);

  it('should ...',
      inject([PainterService], (service: PainterService) => {
    expect(service).toBeTruthy();
  }));
});
