import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = [
    {
      image: '../../../assets/images/Rectangle 185.png',
      text: 'Lighting Controls',
      buttonText: 'SHOP NOW'
    },
    {
      image: '../../../assets/images/Rectangle 179.png',
      text: 'Indoor Lighting',
      buttonText: 'SHOP NOW'
    },
    {
      image: '../../../assets/images/pexels-binyamin-mellish-1500459.png',
      text: 'Outdoor Lighting',
      buttonText: 'SHOP NOW'
    },
    {
      image: '../../../assets/images/AdobeStock_253861758_Preview.png',
      text: 'Safety & Security',
      buttonText: 'SHOP NOW'
    }
  ];

  popularProducts = [
    {
      image: '../../../assets/images/Group 494.png',
      heading: 'ELITE',
      subHeading: 'SCH6-LED-SM',
      paragraph: '6 Inch Architectural High Lumen LED Cylinder'
    },
    {
      image: '../../../assets/images/Group 493.png',
      heading: 'DMF LIGHTING',
      subHeading: 'DMF DRDHNJD',
      paragraph: 'SquareFrame LED Housing'
    },
    {
      image: '../../../assets/images/Group 492.png',
      heading: 'ELITE',
      subHeading: 'Elite FPR4-LED',
      paragraph: 'LED round pendant cylinder'
    },
    {
      image: '../../../assets/images/Group 491.png',
      heading: 'WESTGATE',
      subHeading: 'SCX-2FT-20W-30K-D',
      paragraph: 'LED 2-3/4” Superior Architectural Seamless Linear Lights'
    }
  ];
}
