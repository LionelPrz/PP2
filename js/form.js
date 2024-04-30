        // lugarAbono = document.getElementById('lugarAbono'),
        // sitioCobro = document.getElementById('sitioCobro'),
        // planPromo = document.getElementById('planPromocional'),
        // planCustom = document.getElementById('planPersonalizado'),
        // pagoEfectivo = document.getElementById('pagoEfectivo'),
        // tipoPago = document.getElementById('metodoPago'),
        // tipoPlan = document.getElementById('opcionPlan'),
        // planFormulario = document.getElementById('selectPlan'),
        //  planContrato = document.getElementById('planContrato'),
    //No mostrar Tarjeta cuando se paga en efectivo
    // pagoEfectivo.addEventListener('click',()=>{
    //     pagoTarjeta.style.display = "none";
    //     sitioCobro.style.display = "block";
        //Desplegar Planes personalizados cuando se use el boton
    // tipoPlan.addEventListener('click',()=>{
    //     planFormulario.style.display="block";
    //         let custom = document.createElement('option');
    //         custom.innerText = localStorage.getItem('megas');
    //         tipoPlan.appendChild(custom);
    //     mostrarPago();
    // })
    //     mostrarSitioCobro();
    // });
const tarjeta = document.querySelector('#tarjeta'),
        btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
        formulario = document.querySelector('#formulario-tarjeta'),
        deshabilitarTarjeta = document.getElementById('derecha'),
        pagoTarjeta = document.getElementById('pagoTarjeta'),
        numeroTarjeta = document.querySelector('#tarjeta .numero'),
        nombreTarjeta = document.querySelector('#tarjeta .nombre'),
        logoMarca = document.querySelector('#logo-marca'),
        firma = document.querySelector('#tarjeta .firma p'),
        mesExpiracion = document.querySelector('#tarjeta .mes'),
        yearExpiracion = document.querySelector('#tarjeta .year'),
        ccvExpiracion = document.querySelector('#tarjeta .CCV'),
        nombreFormulario = document.getElementById('inputNombre'),
        apellidoFormulario = document.getElementById('inputApellido'),
        telefonoFormulario = document.getElementById('inputTelefono'),
        mainContent = document.getElementById('maincont'),
        textContent = document.querySelectorAll('.datos p'),
        loadPlan = document.getElementById('opcionPlan'),
        nightMode  = document.getElementById('btn-nightMode');

    mainContent
        noMostrarElementos()

    //Funcion para Deshabilitar Tarjeta y Lugar de pago
    function noMostrarElementos(){
            deshabilitarTarjeta.style.display ="none";
            sitioCobro.style.display ="none";
            // planFormulario.style.display="none";
            // tipoPago.style.display="none";
        }
    
    //Funcion para Agregar Metodo de pago
    function mostrarPago(){
        loadPlan.style.display = "block";
        // planContrato.style.display="none"

    }

    //Funcion para Agregar Tarjeta
    const mostrarTarjeta = () =>{
        deshabilitarTarjeta.style.display ="block";
        // pagoEfectivo.style.display = "none";
    }

    // Funcion Para voltear tarjeta
    const mostrarFrente = () =>{
        if(tarjeta.classList.contains('active')){
        tarjeta.classList.remove('active');
        }
    }

    //Desplegar Planes promocionales cuando se use el boton
      loadPlan.addEventListener('focus',()=>{
        cargaDatos();
      })

    //Funcion para generar la cargar los planes seleccionados

        function cargaDatos(){
            let final;
        
           a = localStorage.getItem('promos');
        //    b = JSON.stringify(localStorage.getItem('megas'));
           final = a;
            // if(final.values){
            //     final = b.textContent;
            //     console.log(final);
            // }

                switch (final) {    
                    case "promo1":
                            final = "Plan Estudiantil"
                        break;
                    case "promo2":
                            final = "Plan Familiar"
                        break;
                    case "promo3":
                            final = "Plan Empresarial"
                        break;
                    // case final.at[1]:
                    //     final = b;
                    //     break;
                }
            // }else{
            //     final= b;
            //     }
                let opciones = document.createElement('option');
                        opciones.value = final;
                        opciones.innerText = final;
                        console.log(final);
                    loadPlan.appendChild(opciones);
                mostrarPago();
    }

    //Mostrar Tarjeta cuando se usa su boton
    pagoTarjeta.addEventListener('click',()=>{
        mostrarTarjeta();
    });

    // Animacion de tarjeta 
    tarjeta.addEventListener('click', ()=>{
        tarjeta.classList.toggle('active');
        });

    // Boton del Formulario 
    btnAbrirFormulario.addEventListener('click',()=>{
        btnAbrirFormulario.classList.toggle('active');
            formulario.classList.toggle('active');
    });

    //Limpieza de la tarjeta

    function limpiarTarjeta(){ 
        mesExpiracion.textContent = valorInput='MM';
        yearExpiracion.textContent = valorInput='AA';
        numeroTarjeta.textContent = valorInput='#### #### #### ####';
        nombreTarjeta.textContent = valorInput='Jhon Doe';
        ccvExpiracion.textContent= '';
        firma.textContent = valorInput='';

    }

    const temaOscuro = ()=>{
        document.querySelector("body").setAttribute("data-bs-theme","dark");
        nightMode.removeAttribute("class","bi bi-toggle2-off");
        nightMode.setAttribute("class","bi bi-toggle2-on");
    }
    const temaClaro = ()=>{
        document.querySelector("body").setAttribute("data-bs-theme","light");
        nightMode.removeAttribute("class","bi bi-toggle2-on");
        nightMode.setAttribute("class","bi bi-toggle2-off");
    }
    
    const cambiarTema = ()=>{
        document.querySelector("body").getAttribute("data-bs-theme")==="light"?
        temaOscuro() : temaClaro() ;
    }
    
    nightMode.addEventListener('click',()=>{
        cambiarTema();
    });
    