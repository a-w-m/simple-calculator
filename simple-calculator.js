
    function calculator() {
        let calcArr = []
        let calcStr = calcArr.join("")





        function interface(){

            
            document.getElementById("terminal").innerHTML = eval(calcStr)
              
            
            document.getElementById("equals").onclick = function (){
                
                document.getElementById("terminal").innerHTML = eval(calcStr)
            }

            document.getElementById("allClear").onclick = function (){
                calcArr = [];
            }

            document.getElementById("delete").onclick = function () {
                calcArr.pop()
            }

            document.getElementById("divide").onclick = function (){
                calcArr.push('/')
            }
            document.getElementById("multiply").onclick = function (){
                calcArr.push('*')
            }
            document.getElementById("subtract").onclick = function (){
                calcArr.push('-')
            }
            document.getElementById("add").onclick = function(){
                calcArr.push('+')
            }
            document.getElementById("seven").onclick = function (){
                calcArr.push('7')
            }
            document.getElementById("eight").onclick = function(){
                calcArr.push('8')
            }
            document.getElementById("nine").onclick = function (){
                calcArr.push('9')
            }
           
           document.getElementById("five").onclick = function (){
                calcArr.push('5')
            }
            document.getElementById("six").onclick = function (){
                calcArr.push('6')
            }
            document.getElementById("one").onclick = function (){
                calcArr.push('1')
            }
            document.getElementById("two").onclick = function (){
                calcArr.push('2')
            }
            document.getElementById("three").onclick = function (){
                calcArr.push('3')
            }
            document.getElementById("decimal").onclick = function (){
                calcArr.push('.')
            }
            document.getElementById("zero").onclick = function (){
                calcArr.push('0')
            }
    

        }
    
                

            interface();
    console.log(calcArr, calcStr)




    
    }
    calculator();
