import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verify-no',
  imports: [FormsModule,CommonModule],
  templateUrl: './verify-no.html',
  styleUrl: './verify-no.css',
})
export class VerifyNo {
  open = false;
search = '';

selectedCountry = { name: 'United States', code: '+1' };

countries = [
  { name: 'Albania', code: '+355' },
  { name: 'Andorra', code: '+376' },
  { name: 'Australia', code: '+61' },
  { name: 'Austria', code: '+43' },
  { name: 'Bahamas', code: '+1' },
  { name: 'Pakistan', code: '+92' },
  { name: 'India', code: '+91' },
  { name: 'United Kingdom', code: '+44' },
  { name: 'United States', code: '+1' },
];

toggleDropdown() {
  this.open = !this.open;
}

selectCountry(c: any) {
  this.selectedCountry = c;
  this.open = false;
}

filteredCountries() {
  return this.countries.filter(c =>
    c.name.toLowerCase().includes(this.search.toLowerCase())
  );
}


}
