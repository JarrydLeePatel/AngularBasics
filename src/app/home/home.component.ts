//most logic would be written here
import { useAnimation } from '@angular/animations';
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


//Person data
Person = {
  name: 'John',
  age: 21,
  img: 'assets/boat.jpg'
}

Countries = [
  {
    name: "New Zealand",
  },
  {
    name: "South Africa"
  }
]

handleClick(){
  this.clicked = true;
}

}
