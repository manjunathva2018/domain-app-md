import { ChangeDetectorRef,Component, OnInit ,OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {
  mobileQuery: MediaQueryList;
  // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerNav = [{
    "header": "Domain", "childLinks": [{ "link": "/dashboard/admin/domain", "name": "View" },
    { "link": "/dashboard/admin/create-domain", "name": "Create Domain" },
    { "link": "/dashboard/admin/edit-domain", "name": "Edit Domain" }]
  },
  {
    "header": "Content Creater", "childLinks": [{ "link": "/dashboard/admin/content-creater", "name": "View" },
    { "link": "/dashboard/admin/create-domain", "name": "create a new content creater" },
    { "link": "/dashboard/admin/edit-domain", "name": "Edit a content creater" }]
  }];


  ngOnInit() {
  }

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout():void{
    this.router.navigate(['/']);
  }
}
