document.getElementById('100').addEventListener('click', function() {
    incrementCounter(100);
  });
  
  document.getElementById('500').addEventListener('click', function() {
    incrementCounter(500);
  });
  
  document.getElementById('1000').addEventListener('click', function() {
    incrementCounter(1000);
  });
  
  var counter = 0;
  
  function incrementCounter(value) {
    counter += value;
    document.getElementById('money').innerText = counter;
  }
  

document.getElementById('mono_pay').addEventListener('click', function() {
    var usernameInput = document.getElementById('username').value;
    var commentInput = document.getElementById('comment').value;
    var moneyInput = document.getElementById('money').innerText;
    console.log('Поповнення через mono від: '+ usernameInput + ' На суму: ' + moneyInput + ' Коментар: ' + commentInput);
    document.getElementById('username').value = '';
    document.getElementById('comment').value = '';
    document.getElementById('money').innerText = '0';
    counter = 0;
})

document.getElementById('google_pay').addEventListener('click', function() {
    var usernameInput = document.getElementById('username').value;
    var commentInput = document.getElementById('comment').value;
    var moneyInput = document.getElementById('money').innerText;
    console.log('Поповнення через Google Pay від: '+ usernameInput + ' На суму: ' + moneyInput + ' Коментар: ' + commentInput);
    document.getElementById('username').value = '';
    document.getElementById('comment').value = '';
    document.getElementById('money').innerText = '0';
    counter = 0;
})

document.getElementById('pay').addEventListener('click', function() {
    var usernameInput = document.getElementById('username').value;
    var commentInput = document.getElementById('comment').value;
    var moneyInput = document.getElementById('money').innerText;
    console.log('Поповнення від: '+ usernameInput + ' На суму: ' + moneyInput + ' Коментар: ' + commentInput);
    document.getElementById('username').value = '';
    document.getElementById('comment').value = '';
    document.getElementById('money').innerText = '0';
    counter = 0;
})