import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    bookingListRef: AngularFireList<any>;
    bookingRef: AngularFireObject<any>;
    gps: number;
    constructor(private db: AngularFireDatabase) {

    }
    ngOnInit() {
        this.gps = this.getBookingList();
        this.getLocation(this.gps);
    }
    getBookingList() {
        console.log('yarab');
        this.db.object('yarab-3b871/sensor/-MKaY6oKjFd52XqSekLS/RollNo').valueChanges().subscribe(
            data => {
                console.log(data);
                return data;
            }
        );

    }
    getLocation(gps) {
        console.log(gps);
    }

}
