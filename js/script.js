const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.progress__item-number'),
      lines = document.querySelectorAll('.progress__item-load span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

const pageUp = document.querySelector('.pageup');

$(window).scroll(function() {
    if  ($(this).scrollTop() > 800) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
  });

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);
      let formData = new FormData(form);
      if (error === 0) {
          form.classList.add('_sending');
          let response = await fetch('sendmail.php', {
              method: 'POST',
              body: formData,
              headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
          });
          if (response.ok) {
              let result = await response.json();
              alert('Спасибо, я обязтельно свяжусь с вами!');
              form.reset();
              form.classList.remove('_sending');
          }
          else {
            alert('Ошибка!');
          }
      } else {
          alert('Заполните обязательные поля');
          form.classList.remove('_sending');
      }
  }

  function formValidate(form) {
      let error= 0;
      let formReq = document.querySelectorAll('._req');

      for (let index = 0; index < formReq.length; index++) {
          const input = formReq[index];
          formRemoveError(input);

          if(input.classList.contains('_email')) {
              if (emailtest(input)) {
                  formAddError(input);
                  error++;
              }
          } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
              formAddError(input);
              error++;
          } else {
              if (input.value === '') {
                  formAddError(input);
                  error++;
              }
          }
      }
      return error;
  }

  function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
  }
  function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
  }
  function emailtest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});