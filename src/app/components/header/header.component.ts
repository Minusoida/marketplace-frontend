import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Path } from '@app/@core/structs';
import { AuthService } from '@app/pages/public/auth/_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  path = Path;
  logoVisible: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  ngOnInit(): void {}

  onClickSignOut(): void {
    if (this.isLoggedIn) {
      this.authService.signOut();
      this.router.navigate(['/', Path.SignIn]);
    } else {
      this.router.navigateByUrl(`/${Path.SignUp}`);
    }
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    if (document.documentElement.scrollTop < 15) {
      this.logoVisible = false;
    } else {
      this.logoVisible = true;
    }
  }
}
