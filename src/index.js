
import * as stack from './stack.js';

window.onload = function () {
    console.log("done");

    var pop = document.getElementById('pop');
    var push = document.getElementById('push');
    var peek = document.getElementById('peek');
    var display = document.getElementById('top_of_stack');

    pop.addEventListener("click", function() {
        const popped = stack.pop();
        let text;
        if (popped === undefined) {
            text = "Finns inget att poppa :("
        } else {
            text = "Tog bort " + popped;
        }
        alert(text);
    });

    push.addEventListener("click", function() {
        var x = prompt("Vad ska vi lägga på stacken?");
        stack.push(x);
        display.innerHTML = x;
    });

    peek.addEventListener("click", function() {
        display.innerHTML = stack.peek();
    });
};
