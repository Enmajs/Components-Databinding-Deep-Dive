import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  @Input() element: { name: string, description: string };
  constructor() { }

  ngOnInit(): void {
  }

}
