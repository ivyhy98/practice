/*==============================
*===========TWO SUM============
*===============================
*/
//Given an array of integers nums and an integer target
// return indices of the two numbers such that they add up to target

const twoSum = (nums, target)=>{
    //Define a hash map
    const hash = new Map;
    //iterate over array length of num amount of times
    for(let i = 0; i< nums.length; i++){
        //set difference to the difference of target and our current number
        const difference = target - nums[i];
        //if the hash has the number that we need aka difference return the index of it and the current number
        if(hash.get(difference)!== undefined){
            return [hash.get(difference), i];
        } else{
            //otherwise add the current number and it's index to the hash
            hash.set(nums[i], i)
        }
    }
}

// console.log(twoSum([2,7,11,15], 9));


/*=====================================================
*===========Best Time to Buy and Sell Stock============
*======================================================
*/
//given array prices prices[i] is the price of a given stock on ith day
//Maximize profit by choosing a day to buy a stock(lowest price) and choose a different day in future to sell
//Return Max profit. if no profit exists return 0;

//Greedy Algorithm
const maxProfit = (prices) =>{
    //starts with the first element of array 
    let dayToBuy = prices[0];
    let profit = 0;
    //iterate nth(prices length) amount of times
    for(let i = 0; i<prices.length; i++){
        //if our first element is more than the current element day to buy is now the current day
        if(dayToBuy > prices[i]){
            dayToBuy = prices[i];
        }
        //current profit is the current cost minus the price we bought it 
        let current = prices[i] - dayToBuy;
        if(current > profit){
            profit = current;
        }
    }
    return profit;
}

//console.log(maxProfit([7,1,5,3,6,8])) // 5


/*======================================
*===========Majority Element============
*=======================================
*/
// Given an array nums of size n return the majority element
//majority element is the element that appears more than [n/2] times

const majorityElement =(nums)=>{
    const n = nums.length;
    const hash = {}
    //iterate over array
    let element = 0;
    for(let i =0; i<n; i++){
        //if current hash is already in our map add one to its value our counter
        if(hash[nums[i]] !== undefined){
            hash[nums[i]] += 1;
        } else{ // else add 1 count to current number
            hash[nums[i]] = 1;
        }

        if(hash[nums[i]] > (n / 2)){
            element = nums[i];
        }
    }
    return element;
}

console.log(majorityElement([3,2,3])) //3

/*========================================
===========Contains Duplicate=============
=========================================*/

// given an int array nums return true if any value appears at least twice return false if they are distinct

const duplicate = (nums) => {
  //we can say for the length of nums we check if our hash map has the num in it already
  //if it does we return true else we return false
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      return true;
    } else {
      hash.set(nums[i], true);
    }
  }
  return false; //returns false by default until we get a true;
};

console.log(duplicat[1,2,3,1]);

//or we can just convert it to a set because sets can't have duplicates
//the length of the set and the original array would be different and we can return true if they are different lengths
