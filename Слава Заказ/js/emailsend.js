"use strict"
document.addEventListener('DOMContentLoaded', function (){
	const form = document.getElementsByTagName('form');
	form.addEventListener('submit', formSend);

	async function formSend(e)
	{
		e.preventDefault();
		let error = formValidate(form);

		let formData = new FormData(form);
		const response = await fetch('js/script.php',{
			method:'POST',
			body: formData
		});
		if (response.ok)
		{
          let result = await response.json();
          alert(result.message);
          formPreview.innerHTML = '';
          form.reset(); 
		}
		else
		{
          alert("Ошибка");
		}
	}

	function formValidate(form)
	{
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for(let index = 0; index < formReq.length; index++)
		{
			const input = formReq[index];
            fornRemoveError(input);

		}
	}

	function formAddError(input){
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}

	function formRemoveError(input){
		input.parentElement.classList.add('_error');
		input.classList.remove('_error');
	}
})

/*$(document).ready(function () {
    $("form").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'js/script.php',
            data: formNm.serialize(),
            beforeSend: function () {
                // Вывод текста в процессе отправки
                $(formNm).html('<p style="text-align:center">Отправка...</p>');
            },
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html('<p style="text-align:center">'+data+'</p>');
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);
            }
        });
        return false;
    });
});*/