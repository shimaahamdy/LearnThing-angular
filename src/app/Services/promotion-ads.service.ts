import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {

  private adsList: string[];
  constructor() {
    this.adsList = ["big Discounts",
                     "sale up to 50%",
                    "Check watch our white firday offers"];
                

   }

/*
function programming: logic we want to run (function)
Reactive jx --> deal with observable
promise: .then (if code run correct)
         .catch( if error happen)
         but action only be doen once

observalbe: code.subscripe()
we observe on specififc code if it changes 
the alarm subscripes to run theri function
-------------------------------------------------------
*/   
getSchedleAds(intervalTime:number): Observable<string>
{
  //return obseervable hold the code we want to listen on it and others can subscripe to it
  //observer who will subscripe to code
  //string datatype
  return new Observable <string>((observer)=>
  {
    //3 function we can deal with inside observer
    // observer.next(); //new value
    // observer.error();
    // observer.complete();


    //out logic
    let counter = 0;
    //consider interval wil be in sec
    let adstimer = setInterval(()=>{

    if(counter == this.adsList.length)
    {
      observer.complete();
    }
    if(this.adsList[counter]=="")
    {
      observer.error("empy add");
    }
    //run next  
    //new update to be run
    observer.next(this.adsList[counter]);
    counter++;


    },
    intervalTime*1000);

    return {
      unsubscribe()
      {
        //1-eroor
        //2-complete
        //3-unsubscripe

        clearInterval(adstimer);
        console.log("un subscripe call");

      }
    }
  });
}   

/*
observable operators
operators: hot:emit values without subscriper
           cold:must subscripe first

1-create observables:
built in observalbes           
 */

getSerialAds():Observable<string>
{
  //from observable
  //print elemennts of collection 
  return from(this.adsList)
}
}
