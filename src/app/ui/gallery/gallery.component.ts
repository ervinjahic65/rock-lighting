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
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor… incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque voluptatem.'
    },
    {
      image: '../../../assets/images/Rectangle 187.png',
      category: 'CATEGORY',
      heading: 'Article Title Goes Here',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor… incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque voluptatem.'
    },
    {
      image: '../../../assets/images/Rectangle 187.png',
      category: 'CATEGORY',
      heading: 'Article Title Goes Here',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor… incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque voluptatem.'
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
