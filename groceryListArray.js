let groceryList = ['Yogurt', 'Protein Bar', 'Fruit', 'Candy']

function findGrocery(groceryList, num) {
    if(num > groceryList.length){
        console.log('Choose a number between 1 and', groceryList.length)
    }
   console.log(groceryList[num-1])
    }
findGrocery(groceryList, 2)
