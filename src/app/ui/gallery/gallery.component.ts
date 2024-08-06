import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  newsImage = [
    {
      image: '../../../assets/images/Rectangle 187.png',
      category: 'CATEGORY',
      heading: 'Article Title Goes Here',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor…'
    },
    {
      image: '../../../assets/images/Rectangle 187.png',
      category: 'CATEGORY',
      heading: 'Article Title Goes Here',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor…'
    },
    {
      image: '../../../assets/images/Rectangle 187.png',
      category: 'CATEGORY',
      heading: 'Article Title Goes Here',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor…'
    }
  ];

  galleryImages = [
    {
      image: '../../../assets/images/image1.png'
    },
    {
      image: '../../../assets/images/image2.png'
    },
    {
      image: '../../../assets/images/image3.png'
    },
    {
      image: '../../../assets/images/image4.png'
    },
    {
      image: '../../../assets/images/image5.png'
    },
    {
      image: '../../../assets/images/image6.png'
    },
    {
      image: '../../../assets/images/image7.png'
    },
    {
      image: '../../../assets/images/image8.png'
    }
  ];
}
