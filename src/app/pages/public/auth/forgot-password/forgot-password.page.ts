import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {}

  onClickResetPassword() {
    this.router.navigate(["/forgot-password-email-sent"]);
  }
}
