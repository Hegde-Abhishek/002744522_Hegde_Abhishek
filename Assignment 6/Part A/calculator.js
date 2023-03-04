$(document).ready(function () {
  $('#login-form').submit(function (e) {
    e.preventDefault();
    var err = false;
    var username = $('#username').val();
    var email = $('#email').val();
    var password = $('#password').val();

    var number = $('#number').val();
    $(".error").remove();
    if (username.length < 1) {
      $('#username').after('<span class="error">This field is required</span>'); err = true;
    } else if (username.length > 20) {
      $('#username').after('<span class="error">Cannot have this length</span>'); err = true;
    } else {
      var regEx = /^[a-zA-Z]+$/;
      var validUserName = regEx.test(username);
      if (!validUserName) {
        $('#username').after('<span class="error">Enter a valid username, only aplhabets are allowed.</span>'); err = true;
      }
    }


    if (email.length < 1) {
      $('#email').after('<span class="error">This field is required</span>'); err = true;
    } else if (email.length > 30) {
      $('#email').after('<span class="error">Cannot have this length</span>'); err = true;
    } else {
      var regEx = /([\w\.]+)@(northeastern.edu)/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#email').after('<span class="error">Enter a valid email</span>'); err = true;
      }
    }

    if (password.length < 1) {
      $('#password').after('<span class="error">This field is required</span>'); err = true;
    } else if (password.length < 8 || password.length > 20) {
      $('#password').after('<span class="error">Password length should be between 8 and 20</span>'); err = true;
    } else {
      var regEx = /.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@&$%&? "])./;
      var validPswd = regEx.test(password);
      if (!validPswd) {
        $('#password').after('<span class="error">Password must contain alphabets, one number and one special character.</span>'); err = true;
      }
    }

    if (!err) {
      window.location = 'calculator.html?username=' + username;
    }

    localStorage.setItem('username', username);
  });

  // page two
  const username = localStorage.getItem('username');
  $('#user').text(username);

  const isNumber = num => !isNaN(num);

  const validateInput = (num1, num2) => {
    if (num1.length < 1 || num2.length < 1) {
      $('#error-message').text('Please enter both the numbers.');
      return false;
    } else if (!isNumber(num1) || !isNumber(num2)) {
      $('#error-message').text('Please enter valid numbers.');
      return false;
    }
    $('#error-message').empty();
    return true;
  };

  const calculate = (num1, num2, operation) => {
    switch (operation) {
      case 'add':
        return num1 + num2;
      case 'subtract':
        return num1 - num2;
      case 'multiply':
        return num1 * num2;
      case 'divide':
        if (num2 === 0) {
          $('#error-message').text('Cannot divide by zero.');
          return null;
        }
        return num1 / num2;
    }
  };

  const performCalculation = operation => {
    const num1 = $('#num1').val();
    const num2 = $('#num2').val();
    if (!validateInput(num1, num2)) {
      return;
    }

    const result = calculate(+num1, +num2, operation);

    if (result !== null) {
      $('#result').text(result);
    }
  };

  $('#add-btn').click(() => performCalculation('add'));
  $('#subtract-btn').click(() => performCalculation('subtract'));
  $('#multiply-btn').click(() => performCalculation('multiply'));
  $('#divide-btn').click(() => performCalculation('divide'));
});          