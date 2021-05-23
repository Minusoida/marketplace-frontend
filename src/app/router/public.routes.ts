import { Routes } from '@angular/router';
// import { NoAuthGuard } from '@app/@core/guards';
import { Path } from '@app/@core/structs';

export const PUBLIC_ROUTES: Routes = [
  {
    path: Path.Home,
    loadChildren: () =>
      import('@app/pages/public/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    // canActivate: [NoAuthGuard],
    children: [
      {
        path: Path.SignIn,
        loadChildren: () =>
          import('@app/pages/public/auth/sign-in/sign-in.module').then(
            (m) => m.SignInModule,
          ),
      },
      {
        path: Path.SignUp,
        loadChildren: () =>
          import('@app/pages/public/auth/sign-up/sign-up.module').then(
            (m) => m.SignUpModule,
          ),
      },
      {
        path: Path.Hexagons,
        loadChildren: () =>
          import(
            '@app/pages/public/hexagons/hexagons.module'
            ).then((m) => m.HexagonsModule),
      },
      {
        path: Path.ForgotPassword,
        loadChildren: () =>
          import(
            '@app/pages/public/auth/forgot-password/forgot-password.module'
          ).then((m) => m.ForgotPasswordModule),
      },
      {
        path: Path.ForgotPasswordEmailSent,
        loadChildren: () =>
          import(
            '@app/pages/public/auth/forgot-password-email-sent/forgot-password-email-sent.module'
          ).then((m) => m.ForgotPasswordEmailSentModule),
      },
      {
        path: Path.PasswordReset,
        loadChildren: () =>
          import(
            '@app/pages/public/token/token.module'
          ).then((m) => m.TokenModule),
      },
      {
        path: Path.PasswordResetSucceeded,
        loadChildren: () =>
          import(
            '@app/pages/public/auth/password-reset-succeeded/password-reset-succeeded.module'
          ).then((m) => m.PasswordResetSucceededModule),
      },
      {
        path: Path.PasswordResetFailed,
        loadChildren: () =>
          import(
            '@app/pages/public/auth/password-reset-failed/password-reset-failed.module'
          ).then((m) => m.PasswordResetFailedModule),
      },
      {
        path: Path.Token,
        loadChildren: () =>
          import(
            '@app/pages/public/token/token.module'
            ).then((m) => m.TokenModule),
      },
      {
        path: Path.Triglav,
        loadChildren: () =>
          import(
            '@app/pages/public/triglav/triglav.module'
            ).then((m) => m.TriglavModule),
      },
    ],
  },
];
