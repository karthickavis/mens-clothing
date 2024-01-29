// function prev(){
//    let parent = document.getElementsByClassName('sliderimage');
//    let lastchild = parent[0].lastElementChild;
//    parent[0].removeChild(lastchild);
//    parent[0].insertBefore(lastchild,parent[0].firstElementChild);
// }
// function next(){
//   let parent = document.getElementsByClassName('sliderimage');
//    let firstchild = parent[0].firstElementChild;
//    parent[0].removeChild(firstchild);
//    parent[0].insertBefore(firstchild,parent[0].lastElementChild);
// }


function prev(){
   let container = document.getElementById("parent");
   let image = container.children;
   let currentImage = image.item(0);
   container.removeChild(currentImage);
   container.append(currentImage);
}
function next(){
   let container = document.getElementById("parent");
   let image = container.children;
   let currentImage = image[image.length-1];
   container.removeChild(currentImage);
   container.prepend(currentImage);
}
