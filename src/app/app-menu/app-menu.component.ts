import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppMenuComponent {

  constructor(private router: Router) {}
 
  refreshPage() {
    window.location.reload();
  }

  showAdvisorView() {
    this.router.navigate(['/advisor-view'])
  }

  showSalesView() {
    this.router.navigate(['/sales-view'])
  }
}
