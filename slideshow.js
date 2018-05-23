                    var images = ["mainpic1.jpg", "mainpic2.jpg"];

                    var imagenumber = 0;
                    var imageLength = images.length - 1;

                    function changeimage(x) {
                            imagenumber += x;
                    if (imagenumber > imageLength) {
                            imagenumber = 0;
                            }
                    if (imagenumber < 0) {
                            imagenumber = imageLength;
                            }
                        document.getElementById("slideshow").src = images[imagenumber];
                    return false;
                        }
                
                function autorun(){
                    setInterval("changeimage(1)",3000)
                }
                autorun()