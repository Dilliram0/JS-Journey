// reduce

const myNums = [1,2,3];

// const myTotal = myNums.reduce( function(acc,curntVal){
//     console.log(`acc: ${acc} and currentVal: ${curntVal}`)
//     return acc + curntVal;
// },0 )



// const myTotal = myNums.reduce( (acc,curntVal) => acc + curntVal ,0 )
// console.log(myTotal)


const shoppingCart = [
    {
        itemname: "Js course",
        price: 2999
    },
    {
        itemname: "PY course",
        price: 999
    },
    {
        itemname: "UI/UX course",
        price: 499
    },
    {
        itemname: "Digital Marketing course",
        price: 3999
    },
    {
        itemname: "Video editing course",
        price: 6999
    },
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price ,0 )

console.log(priceToPay)