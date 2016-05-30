import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FamousPaintersAppComponent } from '../app/famous-painters.component';

beforeEachProviders(() => [FamousPaintersAppComponent]);

describe('App: FamousPainters', () => {
  it('should create the app',
      inject([FamousPaintersAppComponent], (app: FamousPaintersAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'Famous painters\'',
      inject([FamousPaintersAppComponent], (app: FamousPaintersAppComponent) => {
    expect(app.title).toEqual('Famous painters');
  }));
});
