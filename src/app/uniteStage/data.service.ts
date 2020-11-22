import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    getCustomersSmall() {
        return this.http.get<any>('assets/showcase/data/customers-small.json')
            .toPromise()
            .then(res => <any[]>res.data)
            .then(data => { return data; });
    }

    getCustomersMedium() {
        return this.http.get<any>('assets/showcase/customers-medium.json')
            .toPromise()
            .then(res => <any[]>res.data)
            .then(data => { return data; });
    }

    getCustomersLarge() {
        return this.http.get<any>('assets/showcase/data/customers-large.json')
            .toPromise()
            .then(res => <any[]>res.data)
            .then(data => { return data; });
    }

    getCustomersXLarge() {
        return this.http.get<any>('assets/showcase/data/customers-xlarge.json')
            .toPromise()
            .then(res => <any[]>res.data)
            .then(data => { return data; });
    }

}