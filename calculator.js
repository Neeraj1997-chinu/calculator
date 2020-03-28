"strict mode";
var boxes=document.getElementsByClassName("box");
var display=document.getElementById("res");
var num=0;
var num2=null;
var oprtr=null;

for(var i=0;i<boxes.length;i++){
    boxes[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        if(value=='+'){
            oprtr="+";
            num=parseFloat(display.textContent);
            display.innerText="";
        }
        else if(value=='-'){
            oprtr="-";
            num=parseFloat(display.textContent);
            display.innerText="";
        }
        else if(value=='*'){
            oprtr="*";
            num=parseFloat(display.textContent);
            display.innerText="";
        }
        else if(value=='/'){
            oprtr="/";
            num=parseFloat(display.textContent);
            display.innerText="";
        }
        else if(value=='%'){
            oprtr="%";
            num=parseFloat(display.textContent);
            var sum=eval(num+""+"/"+100);
            display.innerText=sum;
        }
        else if(value=='+/-'){
            oprtr="-";
            num=parseFloat(display.textContent);
            var su=eval(-1+""+"*"+num);
            display.innerText=su;
        }
        else if(value=='Ac'){
            display.innerText="";
        }
        else if(value=='='){
            num2=parseFloat(display.textContent);
            if(num2=='0' && oprtr=='/'){
                display.innerText="Error";
            }
            else{
            var result=eval(num+""+oprtr+""+num2);
            display.innerText=result;
            num=result;
            }

        }
        else{
            display.innerText +=value;
        }
    } );
}
