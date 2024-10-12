/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let canPlotList = []
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) {
            canPlotList.push(false)
            if (i  < flowerbed.length - 2) {
                canPlotList.push(false)
                i++
            }
        } 
    }
    console.log(canPlotList);
    return canPlotList.filter(Boolean).length >= n
};