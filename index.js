let checkAge = confirm("Are you under 18?")


let name = prompt("What is your name?");

let currentYear = new Date().getFullYear();

var yearOfBirth = Number(prompt(`Hello ${name}, please enter your year of Birth`));

let userAge = currentYear -yearOfBirth;


if (checkAge == true && userAge > 18) {
    alert(`Welcome! ${name}`)
}
    else if (checkAge == true && userAge < 18) {
        alert(`${name} you are a liar "Woop-woop" Can you hear it? that's the sound of da police! `)
    }
    else {
        alert(`${name} you have to been under 18 to visit this website`)
    }
   





