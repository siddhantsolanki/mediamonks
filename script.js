var slider_img=document.querySelector('.images');
var images=['picture1.jpeg','picture2.jpg','picture3.jpg','picture4.jpg'];
var i=0;

function prev(){
if(i<=0) i = images.length;
i--;
return setImg();
}

function next(){
    if(i>=images.length-1) i=-1;
    i++;
    return setImg();
}

function setImg(){
return slider_img.setAttribute('src','./'+images[i])
}