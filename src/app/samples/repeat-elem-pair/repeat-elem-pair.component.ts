import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repeat-elem-pair',
  templateUrl: './repeat-elem-pair.component.html',
  styleUrls: ['./repeat-elem-pair.component.css']
})
export class RepeatElemPairComponent implements OnInit {

  list = [
    { title: 'Lion', data: 'Mammal' },
    { title: 'Eagle', data: 'Aves' },
    { title: 'Lizard', data: 'Reptile' },
    { title: 'Frog', data: 'Amphibian' },
    { title: 'Tuna', data: 'Fish' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
