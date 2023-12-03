// const dishData = [
//     {
//         name: "Italian pasta",
//         price: 9.55
//     },
//     {
//         name: "Rice with veggies",
//         price: 8.65
//     },
//     {
//         name: "Chicken with potatoes",
//         price: 15.55
//     },
//     {
//         name: "Vegetarian Pizza",
//         price: 6.45
//     },
// ]
// const tax = 1.20;

// // Implement getPrices()
// // Implement getPrices()
// function getPrices(taxBoolean) {
//     // Determine whether to apply tax or not
//     const taxMultiplier = taxBoolean ? tax : 1;

//     console.log("Prices with 20% tax:");
//     for (let i = 0; i < dishData.length; i++) {
//         const dish = dishData[i];
//         const finalPrice = dish.price * taxMultiplier;
//         console.log(`Dish: ${dish.name} Price (incl.tax): $ ${finalPrice.toFixed(2)}`);
//     }

//     console.log("\nPrices without tax:");
//     for (let i = 0; i < dishData.length; i++) {
//         const dish = dishData[i];
//         console.log(`Dish: ${dish.name} Price (incl.tax): $ ${dish.price.toFixed(2)}`);
//     }
// }

// // Implement getDiscount()
// function getDiscount(taxBoolean, guests) 
// {
//     getPrices(taxBoolean);

//     // Step 10: Check the guests parameter
//     if (typeof guests === 'number' && guests > 0 && guests < 30) 
//     {
//         let discount = 0;

//         // Step 11: Calculate discount
//         if (guests < 5) 
//         {
//             discount = 5;
//         } else if (guests >= 5) 
//         {
//             discount = 10;
//         }

//         console.log('Discount is: $' + discount);
//     } else 
//     {
//         // Step 12: Handle invalid guests parameter
//         console.log('The second argument must be a number between 0 and 30');
//     }
// }


const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

function getPrices(taxBoolean) {
    for (let i = 0; i < dishData.length; i++) {
        let finalPrice;
        
        if (taxBoolean === true) {
            finalPrice = dishData[i].price * tax;
        } else if (taxBoolean === false) {
            finalPrice = dishData[i].price;
        } else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }
        
        console.log("Dish: " + dishData[i].name + " Price: $" + finalPrice.toFixed(2));
    }
}

function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);

    if (typeof guests === 'number' && guests > 0 && guests < 30) {
        let discount = 0;
        
        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }
        
        console.log('Discount is: $' + discount);
    } else {
        console.log('The second argument must be a number between 0 and 30');
    }
}

// Testing the functions with your examples:
getDiscount(true, 2);
getDiscount(false, 10);


