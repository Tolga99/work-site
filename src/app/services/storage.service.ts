import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  contactsList: Array<User> = [];
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    console.log('set',value);
    this._storage?.set(key, value);
  }
  public get(key:string)
  {
    return this._storage.get(key);
  }
  public setProfile(user: User)
  {
    console.log('Update profile',user);
    this._storage?.set("MyProfile", user);
  }
}