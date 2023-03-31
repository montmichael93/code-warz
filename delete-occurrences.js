function deleteNth(arr,n){
  // ...
	let frequency = {};
	let item;
    
	if (arr.length === 0) {
		return [];
	} else {
		for (let i = 0; i < arr.length; i++) {
		         item = arr[i]
			if (!isNaN(item)) {
             frequency[item] = (frequency[item] || 0) + 1;
            }
            
          if (frequency[item] > n) {
            arr.splice(i, 1);
              i--;
          }
        }
      return arr
    }
}
