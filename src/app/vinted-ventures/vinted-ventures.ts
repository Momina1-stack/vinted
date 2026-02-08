import { Component } from '@angular/core';

@Component({
  selector: 'app-vinted-ventures',
  imports: [],
  templateUrl: './vinted-ventures.html',
  styleUrl: './vinted-ventures.css',
})
export class VintedVentures {
slideWidth() {
throw new Error('Method not implemented.');
}
  
    currentIndex = 0;
  slidePx = 360;

  team = [
    {
      name: 'Milda Jasaitė',
      role: 'Senior Director of Corporate Development',
      img: 'member1.png'
    },
    {
      name: 'Martijn van Heeswijk',
      role: 'Corporate Development Principal',
      img: 'member2.png'
    },
    {
      name: 'Kinda Dalla',
      role: 'Director Integration and Portfolio Development',
      img: 'member3.png'
    },
    {
      name: 'Gerard Taboada Segui',
      role: 'Manager Integration and Portfolio Development',
      img: 'member4.png'
    },
    {
      name: 'Alvise Fasolo',
      role: 'Investment Team',
      img: 'member5.png'
    },

     {
      name: 'Simone Panin',
      role: 'Investment Team',
      img: 'member6.png'
    },

     {
      name: 'Austėja Širšinaitytė',
      role: 'Investment Team',
      img: 'member7.png'
    },
  
  ];

  ngOnInit() {
    this.updateSlideWidth();
    window.addEventListener('resize', () => this.updateSlideWidth());
  }

 updateSlideWidth() {
  if (window.innerWidth < 640) {
    this.slidePx = 280;   // mobile
  } else if (window.innerWidth < 1024) {
    this.slidePx = 240;   // tablet
  } else {
    this.slidePx = 260;   // desktop
  }
}


  next() {
    if (this.currentIndex < this.team.length - 1) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

}
