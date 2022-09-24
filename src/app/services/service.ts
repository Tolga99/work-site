import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
 providedIn: 'root'
})
export class Service {
 constructor(private db: AngularFirestore) 
 {

  }
  getAllAccounts() {
    return new Promise<any>((resolve)=> {
    this.db.collection('Account').valueChanges({ idField: 'mail' }).subscribe(account => resolve(account));
    })
   }
//    addNewUser(_newId:any, _fName:string, _lName:string, _vip:boolean) {
//     this.db.collection(&quot;User&quot;).doc(_newId).set({firstName:_fName,lastName:_lName,vipMember:_vip});
//    }
//    updateUserFirstName(_id:any, _firstName:string) {
//     this.db.doc(`User/${_id}`).update({firstName:_firstName});
//    }
//    deleteUser(_id:any) {
//     this.db.doc(`User/${_id}`).delete();
//     }
//   getAllVipMembers() {
//  return new Promise<any>((resolve)=> {
//  this.db.collection('User', ref => ref.where('vipMember', '==', true)).valueChanges().subscribe(users => resolve(users))
//  })
//  }  
}