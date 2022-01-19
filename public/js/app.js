const contactform = document.querySelector('.main_form');
let name = document.getElementById('fname');
let email = document.getElementById('email');
let number = document.getElementById('number');
let message = document.getElementById('message');

contactform.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = {
        name: fname.value,
        email: email.value,
        number: number.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email sent');
            fname.value = '';
            email.value = '';
            number.value = '';
            message.value = '';
        }else{
            alert('Something went wrong!')
        }
    }

    xhr.send(JSON.stringify(formData));
});