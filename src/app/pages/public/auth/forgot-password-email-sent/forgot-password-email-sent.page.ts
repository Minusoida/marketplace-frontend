import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './forgot-password-email-sent.page.html',
  styleUrls: ['./forgot-password-email-sent.page.scss'],
})
export class ForgotPasswordEmailSentPage implements OnInit {
  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {}

  onClickBackToSignIn() {
    this.router.navigate(["/sign-in"]);
  }
}
