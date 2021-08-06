canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car2_width=120;
car2_height=70;
car2_image="carimg2.png";
car2_x=10;
car2_y=10;
car1_width=120;
car1_height=70;
car1_image="carimg.png";
car1_x=20;
car1_y=20;


background_image="racing img.jpg";


function add()
{
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;
car1_imgTag = new Image();
car1_imgTag.onload = uploadcar1;
car1_imgTag.src = car1_image;

car2_imgTag = new Image();
car2_imgTag.onload = uploadcar2;
car2_imgTag.src = car2_image;
}

function uploadBackground()
{
ctx.drawImage(background_imgTag, 0, 0, canvas.width , canvas.height);
}


function uploadcar2()
{
ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width , car2_height);
}

function uploadcar1()
{
ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width , car1_height);
}


window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
keyPressed = e.keyCode;
console.log("keyPressed");
if (keyPressed == '38')
{
car1_up();
console.log("uparrowkey")
}

keyPressed = e.keyCode;
console.log("keyPressed");
if (keyPressed == '40')
{
car1_down();
console.log("downarrowkey")
}

keyPressed = e.keyCode;
console.log("keyPressed");
if (keyPressed == '37')
{
car1_left();
console.log("leftarrowkey")
}

keyPressed = e.keyCode;
console.log("keyPressed");
if (keyPressed == '39')
{
car1_right();
console.log("rightarrowkey")
}
}
{
keyPressed = e.keyCode;
console.log("keyPressed");
if (keyPressed == '87')
{
car2_up();
console.log("wkey")
}

keyPressed = e.keyCode;
console.log("keyPressed");
if (keyPressed == '83')
{
car2_down();
console.log("sarrowkey")
}

keyPressed = e.keyCode;
console.log("keyPressed");
if (keyPressed == '65')
{
car2_left();
console.log("aarrowkey")
}

keyPressed = e.keyCode;
console.log("keyPressed");
if (keyPressed == '68')
{
car2_right();
console.log("darrowkey")
}
}


function car2_up()
{
if(car2_y >=0)
{
car2_y = car2_y - 10;
console.log("when up arrown key is pressed, x = "car2_x + " | y = " +car2_y);
uploadBackground();
uploadcar1();
uploadcar2();
    }

}


function car2_down()
{
if(car2_y <= 500)
{
car2_y = car2_y + 10;
console.log("when down arrown key is pressed, x = "car2_x + " | y = " +car2_y);
uploadBackground();
uploadcar1();
uploadcar2();
    }

}

function car_left()
{
if(car1_y <=500)
{
car2_y = car2_y - 10;
console.log("when left arrown key is pressed, x = "car2_x + " | y = " +car2_y);
uploadBackground();
uploadcar1();
uploadcar2();
    }

}

function car1_right()
{
if(car1_y <=500)
{
car1_y = car1_y - 10;
console.log("when right arrown key is pressed, x = "car2_x + " | y = " +car2_y);
uploadBackground();
uploadcar1();
uploadcar2();
    }

}

if (car2_x > 700)
{
console.log("car2_won");
document.getElementById('Game satus').innerHTML = "car 2 won!!";
}

if (car1_x > 700)
{
console.log("car1_won");
document.getElementById('Game satus').innerHTML = "car 1 won!!";
}

function car1_up()
{
if(car1_y >=0)
{
car1_y = car1_y - 10;
console.log("when up arrown key is pressed, x = "car1_x + " | y = " +car1_y);
uploadBackground();
uploadcar1();
uploadcar2();
    }

}


function car1_down()
{
if(car1_y <= 500)
{
car1_y = car1_y + 10;
console.log("when down arrown key is pressed, x = "car1_x + " | y = " +car1_y);
uploadBackground();
uploadcar1();
uploadcar2();
    }

}

function car1_left()
{
if(car1_y <=500)
{
car1_y = car1_y - 10;
console.log("when left arrown key is pressed, x = "car1_x + " | y = " +car1_y);
uploadBackground();
uploadcar1();
uploadcar2();
    }

}

function car1_right()
{
if(car1_y <=500)
{
car1_y = car1_y - 10;
console.log("when right arrown key is pressed, x = "car1_x + " | y = " +car1_y);
uploadBackground();
uploadcar1();
uploadcar2();
    }

}

if (car1_x > 700)
{
console.log("car1_won");
document.getElementById('Game satus').innerHTML = "car 1 won!!";
}

if (car2_x > 700)
{
console.log("car2_won");
document.getElementById('Game satus').innerHTML = "car 2 won!!";
}