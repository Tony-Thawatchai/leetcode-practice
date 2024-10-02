/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowest = prices[0]
    let maxProfit = 0

    for (let i=1; i<prices.length; i++){
        console.log("prices[i]",prices[i] )
        console.log("lowest",lowest )
        console.log("maxProfit",maxProfit )
        if(prices[i] > lowest &&(prices[i] - lowest) > maxProfit){
            maxProfit = prices[i] - lowest
        }
        if (prices[i]< lowest){
            lowest = prices[i]
        }

        console.log("after")
        console.log("lowest",lowest )
        console.log("maxProfit",maxProfit )


    }

    return maxProfit
    
};