import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
    public router: Router,
    private dialog: MatDialog) { }
  tokens:string;
  tokened:string;
  
  token = localStorage.getItem('token');

  // firstname;lastname;middlename:string;

  firstname=localStorage.getItem('firstname');
  middlename=localStorage.getItem('middlename');
  lastname=localStorage.getItem('lastname');


  Logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('firstname');
    localStorage.removeItem('middlename');
    localStorage.removeItem('lastname');
    this.token = localStorage.getItem('token');
    console.log(this.token);
    this.router.navigate(['/']);
  }
}
