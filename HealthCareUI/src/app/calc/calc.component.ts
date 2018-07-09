import { Component, OnInit } from '@angular/core';
import { SpeechService } from '../../lib';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-calc',
    templateUrl: './calc.component.html',
    styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

    msg = 'nothing';
    comment = '';
    context = '';
    subscription: Subscription;
    good: any;
    medicines: any[] = [
        'Amoxicillin','Paracetamol','psychology','Once a day','Twice a day','Thrice a day','4 times a day',
        '100mg','500mg'
    ];
    
    started = true;

    constructor(public speech: SpeechService) { }
    myCrazyCallback(evnt){

        alert('Got it');
    }
    ngOnInit() {
        this.speech.start();
        this.speech.message.subscribe(msg => {
            this.msg = msg.message;
        });
        this.speech.context.subscribe(context => {
            this.context = context;
        });        
        this.speech.started.subscribe(started => this.started = started);
    }
    toggleVoiceRecognition() {
        if (this.started) {
            this.speech.stop();
        } else {
            this.speech.start();
        }
    }
    
   
    recordStart() {
        this.subscription = this.speech.message.subscribe(msg => {
            this.comment += msg.message + '\n';
        });
    }
    recordStop() {
        this.subscription.unsubscribe();
    }
    hello() {
        console.log('hello');
    }
}
