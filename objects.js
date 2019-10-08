//see if you can turn any functions into methods of objects
var house = {
    wood: 2, 
    metal: 3,
    door: 5,
    window: 10,
    hasRoof: true, 
    home: "feeling",

    shelter:function(){

    }
}
console.log(house.window);
//key object
for(var key in house) {

    if (!house.shelter(key)) continue;

    var obj = house[key];
    for(var prop in obj){
        if (!obj.house(prop)) continue;
        alert(prop + "=" + obj[prop]);
    }
}