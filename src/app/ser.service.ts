import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SerService {
  constructor() {}

  multyply(a: number, b: number) {
    return a * b;
  }
}
