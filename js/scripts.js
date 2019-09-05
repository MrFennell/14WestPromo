
//listens for the first checkbox to be checked and sets the second to checked or unchecked accordingly.
document.querySelector('#checkboxHeader').addEventListener('click',function(){
    if (document.querySelector('#checkboxHeader').checked === true){
        document.querySelector('#checkboxFooter').checked = true;
    }
    else{
        document.querySelector('#checkboxFooter').checked = false;
    }
})
//listens for the second checkbox to be checked and sets the first to checked or unchecked accordingly.
document.querySelector('#checkboxFooter').addEventListener('click',function(){
    if (document.querySelector('#checkboxFooter').checked === true){
        document.querySelector('#checkboxHeader').checked = true;
    }
    else{
        document.querySelector('#checkboxHeader').checked = false;
    }
})

window.onload = function countdown(){
    const currentDate = new Date(); //get today's date
    const futureDate = new Date(); //init future date variable
    
    //returns sum of milliseconds since Jan 1 1970, will be used to calculate time until meeting.
    const currentTime = currentDate.getTime(); 

    //set future date 5 days into the future
    //NOTE: I wasn't completely sure if today would count as one of the 5 days until the meeting per the instructions. Otherwise it would be set to getDate()+4)
    futureDate.setDate(futureDate.getDate()+5);

    //set future date to midnight and return the sum of milliseconds since Jan 1 1970
    const futureTime  = futureDate.setHours(24,0,0,0) 
    
    //subtract the current date from the future date to get the number of milliseconds left until the webinar.
    const difference = futureTime - currentTime;

    //use some math to calculate the days,hours,min,sec left in the difference between current and future date.
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    console.log('days',days, 'h',hours,'m',minutes,'s',seconds);
    document.querySelector('#dateData-days').innerHTML = days 
    document.querySelector('#dateData-hours').innerHTML = hours 
    document.querySelector('#dateData-minutes').innerHTML = minutes 
    document.querySelector('#dateData-seconds').innerHTML = seconds 
    setTimeout( countdown, 1000); //sets the function to rerun every second
}


// window.onload = function countdown(){
//     const currentDate = new Date();
//     // const hours = d.getHours();
//     // const minutes = d.getMinutes();
//     // const totalMinutes = (60*hours) + minutes;
//     // const minutesLeftinDay = 1440 - totalMinutes;
//     // const currentTime = d.getTime();
//     // // plan: get number of minutes so far in day and subtract them from 1440, the total amount of daily minutes
    
//     // //  then get 
//     // let futureDate = new Date();
//     // futureDate.setDate(futureDate.getDate()+5);
//     // let futureDateinMinutes = futureDate.getTime(); 

//     // const year = d.getFullYear();
//     // const today = d.getDay();
//     // countdownTargetDay = today + 4;
//     // countdownTarget = new Date()
//     // //get the total minutes that have passed so far in the day
    
//     // const time = d.getTime();
    
    
//     // futureDateDay = futureDate.getDate()
//     // console.log('future date '+ futureDateDay)
//     const currentTime = currentDate.getTime();
//     let futureDate = new Date();
//     futureDate.setDate(futureDate.getDate()+5);
//     let futureDateinMinutes = futureDate.getTime(); 


//     // const futureDateinMinutes = futureDate.getMinutes()
//     // console.log('year: '+year, 'today'+today)
//     // console.log('hours: '+hours+'total minutes: '+totalMinutes);
//     document.querySelector('#dateData').innerHTML = currentDate
//     setTimeout( countdown, 1000); //sets the function to rerun every second
// }