import { Component } from '@angular/core';
import fluidPlayer from 'fluid-player';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

ionViewLoad(){
 var player = fluidPlayer(
    'my-video',
     {
         layoutControls: {
             primaryColor: "#28B8ED",
             posterImage:'https://docs.fluidplayer.com/player/video-thumbnail.jpg'
         }
     }n 
 );
}

}
