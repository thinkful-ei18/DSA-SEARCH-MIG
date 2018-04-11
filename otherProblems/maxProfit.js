'use strict';

function maxProfit(arr){
  let profits = [];
  let currentMaxProfit = 0;
  let maxProfitIdx = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = 1; j < arr.length; j++){
      let netProfit = arr[j] - arr[i];
      if(netProfit>currentMaxProfit){
        currentMaxProfit = netProfit;
        maxProfitIdx = profits.length;
      }
      profits.push({
        buyDate:i+1,
        sellDate:j+1,
        net:netProfit
      });
    }
  }
  return profits[maxProfitIdx];

}

console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]));
