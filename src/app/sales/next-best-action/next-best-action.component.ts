import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

interface NextBestAction {
  content: {
    title: string,
    url: string
  }
}

@Component({
  selector: 'app-next-best-action',
  standalone: true,
  imports: [],
  templateUrl: './next-best-action.component.html',
  styleUrls: ['./next-best-action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NextBestActionComponent implements OnInit {
  public nextBestAction: NextBestAction | undefined;

  constructor(
    private http: HttpClient,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    const url = "http://localhost:5000/next_best_action";

    this.http.post<NextBestAction>(url, {}).subscribe((response => {
      this.nextBestAction = response;
      this.cd.markForCheck();
    }));
   }
}
