$(document).ready(function () {
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
        if (sw === 0) { //make it toggles instead of one shot effect
            $('.animate1').animate(
                {
                    // position:"absolute", doesn't work
                    left: '250px',
                    height: '150px',
                    width: '150px',
                    fontSize: '36px',
                },
                500
            ); //500ms to finish the animation
            sw = 1;
        } else {
            $('.animate1').animate(
                {
                    left: '28px',
                    height: '50px',
                    width: '50px',
                    fontSize: '16px',
                },
                500
            ); //500ms to finish the animation
            sw = 0;
        }
    });
});
