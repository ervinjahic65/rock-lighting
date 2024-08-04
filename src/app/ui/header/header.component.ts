import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isModalOpen = false;

  openSearchModal() {
    this.isModalOpen = true;
  }

  closeSearchModal() {
    this.isModalOpen = false;
  }

  toggleDropdown(event: Event) {
    event.preventDefault();
    const target = event.currentTarget as HTMLElement;
    target.classList.toggle('active');
}


}
