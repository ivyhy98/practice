function validCard(number){
    //make number into array of strings
    const nums = number.toString().split('')
    let total = 0;
    // for every other number multiply it by to and add every number to the total
    for(let i = 0; i<nums.length; i++){
        nums[i] = Number(nums[i]);

        if(i%2 == 1){ //if index is odd add number to total
            total += nums[i];

        } else if(nums[i]<=4){ // if the number is less than 4(doubles will be < 10) add doubled num to total 
            total += (nums[i]*2);

        } else {  // if index is even and number is more than 4 double and subtract 9
            //e.g. 18 => 1 + 8 => 18 -10 +1 => 18-9 => 9
            total += (nums[i] * 2) - 9;

        };
        
    };
    //return true if the total is divisible by 10
    return total % 10 == 0;
}

console.log(validCard(38520000023237));