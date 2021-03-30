$(document).ready(function () {
  var menuBtn = $('.header__menu-btn')
  menuBtn.on('click', function () {
    document.querySelector(".mobile__list").classList.toggle("mobile__list_visible")
  })


  var modalButton = $('.header__button');
  var modalButton2 = $('.mobile__button')
  var closeModalButton = $('.modal__close');
  var closeModalButton2 = $('.modal-2__close');
  modalButton.on("click", openModal);
  modalButton2.on("click", function () {
    var modalOverlay = $('.modal-2__overlay')
    var modalWindow = $('.modal-2__window')
    modalOverlay.addClass('modal-2__overlay_visible')
    modalWindow.addClass('modal-2__window_visible')
  });
  closeModalButton.on("click", closeModal);
  closeModalButton2.on("click",  closeModal2);

  function openModal() {
    var modalOverlay = $('.modal__overlay')
    var modalWindow = $('.modal__window')
    modalOverlay.addClass('modal__overlay_visible')
    modalWindow.addClass('modal__window_visible')
  };

  function closeModal2() {
    var modalOverlay = $('.modal-2__overlay')
    var modalWindow = $('.modal-2__window')
    $("body").removeClass("modal-open")
    modalOverlay.removeClass('modal-2__overlay_visible')
    modalWindow.removeClass('modal-2__window_visible')
  };

  function closeModal() {
    var modalOverlay = $('.modal__overlay')
    var modalWindow = $('.modal__window')
    $("body").removeClass("modal-open")
    modalOverlay.removeClass('modal__overlay_visible')
    modalWindow.removeClass('modal__window_visible')
  };


  document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 27:
          closeModal2();
          closeModal();
          break;
    }
  };

  $(document).on('click', function(e){
		if (!(
		($(e.target).parents('.modal__window').length)
		||	($(e.target).hasClass('modal__window'))
		||	($(e.target).hasClass('header__button')))
    ) {
			closeModal();
		}
  });
  
  $(document).on('click', function(e){
		if (!(
		($(e.target).parents('.modal-2__window').length)
		||	($(e.target).hasClass('modal-2__window'))
		||	($(e.target).hasClass('mobile__button')))
		) {
			closeModal2();
		}
  });
  

  $('.form').each(function() {
    $(this).validate({
    messages: {
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      },
    }
  }
  );
  })
});