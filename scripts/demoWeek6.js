let myCoolPlugin = function (name) {

    //
    // Variables
    //

    let someVar = 'thing 1';
    let someOtherVar = 123;
    let isTrue = false;


    //
    // Methods
    //

    /**
     * Log any numbers that are passed in to the console
     */
    let runTheNumbers = function (numbers) {
       for (number in numbers) {
           console.log(number);
       }
    };

    /**
     * Say hi to someone
     * @param  {String} name The person's name
     */
    let sayHi = function (name) {
        alert('Hello, ' + name + '!');
    };


    //
    // Inits & Event Listeners
    //

    // Log some numbers on initialization
    runTheNumbers([1, 2, 3, 4, 5]);
    sayHi(name);

    // Say hi to the user when a button is clicked
    document.addEventListener('click', function (event) {
        if (event.target.matches('.say-hi')) {
            sayHi(event.target.getAttribute('data-name'));
        }
    }, false);

};

myCoolPlugin("Seppe");