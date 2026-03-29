import { Component } from '@angular/core';

import { IProfileInfoRow } from '../../interfaces';

@Component({
  selector: 'app-profile-info',
  imports: [],
  templateUrl: './profile-info.html',
  styleUrl: './profile-info.less',
})
export class ProfileInfoComponent {
  readonly infoRows: IProfileInfoRow[] = [
    { label: 'Full Name:', value: 'Alec M. Thompson' },
    { label: 'Mobile:', value: '(44) 123 1234 123' },
    { label: 'Email:', value: 'alecthompson@mail.com' },
    { label: 'Location:', value: 'USA' },
  ];
}
