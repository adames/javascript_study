/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

/*
605. Can Place Flowers
You have a long flowerbed in which some of the plots are planted, and some are not. 
However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 
means not empty, and an integer n, return true if n new flowers can be planted in 
the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 

Constraints:
1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length
*/


const canPlaceFlowers = (flowerbed, n) => {
    let canPlotList = []
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) {
            
            canPlotList.push(false)

            if (i  < flowerbed.length - 2) {
                canPlotList.push(false)
                i++
            }
        } else {
            let canPlot = true;
            
            if (i != 0 && flowerbed[i - 1] != 0) {
                canPlot = false;
            }

            if (i < flowerbed.length - 1
                    && flowerbed[i + 1] != 0) {
                canPlot = false;
            }

            canPlotList.push(canPlot);

            if (i < flowerbed.length - 1) {
                canPlotList.push(false)
                i++;
            }
        }
    }
    console.log(canPlotList);
    return canPlotList.filter(Boolean).length >= n
};