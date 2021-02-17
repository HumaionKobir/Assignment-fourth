        //work-1
function MileToFeet(mile){
    var feet = mile * 5280;
    return feet;
}
var feet1 = MileToFeet(144);
console.log (feet1);

var feet2 = MileToFeet (156);
console.log(feet2);


        //work-2
function WoodCalculator (chair, table, bed){
    if (chair <= 0 || table <= 0 || bed <= 0){
         return "Invalid Input"
     }

     else{
         var chairWood = chair * 1;
         var tableWood = table * 3;
         var bedWood = bed * 5;
         total = chairWood + tableWood + bedWood;
     }
     return total;
}

var totalWood = WoodCalculator(10,3,2);
console.log (totalWood, "KBF;");

var totalWood2 = WoodCalculator (12, 4, 3);
console.log (totalWood2, "KBF;");


        //work-3
function BrickCalculator (floor){
    var brick = 0;
    if (floor <= 10){
        brick = floor * 15 * 1000;
    }

    else if (floor <= 20){
        var firstPart = 10 * 15 * 1000;
        var remaining = floor - 10;
        var secondPart = remaining * 12 * 1000;
        brick = firstPart + secondPart;
    }

    else{
        var firstPart = 10* 15 * 1000;
        var secondPart = 10 * 12 * 1000;
        var remaining = floor - 10;
        var thirdPart = remaining * 10 * 1000;
        brick = firstPart + secondPart + thirdPart;
    }
   return brick; 
}

var countBrick = BrickCalculator (12);
console.log (countBrick);


        //word-4
function smallFriend(names){
     var smallest = names[0];
     for (var i = 0; i< names.length; i++){
         if(names[i].length<smallest.length){
            smallest = names[i];
        }
    }
   return smallest;
}

var names = ["Humaion", "Kobir", "Maksuda", "Hridiya", "Arif"]
var result = smallFriend (names);
console.log (result);



                //coding done