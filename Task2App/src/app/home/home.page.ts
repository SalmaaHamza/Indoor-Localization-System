import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    value_fb: any = 0;
    xCoord: any;
    yCoord: any;
    oldVal: {
        "x": 0,
        "y": 0
    };
    loctionDict = {
        "0": {
            "x": 10,
            "y": 200
        },
        "1": {
            "x": 75,
            "y": 200
        },
        "2": {
            "x": 70,
            "y": 30
        },
        "3": {
            "x": 135,
            "y": 100
        },
        "4": {
            "x": 135,
            "y": 290
        },
        "5": {
            "x": 135,
            "y": 390
        },
        "6": {
            "x": 125,
            "y": 480
        },
        "7": {
            "x": 55,
            "y": 350
        },
    };

    constructor(private db: AngularFireDatabase) {

    }
    ngOnInit() {
        this.getBookingList();

    }
    getBookingList() {
        console.log('yarab');
        this.db.object('yarab-3b871/sensor/-MKaY6oKjFd52XqSekLS/RollNo').valueChanges().subscribe(
            data => {
                console.log(typeof data, data);
                this.value_fb = data.toString();
                // this.yCoord = this.value_fb.toString();
                this.getLocation();
            }

        );
    }
    getLocation() {
        console.log(this.value_fb);
        console.log("y=", this.loctionDict["0"]['y'])
        // // console.log()
        // if (this.loctionDict[this.value_fb]['x'] === 135) {
        //     while (this.oldVal['y'] !== this.loctionDict[this.value_fb]['y']) {
        //         if(this.oldVal['y']>this.loctionDict[this.value_fb]["y"]){
        //             this
        //         }
        //     }

        // }
        this.xCoord = this.loctionDict[this.value_fb]['x'];
        this.yCoord = this.loctionDict[this.value_fb]['y'];
        console.log(this.yCoord.toString());
        document.getElementById('chk').setAttribute("x", this.xCoord.toString());
        document.getElementById('chk').setAttribute("y", this.yCoord.toString());
        this.oldVal['x'] = this.loctionDict[this.value_fb]['x'];
        this.oldVal['y'] = this.loctionDict[this.value_fb]['y'];


    }

}
