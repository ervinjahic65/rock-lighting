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
}
