import { PaintersComponent } from './+painters';
import { DashboardComponent } from './+dashboard';
import { Component, OnInit } from '@angular/core';
import { PainterService } from './painter.service';
import { PainterDetailComponent } from './painter-detail/painter-detail.component';
import { Router, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'famous-painters-app',
  templateUrl: 'famous-painters.component.html',
  styleUrls: ['famous-painters.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, PainterService]
})
@Routes([
  { path: '/dashboard', component: DashboardComponent },
  { path: '/painters', component: PaintersComponent },
  { path: '/painter/:id', component: PainterDetailComponent }
])
export class FamousPaintersAppComponent implements OnInit {
  public title = 'Famous painters';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/dashboard']);
  }
}
