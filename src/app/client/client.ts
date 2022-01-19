import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
import { element } from 'protractor';
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
  selector: 'app-client',
  templateUrl: './client.html',
  styleUrls: ['./client.scss'],
})
export class Client implements OnInit{

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  client : User;
  chantiers : Array<Chantier>;
  userId : string='';
  constructor(private storageService : StorageService, private router : Router, private route : ActivatedRoute) {
    this.chartOptions = {
      series: [
        {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
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
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter(val) {
            return '$ ' + val + ' thousands';
          }
        }
      }
    };
  }
  async ngOnInit() {

    this.userId = this.route.snapshot.paramMap.get('userId');
    this.storageService.init();
    let clients : Array<User> = await this.storageService.get('Contacts');
    this.client = clients.find(a => a.userId == this.userId);

    let chantiers : Array<Chantier> = await this.storageService.get('Chantiers');
    this.chantiers = chantiers.filter(a => a.clientId == this.client.userId);
    this.chantiers.forEach(element => {
      
    for (let index = 0; index < element.factures?.length; index++) {
      this.chartOptions.xaxis.categories[index] = element.factures[index].factureName;
    }
  });
  }

}