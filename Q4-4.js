
usercart = [{ productId: 1, productName: "mobile", price: 70000 },
{ productId: 2, productName: "laptop", price: 100000 },
{ productId: 3, productName: "Airpods", price: 26900 },
{ productId: 4, productName: "Watch", price: 30000 },
{ productId: 5, productName: "Shoes", price: 35000 },
{ productId: 6, productName: "Bag", price: 10000 }]

let initialValue = 0


let sum = usercart.reduce(function (productName, price) {

    return price

    }, initialValue)

console.log(sum)
