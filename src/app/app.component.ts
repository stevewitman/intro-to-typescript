import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  code01types = `
      class Item {

        constructor(
            public cost: number,
            public name: string,
            public desc: string) {
        }  

        function getDetails() {
            return 'Name:$ (this.name)
                Price: $(this.cost)
            '
        }
    }
  `


}
