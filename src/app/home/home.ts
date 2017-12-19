import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  title = 'Home';
  home = [
	  {"id":1,"name":"Randhir 1"},
	  {"id":2,"name":"Randhir 2"},
	  {"id":3,"name":"Randhir 3"},
	  {"id":4,"name":"Randhir 4"},
	  {"id":5,"name":"Randhir 5"},
	  {"id":6,"name":"Randhir 6"},
	  {"id":7,"name":"Randhir 7"},
	  {"id":8,"name":"Randhir 8"},
	  {"id":9,"name":"Randhir 9"},
	  {"id":10,"name":"Randhir 10"},
	  { "id": 11, "name": 'Mr. Nice' },
	  { "id": 12, "name": 'Narco' },
	  { "id": 13, "name": 'Bombasto' },
	  { "id": 14, "name": 'Celeritas' },
	  { "id": 15, "name": 'Magneta' },
	  { "id": 16, "name": 'RubberMan' },
	  { 'id': 17, "name": 'Dynama' },
	  { "id": 18, "name": 'Dr IQ' },
	  { "id": 19, "name": 'Magma' },
	  { 'id': 20, "name": 'Tornado' }
  ];

  viewPage = {
	"homePage":true,
	"facebook":false
  };

  openMenu = function(ad){
	  console.log(this.viewPage);
	  switch(ad){
		  	case "home":
				this.viewPage = {
					"homePage":true,
					"facebook":false
				};
				break;
			case "facebook":
				this.viewPage = {
					"homePage":false,
					"facebook":true
				};
				break;
	  }
  }
}
