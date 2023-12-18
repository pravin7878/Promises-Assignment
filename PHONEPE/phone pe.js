let toMobileNo = document.getElementById('tomobile')
let tobank = document.getElementById('tobank')
let toself = document.getElementById('toself')
let chackBalance = document.getElementById('chackbalance')

toMobileNo.addEventListener('click', function (e) {
    
    let sendmoney = document.getElementById('sendmoney')
    sendmoney.setAttribute('class', 'salectcontect');

    let h1 = document.createElement('h1');
    h1.innerText = '—Send Money'
    h1.setAttribute('class', 'bgblue');

    sendmoney.append(h1)
   
    createElement();

})

tobank.addEventListener('click', function () {
  
    let sendmoney = document.getElementById('sendmoney')
    sendmoney.setAttribute('class', 'salectcontect');
    
    let h1 = document.createElement('h1');
    h1.innerText = '—transfer Money'
    h1.setAttribute('class', 'bgblue');

    let upibtn = document.createElement('button')
    upibtn.innerText = 'To UPI ID';
    let Bankac = document.createElement('button')
    Bankac.innerText = 'To Bank Ac';
   
    upibtn.setAttribute('class','upibtn');
    Bankac.setAttribute('class','upibtn');

    let inp = document.createElement('INPUT');
    inp.setAttribute('type', 'text')
    inp.setAttribute('class', 'inputtext')

    let inp2 = document.createElement('INPUT');
    inp2.setAttribute('class', 'inputtext')
    inp2.setAttribute('type', 'number')
    
    let button = document.createElement('button');
    button.innerText = 'Pay'
    button.setAttribute('class', 'paybtn')

    let a = function(){
        let paymentsuccess = document.createElement('div')
        paymentsuccess.setAttribute('class','paymentsuccess')

        let mypromise =new Promise(function(resolve,reject ){
            resolve(paymentsuccess.innerText = 'Money Sending...')
         setTimeout(function(){
            paymentsuccess.innerText = `Payment of ₹ ${inp2.value}
            to ${inp.value}
             successfull.`
         },2000)
        })
        sendmoney.append(paymentsuccess)
    }

     button.addEventListener('click',a)

    

 let x = function(){
   
    inp.setAttribute('placeholder', 'enter a upi id')
    inp2.setAttribute('placeholder', 'enter amount')
    sendmoney.append(inp,inp2,button)
    
 }
 
 upibtn.addEventListener('click',x)


 
 
  let y = function(){
    
    inp.setAttribute('placeholder', 'enter account Number')
  
    let inp1 = document.createElement('INPUT');
    inp1.setAttribute('type', 'text')
    inp1.setAttribute('placeholder', 'enter IFAC code')
    inp1.setAttribute('class', 'inputtext')

    inp2.setAttribute('placeholder', 'enter amount')
    sendmoney.append(inp,inp1,inp2,button)

   
}

Bankac.addEventListener('click',y)

    sendmoney.append(h1,upibtn,Bankac)
   
    
})




let createElement = function(){
    let inp = document.createElement('INPUT');
    inp.setAttribute('type', 'text')
    inp.setAttribute('placeholder', 'enter a Mobile Number')
    inp.setAttribute('class', 'inputtext')
    let inp2 = document.createElement('INPUT');
    inp2.setAttribute('class', 'inputtext')
    inp2.setAttribute('type', 'number')
    inp2.setAttribute('placeholder', 'enter amount')
    let button = document.createElement('button');
    button.innerText = 'Pay'
    button.setAttribute('class', 'paybtn')
    
    sendmoney.append(inp,inp2,button)


    let b = function(){
       
        let paymentsuccess = document.createElement('div')
        paymentsuccess.setAttribute('class','paymentsuccess')

        let mypromise =new Promise(function(resolve,reject ){
            resolve(paymentsuccess.innerText = 'Money Sending...')
         setTimeout(function(){
            paymentsuccess.innerText = `Payment of ₹ ${inp2.value}
            to ${inp.value}
             successfull.`
         },2000)
        })
        sendmoney.append(paymentsuccess)
    }
    button.addEventListener('click',b)
} 

