let Orderstatus = document.getElementById('status');

let orderedfood = document.getElementById('orderedFood');

let imagedisplay = document.getElementById('imagedisplay')
// console.log(food)
let orderbtn = document.getElementById('orderbtn')

orderbtn.addEventListener('click', function () {
    let h1 = document.createElement('h1')
    h1.innerText = 'food is bing ordering'
    Orderstatus.append(h1)
    // console.log(food[0].value)
    createpromise(fooditem,foodimage).then((res) => {
        console.log(res)
        h1.innerText = `${res} Order Succes`
    })
    createpromise(fooditem,foodimage).catch((err)=>{
        h1.innerText = `${err} Order faild`
})
    })
   

let foodimage = [
    {
        name: "Samosa",
        url: "./image manu/samosa.webp"
}
,
{
    name:'Chaat',
    url:"./image manu/chaat.webp"
},
{
    name:'Shahi Paneer',
    url:"./image manu/shahi-paneer.webp"
},
{
    name:'Pakora',
    url:"./image manu/chicken-pakora.webp"
},
{
    name:'Paratha',
    url:"./image manu/paratha.webp"
}
]



function createpromise() {
   
    let fooditem = document.querySelectorAll('#fooditem>div>div>input')
   
    let checkedfood = Array.from(fooditem).filter((ele) => {
        return ele.checked;
    });

   
    let salectedimg = Array.from(foodimage).filter((ele) => {
        return ele.name == checkedfood[0].value ;
    });

    console.log(salectedimg)
let image = document.createElement('img')
image.src = salectedimg[0].url
image.style.width='100%'
imagedisplay.append(image)

    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(checkedfood[0].value)
        }, 2000)
    })
    return myPromise

    let myPromise2 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject(checkedfood[0].value)
        }, 2000)
    })
    return myPromise2

}


