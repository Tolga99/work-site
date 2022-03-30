import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as crypto from 'crypto';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
    const CryptoJS = require('crypto-js');
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE2NTEzNDUyNjF9.cRmF_yb7bBEWZpFm8i8zJ6nDbR3fz80s2sDUtjdPVhI';
    const tokenEncoded = token.split('.',3);
    let tokenInfo = this.getDecodedAccessToken(token);
    const helper = new JwtHelperService();
    console.log('token : ',tokenInfo);
    const base64Signature = CryptoJS.HmacSHA256(tokenEncoded[0] + '.' + tokenEncoded[1] , 'secret').toString(CryptoJS.enc.Base64).replace(/\+/g,'-').replace(/\//g,'_').replace(/\=+$/m,'');

    console.log('Signature from JWT.IO             : ' + tokenEncoded[2]);
    console.log('NodeJS calculated hash            : ' + base64Signature);
    if(tokenEncoded[2] === base64Signature)
    {
      console.log('Signature verified');
      const expireDate = tokenInfo.exp; // get token expiration dateTime
      console.log(tokenInfo,'and',expireDate);
      if(expireDate !== null)
      {
        const currentDate=new Date(); // 2020-04-17T17:19:19.831Z
        if(currentDate.getTime()>expireDate)
        {
          console.log('TOKEN PAS EXPIRER');
        }else console.log('TOKEN EXPIRER');
      }
    }
    // const decodedToken = helper.decodeToken(myRawToken);

    // // Other functions
    // const expirationDate = helper.getTokenExpirationDate(myRawToken);
    // const isExpired = helper.isTokenExpired(myRawToken);
    // let tokenInfo = this.getDecodedAccessToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE2NTEzNDUyNjF9.O3G3VtVtCd31CMjMX2UScP0jybrumCHaG2vdup5jXdQ');
    // const expireDate = tokenInfo.exp; // get token expiration dateTime
    // console.log(tokenInfo,'and',expireDate);
    // if(expireDate !== null)
    // {
    //   let currentDate=new Date(); // 2020-04-17T17:19:19.831Z
    //   console.log(currentDate.getTime());
    //   if(currentDate.getTime()>expireDate)
    //   {
    //     console.log("TOKEN PAS EXPIRER");
    //   }else console.log("TOKEN EXPIRER");
    // }
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
}
