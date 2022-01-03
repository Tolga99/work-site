import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jsPDF} from 'jspdf'
@Component({
  selector: 'app-tb-settings',
  templateUrl: 'tb-settings.html',
  styleUrls: ['tb-settings.scss']
})
export class TabSettings implements OnInit {

  constructor(private router:Router) {}
  ngOnInit(): void {
    // const doc = new jsPDF();

    // doc.text("Hello world!", 10, 10);
    // doc.save("a4.pdf");  
  }
  MyProfile()
  {
    console.log('show profile');
    this.router.navigate(['my-profile']);
  }
  MyProducts()
  {
    console.log('show articles');
    this.router.navigate(['articles']);
  }

}