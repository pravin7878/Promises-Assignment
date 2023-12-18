let toMobileNo = document.getElementById('tomobile')
let tobank = document.getElementById('tobank')
let toself = document.getElementById('toself')
let chackBalance = document.getElementById('chackbalance')

toMobileNo.addEventListener('click', function () {
    let sendmoney = document.getElementById('sendmoney')
    sendmoney.setAttribute('class', 'salectcontect');

    let h1 = document.createElement('h1');
    h1.innerText = '—Send Money'
    h1.setAttribute('class', 'bgblue');
    
    let inp = document.createElement('INPUT');
    inp.setAttribute('type', 'text')
    inp.setAttribute('placeholder', 'enter a mobile number or name')
    inp.setAttribute('class', 'inputtext')

    sendmoney.append(h1,inp)

    createElement();
})

tobank.addEventListener('click', function () {
    let sendmoney = document.getElementById('sendmoney')
    sendmoney.setAttribute('class', 'salectcontect');

    let h1 = document.createElement('h1');
    h1.innerText = '—transfer Money'
    h1.setAttribute('class', 'bgblue');

    let inp = document.createElement('INPUT');
    inp.setAttribute('type', 'text')
    inp.setAttribute('placeholder', 'enter a mobile number or name')
    inp.setAttribute('class', 'inputtext')

    sendmoney.append(h1,inp)

    createElement();
   
})

let createElement = function(){
    let inp2 = document.createElement('INPUT');

    inp2.setAttribute('type', 'number')
    inp2.setAttribute('placeholder', 'enter amount')

  
    inp2.setAttribute('class', 'inputtext')

    let button = document.createElement('button');
    button.innerText = 'Pay'
    button.setAttribute('class', 'paybtn')

    sendmoney.append(inp2, button)
}