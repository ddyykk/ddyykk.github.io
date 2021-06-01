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

    // get and set the content and values
    $('#get').click(function (e) {
        e.preventDefault();
        $('#test1').text('The text I got is: ' + $('#origin').text());
    });
    $('#set').click(function (e) {
        e.preventDefault();
        $('#test1').text($('#origin').text());
    });
    $('#getAttr').click(function (e) {
        e.preventDefault();
        $('#test1').text('The style I got is: ' + $('#origin').attr('style'));
    });

    let a, b, c, d;
    function defaultGetter() {
        a = $('#test1').css('background-color');
        b = $('#test1').css('color');
        c = $('#test1').css('font-size');
        d = $('#test1').css('font-family');
    }
    // store the default css attributes for later use
    defaultGetter();

    $('#setAttr').click(function (e) {
        e.preventDefault();
        $('#test1').attr('style', $('#origin').attr('style'));
        //note here, the css attributes here is read as one string, not 3 attributes, and the name of the attribute is style!
    });
    $('#reset').click(function (e) {
        e.preventDefault();
        $('#test1').text('This paragragh will show the output.').css({
            // just using css() because the attr() is too complicated to use here,
            //I need to combine all the attributes and set the right spaces and punctuations
            'background-color': a,
            color: b,
            'font-size': c,
            'font-family': d,
        });
    });

    $('#append').click(function (e) {
        e.preventDefault();
        $('#content').append(' Added some text in the end.');
    });
    $('#appendMulti').click(function (e) {
        //add multiple entries
        e.preventDefault();
        $('#container').append('<p>One line after.</p>', '<p>Second line.</P>').prepend($('<p></p>').text('One line before the paragraph.'));
    });
    $('#after').click(function (e) {
        e.preventDefault();
        $('#container').after('Added some text after the current element. <br>');
        // #container is a <div>, adding text only will result in some text without css style, add the <p> can tackle it.
    });
    $('#addMulti').click(function (e) {
        //add multiple entries
        e.preventDefault();
        $('#container').after('<p>One line after.</p>', '<p>Second line.</P>');
    });
    $('#remove').click(function (e) {
        e.preventDefault();
        $('#container').remove();
    });
    $('#empty').click(function (e) {
        e.preventDefault();
        $('#container').empty();
    });
    $('#reset1').click(function (e) {
        e.preventDefault();
        $('#container2').empty();
        $('#container2').append(' <div id="container" style="border: 1px solid black"><p id="content">This is a paragraph.</p></div> ');
        //This is a long string appended, note that I have to use single quotation mark because there are double quotations in the string.
    });

    $('#addClass').click(function (e) {
        e.preventDefault();
        $('#classTest').addClass('testClass redText');
    });
    $('#removeClass').click(function (e) {
        e.preventDefault();
        $('#classTest').removeClass();
    });
    $('#toggleClass').click(function (e) {
        e.preventDefault();
        $('#classTest').toggleClass('testClass redText');
        // note:even the toggleClass() is empty in the bracket, toggle can still work, even when the target class is been removed
    });


    $('#contentHeight').click(function (e) {
        e.preventDefault();
        $('#output').toggleClass('testClass2');
        $('#height').attr('value', $('#output').height() + ' px');
    });
    $('#innerButton').click(function (e) {
        e.preventDefault();
        $('#inner').attr('value', $('#output').innerHeight() + ' px');
    });
    $('#outterButton').click(function (e) {
        e.preventDefault();
        $('#outer').attr('value', $('#output').outerHeight() + ' px');
    });
    $('#trueButton').click(function (e) {
        e.preventDefault();
        $('#true').attr('value', $('#output').outerHeight(true) + ' px');
    });
});
