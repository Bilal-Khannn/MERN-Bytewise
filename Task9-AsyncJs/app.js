let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  Liquid: ["water", "ice"],
  Holder: ["cone", "cup", "stick"],
  Toppings: ["chocolate", "peanuts"],
};

/* Understanding the call-back Hell */

// let order = (FruitName, call_production) => {
//   setTimeout(() => {
//     //select the fruit
//     console.log(
//       `Ingredient "${stocks.Fruits[FruitName]}" has been selected. Order Placed!`
//     );
//     //start the production
//     call_production();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log("Order Recieved! Production has started...");

//     setTimeout(() => {
//       console.log("Fruit has been chopped!");

//       setTimeout(() => {
//         console.log(
//           `"${stocks.Liquid[0]}" and "${stocks.Liquid[1]}" has been added!`
//         );

//         setTimeout(() => {
//           console.log("Machine has started!");

//           setTimeout(() => {
//             console.log(
//               `"${stocks.Holder[0]}" has been selected as a container for the ice-cream!`
//             );

//             setTimeout(() => {
//               console.log(
//                 `"${stocks.Toppings[0]}" is being added as a topping!`
//               );

//               setTimeout(() => {
//                 console.log("Serving Ice Cream...");
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0000);
// };

// order(1, production);

/* Understanding Promises */

let is_shop_open = true;

// let order = (work, time) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("Can not place order, Shop is closed!"));
//     }
//   });
// };

// order(() => console.log(`${stocks.Fruits[0]} was selected`), 2000)
//   .then(() => {
//     return order(
//       () => console.log("Order Recieved! Production has started..."),
//       0000
//     ).then(() => {
//       return order(() => console.log("Fruit has been chopped!"), 2000).then(
//         () => {
//           return order(
//             () =>
//               console.log(
//                 `"${stocks.Liquid[0]}" and "${stocks.Liquid[1]}" has been added!`
//               ),
//             1000
//           ).then(() => {
//             return order(() => console.log("Machine has started!"), 1000).then(
//               () => {
//                 return order(
//                   () =>
//                     console.log(
//                       `"${stocks.Holder[0]}" has been selected as a container for the ice-cream!`
//                     ),
//                   2000
//                 ).then(() => {
//                   return order(
//                     () =>
//                       console.log(
//                         `"${stocks.Toppings[0]}" is being added as a topping!`
//                       ),
//                     3000
//                   ).then(() => {
//                     return order(
//                       () => console.log("Serving Ice Cream..."),
//                       2000
//                     );
//                   });
//                 });
//               }
//             );
//           });
//         }
//       );
//     });
//   })
//   .catch(() => {
//     console.log("Customer left!");
//   })

//   .finally(() => {
//     console.log("Day ended! Shop closed!");
//   });

/* understanding async/await */

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is closed!"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`"${stocks.Fruits[0]}" has been selected`);

    await time(0000);
    console.log("Order placed! Starting production...");

    await time(2000);
    console.log("Fruit has been chopped!");

    await time(1000);
    console.log(
      `"${stocks.Liquid[0]}" and "${stocks.Liquid[1]}" has been added!`
    );

    await time(1000);
    console.log("Machine has started!");

    await time(2000);
    console.log(
      `"${stocks.Holder[0]}" has been selected as a container for the ice-cream!`
    );

    await time(3000);
    console.log(`"${stocks.Toppings[0]}" is being added as a topping!`);

    await time(2000);
    console.log("Serving Ice Cream...");
  } catch (error) {
    console.log("Customer left!", error);
  } finally {
    console.log("Day ended! Closing shop...");
  }
}

kitchen();
