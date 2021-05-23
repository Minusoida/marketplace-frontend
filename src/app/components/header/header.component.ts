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

  ngOnInit(): void {}

  onClickSignOut(): void {
    this.authService.signOut();
    this.router.navigate(['/', Path.SignIn]);
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop < 15) {
      this.logoVisible = false;
    } else {
      this.logoVisible = true;
    }
  }
}
