//most logic would be written here
import { Component, OnInit, VERSION } from '@angular/core';

//component decorator - allows us to bind data from this typescript file into our html
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

//Binding
clicked = false;
title = `Angular ${VERSION.major} is useful`


//Boat data
boat = {
  name: 'Starfire',
  year: 1977,
  img: 'assets/boat.jpg'
}

handleClick(){
  this.clicked = true;
}

}
