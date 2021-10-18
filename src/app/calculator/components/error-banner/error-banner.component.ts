import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-banner',
  templateUrl: './error-banner.component.html',
  styleUrls: ['./error-banner.component.scss']
})
export class ErrorBannerComponent {
  @Input() errorMessage: string | undefined | null;
  showMessage = false;
}
