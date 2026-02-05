import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notifications',
  imports: [FormsModule],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  
    // Main toggle
  mainToggleChecked: boolean = true;

  // Child toggles state
  childTogglesState = {
    vintedUpdates: true,
    marketing: true,
    newMessages: true,
    newFeedback: true,
    discountedItems: true,
    favoritedItems: true,
    newItems: true
  };

  // Dropdown state
  dailyLimit: string = 'Up to 1 notification';

  // Sync child toggles with main toggle
  syncToggles() {
    if (!this.mainToggleChecked) {
      // Turn off all child toggles if main is off
      for (let key in this.childTogglesState) {
        const k = key as keyof typeof this.childTogglesState;
        this.childTogglesState[k] = false;
      }
    }
    // When main is on, children keep their current state
  }

}
