import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit()
  {
     $(document).ready(function(){
       $('#searchicon').click(function(){
            $('.menu').eq(0).toggle();
            $('#searchbox').toggle();
            $('#searchicon').toggle();
            $('.sidemenudiv').eq(0).toggle();
       })

       $('#searchclear').click(function(){
          $('.menu').eq(0).toggle();
           $('#searchbox').toggle();
           $('#searchicon').toggle();
           $('.sidemenudiv').eq(0).toggle();
       })
     })
  }

}
