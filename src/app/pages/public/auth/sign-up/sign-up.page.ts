import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@pages/public/auth/_services/auth.service';
import { Path } from '@core/structs';

@Component({
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  returnUrl: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
  ) {
    this.returnUrl =
      this.activatedRoute.snapshot.queryParamMap.get('returnUrl') ||
      `/${Path.Dashboard}`;
  }

  ngOnInit(): void {}

  onClickSignUp(): void {
    this.authService.signUp();
    this.router.navigate([this.returnUrl]);
  }
}
