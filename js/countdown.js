window.onload = function countdown(){
    //create empty date variables for today and future dates
    const currentDate = new Date();
    const futureDate = new Date();
    
    //return the sum of milliseconds since Jan 1 1970 to be used to calculate time until webinar.
    const currentTime = currentDate.getTime(); 

    //set future date 5 days into the future
    //NOTE: I wasn't completely sure if today would count as one of the 5 days until the webinar per the instructions. If so it would be set to getDate()+4)
    futureDate.setDate(futureDate.getDate()+5);

    //set future date to midnight and return the sum of milliseconds since Jan 1 1970 to that date
    const futureTime  = futureDate.setHours(24,0,0,0) 
    
    //subtract the current date from the future date to get the number of milliseconds left until the webinar.
    const difference = futureTime - currentTime;

    //use some math to calculate the days,hours,min,sec left in the difference between current and future date.
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    //concatenate zero to front of single digit seconds to help keep spacing consistent
    if(seconds < 10){
            seconds = "0"+seconds;
    }

    //output the data into their respective containers.
    document.querySelector('#dateData-days').innerHTML = days 
    document.querySelector('#dateData-hours').innerHTML = hours 
    document.querySelector('#dateData-minutes').innerHTML = minutes 
    document.querySelector('#dateData-seconds').innerHTML = seconds 
    
    //set the function to rerun every second
    setTimeout( countdown, 1000); 
}