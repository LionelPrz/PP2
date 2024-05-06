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
        pricePlan = document.getElementById('finalPrice'),
        nightMode  = document.getElementById('btn-nightMode');

    mainContent
        noMostrarElementos()

    //Funcion para Deshabilitar Tarjeta y Lugar de pago
    function noMostrarElementos(){
            deshabilitarTarjeta.style.display ="none";
            sitioCobro.style.display ="none";
        }
    
    //Funcion para Agregar Metodo de pago
    function mostrarPago(){
        loadPlan.style.display = "block";

    }

    //Funcion para Agregar Tarjeta
    const mostrarTarjeta = () =>{
        deshabilitarTarjeta.style.display ="block";
    }

    // Funcion Para voltear tarjeta
    const mostrarFrente = () =>{
        if(tarjeta.classList.contains('active')){
        tarjeta.classList.remove('active');
        }
    }

    //Desplegar Planes promocionales cuando se use el boton
      pricePlan,loadPlan.addEventListener('focus',()=>{
        cargaDatos();
      })

    //Funcion para generar la cargar los planes seleccionados

        function cargaDatos(){
            let final;
            let b;
        
           final = localStorage.getItem('promos');

                switch (final) {    
                    case "card1":
                            final = "Plan Empresarial"
                            b = "$6405"
                        break;
                    case "card2":
                            final = "Plan Familiar"
                            b = "$3655"
                        break;
                    case "card3":
                            final = "Plan Estudiantil"
                            b = "$4755"
                        break;
                        case "card4":
                            final = "Plan Gaming"
                            b = "$5855"
                        break;
                }
                let opciones = document.createElement('option');
                        opciones.value = final;
                        opciones.innerText = final;
                        console.log(final);
                    loadPlan.appendChild(opciones);
                let precios = document.createElement('option');
                        precios.value = b;
                        precios.innerText = b;
                        console.log(b);
                    pricePlan.appendChild(precios);
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
    