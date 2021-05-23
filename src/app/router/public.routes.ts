import { Routes } from '@angular/router';
// import { NoAuthGuard } from '@app/@core/guards';
import { Path } from '@app/@core/structs';

export const PUBLIC_ROUTES: Routes = [
  { path: '', redirectTo: `/${Path.Dashboard}`, pathMatch: 'full' },
  {
    path: Path.Dashboard,
    loadChildren: () =>
      import('@app/pages/public/hexagons/hexagons.module').then(
        (m) => m.HexagonsModule,
      ),
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
          import('@app/pages/public/hexagons/hexagons.module').then(
            (m) => m.HexagonsModule,
          ),
      },
      {
        path: Path.Token,
        loadChildren: () =>
          import('@app/pages/public/token/token.module').then(
            (m) => m.TokenModule,
          ),
      },
    ],
  },
];
