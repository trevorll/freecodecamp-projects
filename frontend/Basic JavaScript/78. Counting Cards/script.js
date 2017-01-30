
var count = 0;

function cc(card) {
  // Only change code below this line
  if ( card != 7  && card != 8 && card != 9){
    if( card < 7 && card != 1){
      count += 1;
    }else{
      count -= 1;
    }
  }
 
  
  if (count <= 0) {
    return count + " Hold";
  }else {
    return count + " Bet";
  }
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');