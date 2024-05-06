const d = document;


function aceptar(){
  Swal.fire({
    title: '<strong>Confirmar Redireccion</strong>',
    icon: 'question',
    html:
    '¿Quiere ser redireccionado a la seccion de pagos?',
    showCloseButton: false,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<a href="/html/form-pago.html" target="_blanck"><b>Confirmar</b></a>',
    cancelButtonText:
      '<b>Cancelar</b>',
  })
  }
