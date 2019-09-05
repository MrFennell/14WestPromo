//listen for the first checkbox to be checked and set the second to checked or unchecked accordingly.
document.querySelector('#checkboxHeader').addEventListener('click',function(){
    if (document.querySelector('#checkboxHeader').checked === true){
        document.querySelector('#checkboxFooter').checked = true;
    }
    else{
        document.querySelector('#checkboxFooter').checked = false;
    }
})

//listen for the second checkbox to be checked and set the first to checked or unchecked accordingly.
document.querySelector('#checkboxFooter').addEventListener('click',function(){
    if (document.querySelector('#checkboxFooter').checked === true){
        document.querySelector('#checkboxHeader').checked = true;
    }
    else{
        document.querySelector('#checkboxHeader').checked = false;
    }
})

//set an array of each submit button. If there were more buttons we didn't want to click I'd use something like classname instead.
const buttonArray = document.querySelectorAll('button[type="submit"]');

//associate an event listener with each of the buttons in the array.
buttonArray.forEach(function(button){
    
    button.addEventListener('click', function(event){

        //prevent the page from reloading upon submit
        event.preventDefault()

        //set an array containing each checkbox and their current attributes.
        const checkboxes = document.querySelectorAll('input[type="checkbox"]')
        
        //alert the user to check the checkbox in order to continue if necessary
        if (checkboxes[0].checked !== true || checkboxes[1].checked !== true){  
            alert('Please check the field above to reserve your live webinar.')
        }

        //alert if user has already confirmed their reservation
        else if (document.querySelector('.submit-response').style.display ==='block'){
            alert('You have already reserved your seat at the webinar.')
        }

        else{

            try{
                //create request object to be sent
                const request = new XMLHttpRequest()

                //use a GET request as we are not sending any data, and set the async boolean to 'true'
                request.open('GET', 'https://bl45immth4.execute-api.us-east-1.amazonaws.com/production/', true)

                request.send()
                
                request.onload = function(){

                    //parse the response into a JSON object and single out the body.
                    const res = JSON.parse(this.response);
                    const resBody = res.body

                    //parse the body's contents into another JSON object
                    const bodyJson= JSON.parse(resBody);
                    
                    //select each of the 'submit-response' tags and set their value to that of submitok
                    const submitResponse = document.querySelectorAll('.submit-response')
                    submitResponse.forEach(function(e){
                        e.style.display='block' //submit-response is hidden by default to avoid affecting the layout
                        e.innerHTML=bodyJson.submitok
                    })
                }
            }
            //helpful error log in case of any issues
            catch(error){
                console.log(error)
            }
        }
    })
})
