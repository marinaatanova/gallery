document.getElementById('left').onclick = photoLeft;
var left = 0;
function photoLeft() {
    var photos = document.getElementById('photos');
    left = left - 1680;
    //if (left)
    photos.style.left = left +'px';
}
document.getElementById('right').onclick = photoRight;
var right = 0;
function photoRight() {
    var photos = document.getElementById('photos');
    left += 1680;
    if (left>0){
        left=-16800;
    }
    photos.style.left = left +'px';
}

/*var array = document.getElementsByTagName('img');//выбирает все картинки на странице
//var count = array.length;
//console.log("количество элементов:"+count);
//console.log(array);
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}*/

