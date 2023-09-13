import { Component } from "@angular/core";

@Component({
  selector: 'app-server', //NORMAL SELECTION(best)
  //selector: '[app-server]', //ELEMENT SELECTION
  //selector: '.app-server', //CLASS SELECTOR
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverID: number = 10;
  status: string = 'OFFLINE';
  allowNewServer: boolean = false;
  createServer: string = 'No servers created!'

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  onCreateServer() {
    this.createServer = 'New Server Created!'
  }
}