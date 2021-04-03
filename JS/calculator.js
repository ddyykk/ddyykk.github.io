let calculator = {
    finish_bit: true,
    // finish bit is to see if the calculation is finished, if finished, then start a new one. True means the calculation is done.
    clear: function () {
        document.getElementById('display').textContent = 0;
        // clear the display
        this.finish_bit = true;
    },

    get: function (value) {
        if (this.finish_bit) {
            document.getElementById('display').textContent = '';
            this.finish_bit = false;
            // clear the zero in the display and enable the calculation by set the finish bit to false.
        } else {
            this.finish_bit = false;
        }
        document.getElementById('display').textContent += value;
        // this append the input to a string
    },
    del: function () {
        if (this.finish_bit) {
            // if one calculation is just finished, del button does nothing to it
        } else {
            let a = document.getElementById('display').innerHTML.toString();
            a = a.substr(0, a.length - 1);
            document.getElementById('display').innerHTML = a;
        }
    },
    calculate: function () {
        return eval(document.getElementById('display').textContent);
        // the line will use the input string as a math instruction and return the answer
    },

    show: function () {
        document.getElementById('display').textContent = this.calculate();
        this.finish_bit = true;
        // This function display the answer and reset the finish bit.
    },
};
