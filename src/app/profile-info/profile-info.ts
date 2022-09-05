import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from 'ng-apexcharts';
import { Chantier } from '../models/chantier';
import { User } from '../models/user';
import { StorageService } from '../services/storage.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};
@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.html',
  styleUrls: ['./profile-info.scss'],
})
export class ProfileInfo implements OnInit{

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  myAccount : User;
  chantiers : Array<Chantier>;
  headElements = ['Nom chantier', 'Nom Client', 'Date début','Adresse','Etat'];
  profileExist = false;
  constructor(private storageService : StorageService, private router : Router, private route : ActivatedRoute
    , private navController : NavController, private translateService : TranslateService) {
    this.chartOptions = {
      series: [
        {
          name: 'Argent payé',
          data: []
        },
        {
          name: 'Total à payer',
          data: []
        },
        {
          name: 'Reste à payer',
          data: []
        }
      ],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%'
            }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: [
          // 'Feb',
          // 'Mar',
          // 'Apr',
          // 'May',
          // 'Jun',
          // 'Jul',
          // 'Aug',
          // 'Sep',
          // 'Oct'
        ]
      },
      yaxis: {
        title: {
          text: '€'
        },
        labels: {
          formatter(val) {
              return val.toFixed(2) + '€';
          }
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter(val) {
            return val.toFixed(2) + '€';
          }
        }
      }
    };
  }
  GetName()
  {
    var name = '/';
    if(this.myAccount)
      name = this.myAccount.lastName.toUpperCase() +' '+ this.myAccount.firstName;
    return name;
  }
  async ionViewDidEnter(){
    let profile : User = await this.storageService.get('MyProfile');
    if(profile!=null)
    {
        this.myAccount = profile;
        this.profileExist = true;
        // this.formProfile.setValue({
        //   firstName: profile.firstName,
        //   lastName: profile.lastName,
        //   address: profile.address,
        //   phone: profile.phone,
        //   mail: profile.mail,
        //   tva: profile.tva,
        //   iban: profile.iban,
        //   bic: profile.bic,
        // });
    }else
    {
      this.profileExist = false;
      // this.formProfile.setValue({
      //   firstName: '',
      //   lastName:  '',
      //   address:  '',
      //   phone:  '',
      //   mail:  '',
      //   tva: '',
      //   iban: '',
      //   bic: '',
      // });
    }
    //this.myAccount = clients.find(a => a.userId == this.userId);

  //   let chantiers : Array<Chantier> = await this.storageService.get('Chantiers');
  //   this.chantiers = chantiers.filter(a => a.clientId === this.myAccount.userId);
  //   let i = 0;
  //   this.chantiers.forEach(element => {

  //   for (let index = 0; index < element.factures?.length; index++) {
  //     this.chartOptions.xaxis.categories[i] = element.factures[index].factureName;
  //     this.chartOptions.series[1].data[i] = element.factures[index].totalPrice;
  //     this.chartOptions.series[0].data[i]  = this.GetAllReceivedMoney(element.factures[index]);
  //     this.chartOptions.series[2].data[i]  = element.factures[index].totalPrice - this.GetAllReceivedMoney(element.factures[index]);

  //     i++;
  //   }
  // });
  // console.log(this.chartOptions.xaxis.categories);
  }
  async ngOnInit() {

    // this.userId = this.route.snapshot.paramMap.get('userId');
    this.storageService.init();
    let profile : User = await this.storageService.get('MyProfile');
    this.myAccount = profile;

    // let chantiers : Array<Chantier> = await this.storageService.get('Chantiers');
    // this.chantiers = chantiers.filter(a => a.clientId === this.myAccount.userId);
    // let i = 0;
    // this.chantiers.forEach(element => {

    // for (let index = 0; index < element.factures?.length; index++) {
    //   this.chartOptions.xaxis.categories[i] = element.factures[index].factureName;
    //   this.chartOptions.series[1].data[i] = element.factures[index].totalPrice;
    //   this.chartOptions.series[0].data[i]  = this.GetAllReceivedMoney(element.factures[index]);
    //   this.chartOptions.series[2].data[i]  = element.factures[index].totalPrice - this.GetAllReceivedMoney(element.factures[index]);

    //   i++;
    // }
  // });
  window.dispatchEvent(new Event('resize'));
  //console.log(this.chartOptions.xaxis.categories);
  }
  // public GetAllReceivedMoney(f : Facture) : number
  // {
  //     let total= 0;
  //     if(f.receivedMoney==null)
  //       f.receivedMoney = new Array<{price: number, date : string}>();

  //     f.receivedMoney.forEach(element => {
  //         total=element.price+total;
  //     });

  //     total = Math.round(total * 100) / 100; // arrondi
  //     return total;
  // }
  EditProfile()
  {
    this.navController.navigateBack(['my-profile'],{replaceUrl:true});
  }
  GoBack()
  {
    this.navController.navigateBack(['tb-home'],{replaceUrl:true});
  }
}