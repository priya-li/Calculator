var input = document.getElementById('text'),//displaying input/output
number = document.getElementsByClassName('num'),//number buttons
operator = document.getElementsByClassName('op'),//operator buttons
result = document.getElementsByClassName('ans'),//equal-to button
dlt = document.getElementsByClassName('dlt'),//delete button
clear = document.getElementsByClassName('clear'),//clear button
sign = document.getElementsByClassName('sign'),//change sign button
resultDisplayed = false;

//on clicking the numbers
for(var i=0;i<number.length;i++){
    number[i].addEventListener("click",function(e) {
        var t=this.innerHTML;//the displayed input will be stored in form of string
        var last=t[t.length-1];
        if(resultDisplayed===false){
            //if result is not displayed, appedding numbers to input
            input.innerHTML+=e.target.innerHTML;
        }
        else if(resultDisplayed===true && (last==='+' || last==='-' || last==='x' || last==='/'|| last==='%')){
            //if result is displayed and user enters an operator
            //adding operator to perform next operation
            resultDisplayed=false;
            input.innerHTML+=e.target.innerHTML;
        }
        else{
            //if result is displayed and user enters a number
            //clearing the display and appending entered number to display
            resultDisplayed=false;
            input.innerHTML="";
            input.innerHTML+=e.target.innerHTML;
        }
    
    });
}

//on clicking the operators
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener("click",function(e) {
        var t=input.innerHTML;//the displayed input will be stored in form of string
        var last=t[t.length-1];
        if(last==='+' || last==='-' || last==='x' || last==='/' || last==='%'){
            //result is displayed currently and user enters an operator
            var new_string=t.substring(0,t.length-1)+e.target.innerHTML;
            input.innerHTML=new_string;//considering displayed result as first_number
        }
        else if(t.length==0){
            //user enters an operator first
            alert("Enter a number first");
        }
        else{
            //adding opperator to input
            input.innerHTML+=e.target.innerHTML;
        }
    
    });
}

//on clicking Dlt button, deleting the last entered input value
dlt[0].addEventListener("click",() => {
    var inpstr = input.innerHTML;//the displayed input will be stored in form of string
    inpstr=inpstr.substring(0,inpstr.length-1);
    input.innerHTML=inpstr;
});

//on clicking Clr button, clearing the whole input value
clear[0].addEventListener("click",() => {
var inpstr = "";
input.innerHTML=inpstr;
});

//on clicking +/- button, changing the sign of number
sign[0].addEventListener("click",() =>{
    var inpstr=input.innerHTML;//the displayed input will be stored in form of string
    var numb=+inpstr;//converting string to number
    //clearing the display and displaying sign
    input.innerHTML="";
    input.innerHTML=0-numb;
});

//on clicking equal-to button
result[0].addEventListener("click",() => {
    var first='',second='',oppe,index;
    var inpstr=input.innerHTML;//the displayed input will be stored in form of string
    for(var i=0;i<inpstr.length;i++){
        if(inpstr[i]=='+' || inpstr[i]=='-' || inpstr[i]=='x' || inpstr[i]=='/' || inpstr[i]=='%'){
            //checking for the operator that has been entered
            index=i;
            oppe=inpstr[i];
        }
    }
    for(var j=0;j<index;j++){
        //string before operator considered as first number
        first+=inpstr[j];
    }
    for(var k=index+1;k<inpstr.length;k++){
        //string before operator considered as first number
        second+=inpstr[k];
    }
    //converting string to integer
    var first_num=+first;
    var second_num=+second;

    var answer;

    switch(oppe)//checking for the right operation and computing the numbers
    {
        case '+':
            answer=first_num+second_num;
            break;
        case '-':
            answer=first_num-second_num;
            break;
        case 'x':
            answer=first_num*second_num;
            break;
        case '/':
            answer=first_num/second_num;
            break; 
        case '%':
            answer=(first_num/second_num)*100;
            break;
          
    }
    //computed result is displayed
    input.innerHTML=answer;
    resultDisplayed=true;
});


//https://codepen.io/ggetchell/pen/KVgrYq