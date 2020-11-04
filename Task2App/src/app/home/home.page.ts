import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    gps: any;
    constructor(private db: AngularFireDatabase) {

    }
    ngOnInit() {
        this.getBookingList();

    }
    getBookingList() {
        console.log('yarab');
        this.db.object('yarab-3b871/sensor/-MKaY6oKjFd52XqSekLS/RollNo').valueChanges().subscribe(
            data => {
                console.log("menna"+data);
                this.gps = data;
                this.getLocation();
            }

        );
    }
    getLocation() {
        console.log(this.gps);
    }

}
