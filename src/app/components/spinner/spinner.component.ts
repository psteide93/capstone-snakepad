import { Component } from '@angular/core';
import { LoadingService } from 'src/assets/ultilities/services/loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent {
  loading$ = this.loader.loading$;

  constructor(private loader: LoadingService) {}
}
