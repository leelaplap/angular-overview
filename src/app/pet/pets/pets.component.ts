import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  petName = 'dog';
  petImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCgdTNN5-EZMOzjDImDA0PhtoQnJZOfDEALHqqzHHOqgFMn8sd';

  constructor() {
  }

  ngOnInit() {
  }

  updateName(name) {
    this.petName = name;
  }

  updateImage(image) {
    this.petImage = image;
  }

}
