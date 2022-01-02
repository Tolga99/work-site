import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jsPDF} from 'jspdf'
@Component({
  selector: 'app-tb-settings',
  templateUrl: 'tb-settings.page.html',
  styleUrls: ['tb-settings.page.scss']
})
export class TabSettingsPage implements OnInit {

  constructor(private router:Router) {}
  ngOnInit(): void {
    const doc = new jsPDF();

    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf");  }
  MyProfile()
  {
    console.log('show profile');
    this.router.navigate(['my-profile']);
  }

}
