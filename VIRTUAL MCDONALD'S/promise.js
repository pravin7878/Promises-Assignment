// let Orderstatus = document.getElementById('status');

// let orderedfood = document.getElementById('orderedFood');

// let imagedisplay = document.getElementById('imagedisplay')
// // console.log(food)
// let orderbtn = document.getElementById('orderbtn')

// orderbtn.addEventListener('click', function () {
//     let h1 = document.createElement('h1')
//     h1.innerText = 'food is bing ordering'
//     Orderstatus.append(h1)
//     // console.log(food[0].value)
//     createpromise(fooditem,foodimage).then((res) => {
//         console.log(res)
//         h1.innerText = `${res} Order Succes`
//     })

// })

// let foodimage = [
//     {
//         name: "Samosa",
//         url: "./image/india-food-aloo-chaat.webp"
// }
// ,
// {
//     name:'Chaat',
//     url:"./image/india-food-chicken-pakora.webp"
// },
// {
//     name:'Shahi Paneer',
//     url:"./image/india-food-paratha.webp"
// },
// {
//     name:'Pakora',
//     url:"./image/india-food-shahi-paneer.webp"
// },
// {
//     name:'Paratha',
//     url:"./image/india-food-samosa.webp"
// }
// ]



// function createpromise() {
   
//     let fooditem = document.querySelectorAll('#fooditem>input')
//     let checkedfood = Array.from(fooditem).filter((ele) => {
//         return ele.checked;
//     });

   
//     let salectedimg = Array.from(foodimage).filter((ele) => {
//         return ele.name == checkedfood[0].value ;
//     });

//     console.log(salectedimg)
// let image = document.createElement('img')
// image.src = salectedimg[0].url
// image.style.width='100%'
// imagedisplay.append(image)

//     let myPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(checkedfood[0].value)
//         }, 2000)
//     })
//     return myPromise
// }


