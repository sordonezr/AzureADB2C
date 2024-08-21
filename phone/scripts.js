// Función para obtener el valor de un parámetro específico de la URL
function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Obtener el valor del parámetro "phone"
const phoneValue = getParameterByName('phone');

// Verificar periódicamente si el campo de entrada está disponible
const intervalId = setInterval(function () {
    const phoneInput = document.getElementById('nationalNumber');

    if (phoneInput && phoneValue) {
        phoneInput.value = phoneValue;

        // Detener la verificación una vez que se ha encontrado el campo y asignado el valor
        clearInterval(intervalId);

        // Ejecutar automáticamente el botón de continuar
        const continueButton = document.getElementById('continue');
        if (continueButton) {
            continueButton.click(); // Disparar el clic en el botón
        }
    }
}, 100); // Verificar cada 100ms

// Mapeo de acciones a funciones correspondientes
const actionHandlers = {
    remove: (element) => element.remove(),
    replace: (element, action) => {
        element.innerHTML = element.innerHTML.replace(action.oldText, action.newText);
    },
    add: (element, action) => {
        element.insertAdjacentHTML(action.position || 'beforeend', action.newContent);
    },
    move: (element, action) => {
        const target = document.querySelector(action.targetSelector);
        if (target) target.insertAdjacentElement('afterend', element);
    }
};

// Función principal para procesar los elementos
function processElements(actions) {
    actions.forEach(({ type, selector, text, ...action }) => {
        document.querySelectorAll(selector).forEach(element => {
            if (type === 'remove' && text && element.textContent.trim() !== text) return;
            actionHandlers[type]?.(element, action);
        });
    });
}

// Ejemplo de uso para remover el elemento
var intervalIdnew = setInterval(function () {
    processElements([
        { type: 'replace', selector: 'div.intro > p', text: 'Please provide the following details.', oldText: 'Please provide the following details.', newText: 'Ingresa el código de verificación' },
        { type: 'remove', selector: 'label#verificationCode_label', text: 'Verification Code' },
        { type: 'remove', selector: 'a.helpLink.tiny', text: 'What is this?' },
        { type: 'remove', selector: 'button#cancel', text: 'Cancel' },
        { type: 'replace', selector: 'button#continue', oldText: 'Continue', newText: 'Validar código' }, // Cambiar el texto del botón
    ]);
    clearInterval(intervalIdnew); // Detener el intervalo una vez que se haya ejecutado la operación
}, 100);

