import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    value_fb: any = 0;
    // xCoord: any;
    // yCoord: any;
    oldVal: any = {
        'x': 70,
        'y': 30
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
            "x": 135,
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
        this.db.object('prediction').valueChanges().subscribe(
            data => {
                console.log(typeof data, data);
                this.value_fb = data.toString();
                // this.yCoord = this.value_fb.toString();
                this.getLocation();
            }

        )
    }
    getLocation = async () => {
        // console.log(this.value_fb);
        // console.log("y=", this.loctionDict["0"]['y']);
        // // console.log()
        if (this.loctionDict[this.value_fb]['x'] === 135) {
            while (this.oldVal['y'] !== this.loctionDict[this.value_fb]['y']) {
                if (this.oldVal['y'] > this.loctionDict[this.value_fb]["y"]) {
                    this.oldVal["y"] -= 5;

                }
                else {
                    this.oldVal["y"] += 5;

                }
                // console.log(this.oldVal);
                // setTimeout(() => { this.sketch() }, 10000);
                this.sketch();
            }
        }
        else if (this.loctionDict[this.value_fb]['x'] !== 135) {
            while (this.oldVal['x'] !== 135) {
                this.oldVal["x"] += 5;
                // console.log(this.oldVal);
                // console.log('move x');
                //this.sketch();
                this.sketch();
            }
            while (this.oldVal['y'] !== this.loctionDict[this.value_fb]['y']) {
                if (this.oldVal['y'] > this.loctionDict[this.value_fb]["y"]) {
                    this.oldVal["y"] -= 5;
                }
                else {
                    this.oldVal["y"] += 5;
                }
                // console.log('move y');
                // console.log(this.oldVal);
                setTimeout(() => { this.sketch() }, 1000);
                this.sketch();
            }
            while (this.oldVal['x'] !== this.loctionDict[this.value_fb]['x']) {
                if (this.oldVal['x'] > this.loctionDict[this.value_fb]["x"]) {
                    this.oldVal["x"] -= 5;
                }
                else {
                    this.oldVal["x"] += 5;
                }
                // console.log('move x again');
                // console.log(this.oldVal);
                setTimeout(() => { this.sketch() }, 1000);
                this.sketch();
            }
        }

        // this.xCoord = this.loctionDict[this.value_fb]['x'];
        // this.yCoord = this.loctionDict[this.value_fb]['y'];
        // console.log(this.xCoord);
        // document.getElementById('chk').setAttribute("x", this.xCoord.toString());
        // document.getElementById('chk').setAttribute("y", this.yCoord.toString());
        // this.oldVal.x = this.loctionDict[this.value_fb]['x'];
        // console.log(this.oldVal.x);
        // this.oldVal.y = this.loctionDict[this.value_fb]['y'];


    }
    sketch() {
        document.getElementById('chk').setAttribute("x", this.oldVal["x"].toString());
        document.getElementById('chk').setAttribute("y", this.oldVal["y"].toString());
    }

}
