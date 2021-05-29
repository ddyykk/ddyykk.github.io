$(document).ready(function () {
    //wrap everything in a ready function, run them after the page is loaded
    $('#hide').click(function () {
        $('.hide').toggle();
    });
    $('#fade').click(function () {
        $('.fade').fadeToggle(500);
    });

    let sw = 0;
    $('#opacity').click(function (e) {
        e.preventDefault();
        if (sw === 0) {
            $('.fade').fadeTo(300, 0.5);
            sw = 1;
        } else {
            $('.fade').fadeTo(300, 1);
            sw = 0;
        }
    });

    $('#header').click(function (e) {
        e.preventDefault();
        $('.slide').slideToggle(300);
    });
    $('#header').hover(
        function () {
            // over
            $('#header').fadeTo(50, 0.9);
        },
        function () {
            // out
            $('#header').fadeTo(50, 1);
        }
    );

    $('#animate1').click(function (e) {
        e.preventDefault();
        if (sw === 0) {
            //use the sw defined before, to make it toggle instead of one shot effect

            $('.animate1').css('position', 'relative').animate(
                // The "positon" needs to be changed to "relative" before I can move the block,
                // a common mistake is try to change it in the animate function, however .animate can only handle numeric values
                {
                    left: '250px',
                    top: '10px',
                    height: '150px',
                    width: '150px',
                    fontSize: '36px',
                },
                500 //500ms to finish the animation
            );
            sw = 1;
        } else {
            $('.animate1').animate(
                {
                    left: '23px',
                    top: '10px',
                    height: '50px',
                    width: '50px',
                    fontSize: '16px',
                },
                500 //500ms to finish the animation
            );
            sw = 0;
        }
    });

    let i = 0;
    $('#animate2').hover(
        function () {
            // This makes the box running around
            let positionArray = [75, 255, 95, 170, 25, 259, 350, 423, 500, 37, 550];
            $('#animate2').animate(
                {
                    left: positionArray[i] + 'px',
                    top: positionArray[i + 1] + 'px',
                },
                100 // The moving speed of the box
            );
            i++;
        },
        function () {
            // if the index number is too large, reset it
            if (i >= 10) {
                i = 0;
            } else {
                // do noting
            }
        }
    );
    $('#animate2').click(function (e) {
        e.preventDefault();
        $('#animate2').text('You got me');
    });
    $('#stop').click(function (e) {
        e.preventDefault();
        $('#animate2').text('Now try');
        $('#animate2').css('position', 'static');
        $('#animate2').css('left', '10px');
        $('#animate2').css('top', '10px');

        // the above can be written using chaining as this:
        // $("#animate2").text("Now try").css("position","static").css("left","10px").css("top","10px");
    });
});
