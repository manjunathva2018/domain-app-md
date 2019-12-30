import { Component, OnInit ,NgZone} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'domain-app';
 
  constructor(private zone:NgZone){
    window.addEventListener('offline', this.offlineEvent);
    window.addEventListener('online', this.onlineEvent);
  }

  ngOnInit(){
  // Cordova platform and plugins initialization
  document.addEventListener('deviceready', () => {
    this.zone.run(() => this.onCordovaReady());
}, false);
  }

  
  offlineEvent = ()=> {
   console.log("offline");
  }
onlineEvent = ()=> {
  console.log("online");
}
   
  private onCordovaReady() {
    if (window['cordova']) {
       
      
    }
}
}
