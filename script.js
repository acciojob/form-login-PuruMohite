let firstName = document.querySelector('input[name="fname"]');
let lastName = document.querySelector('input[name="lname"]');
let submitBtn = document.querySelector('input[type="submit"]');

function getFormvalue() {
    //Write your code here
	let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    alert(`${firstNameValue} ${lastNameValue}`);
}

