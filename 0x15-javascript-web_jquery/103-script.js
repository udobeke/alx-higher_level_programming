$(document).ready(function () {
  $('#btn_translate').click(function () {
    const langCode = $('#language_code').val();
    $.get(`https://www.fourtonfish.com/hellosalut/?lang=${langCode}`, function (data) {
      console.log(data.keyCode);
      $('#hello').text(data.hello);
    });
  });

  $('#language_code').keypress(function (event) {
    if (event.keyCode === 13) {
      $('#btn_translate').click();
    }
  });
});
