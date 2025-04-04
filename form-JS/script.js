
const form = document.getElementById("form");
const formCorreo = /.+@.+\..+/;
const formOrderNo = /2024\d{6}/;
const formProdCode = /..\d{2}-.\d{3}-..\d/;

function isValid(validSubmit){
  for(let atrb in validSubmit){
    if(!validSubmit[atrb])
      return false;
  }
  return true;
}

function validateForm() {

    // Creamos un objeto para almacenar los resultados de la validación
    let validSubmit = {
        "full-name": true,
        email: true,
        "order-no": true,
        "product-code": true,
        quantity: true,
        "complaints-group": true,
        "complaint-description": true,
        "solutions-group": true,
        "solution-description": true
    };

    // Obtener valores de los campos
    const fullNameDoc = document.getElementById("full-name").value.trim();
    const emailDoc = document.getElementById("email").value.trim();
    const orderNoDoc = document.getElementById("order-no").value.trim();
    const productCodeDoc = document.getElementById("product-code").value.trim();
    const quantityDoc = document.getElementById("quantity").value;

    // Validaciones para los campos básicos
    if (fullNameDoc === "") validSubmit["full-name"] = false;
    if (!formCorreo.test(emailDoc)) validSubmit.email = false;
    if (!formOrderNo.test(orderNoDoc)) validSubmit["order-no"] = false;
    if (!formProdCode.test(productCodeDoc)) validSubmit["product-code"] = false;
    if (quantityDoc === "" || quantityDoc <= 0) validSubmit.quantity = false;

    // Validación para el grupo de checkboxes
    const complaintsChecked = document.querySelectorAll("#complaints-group input[type=checkbox]:checked");
    if (complaintsChecked.length === 0) {
        validSubmit["complaints-group"] = false;
    }

    // Validación para el campo de descripción si la opción "Other" está seleccionada en el grupo de quejas
    const otherComplaintChecked = document.getElementById("other-complaint").checked;
    const complaintDescriptionDoc = document.getElementById("complaint-description").value.trim();
    if (otherComplaintChecked && complaintDescriptionDoc.length < 20) {
        validSubmit["complaint-description"] = false;
    }

    // Validación para los botones de radio en el grupo de soluciones
    const solutionSelected = document.querySelector("#solutions-group input[type=radio]:checked");
    if (!solutionSelected) {
        validSubmit["solutions-group"] = false;
    }

    // Validación para el campo de descripción de la solución si la opción "Other" está seleccionada en el grupo de soluciones
    const otherSolutionChecked = document.getElementById("other-solution").checked;
    const solutionDescriptionDoc = document.getElementById("solution-description").value.trim();
    if (otherSolutionChecked && solutionDescriptionDoc.length < 20) {
        validSubmit["solution-description"] = false;
    }

    // Devuelve el objeto validSubmit
    return validSubmit;
}

// Agregar evento para cambiar el color del borde de #full-name
const fullNameInput = document.getElementById("full-name");
fullNameInput.addEventListener("change", function() {
    // Obtener el valor del campo y verificar si es válido
    const fullNameDoc = fullNameInput.value.trim();

    // Cambiar el borde dependiendo de la validez
    if (fullNameDoc === "") {
        fullNameInput.style.borderColor = "red"; // Rojo si está vacío
    } else {
        fullNameInput.style.borderColor = "green"; // Verde si tiene valor
    }
});

// Para el resto de elementos igual
const emailInput = document.getElementById("email");
emailInput.addEventListener("change", function() {
    const email = emailInput.value.trim();

    if (!formCorreo.test(email)) {
        emailInput.style.borderColor = "red";
    } else {
        emailInput.style.borderColor = "green";
    }
})


const orderNoInput = document.getElementById("order-no");
orderNoInput.addEventListener("change", function() {
    const orderNo = orderNoInput.value.trim();

    if (!formOrderNo.test(orderNo)) {
        orderNoInput.style.borderColor = "red";
    } else {
        orderNoInput.style.borderColor = "green";
    }
})

const productCodeInput = document.getElementById("product-code");
productCodeInput.addEventListener("change", function() {
    const productCode = productCodeInput.value.trim();

    if (!formProdCode.test(productCode)) {
        productCodeInput.style.borderColor = "red";
    } else {
        productCodeInput.style.borderColor = "green";
    }
})

const quantityInput = document.getElementById("quantity");
quantityInput.addEventListener("change", function() {
    const quantity = quantityInput.value.trim();

    if (quantity === "" || quantity <= 0) {
        quantityInput.style.borderColor = "red";
    } else {
        quantityInput.style.borderColor = "green";
    }
})

const complGroupInput = document.getElementById("complaints-group");
complGroupInput.addEventListener("change", function() {
    const complGroup = document.querySelectorAll("#complaints-group input[type=checkbox]:checked");
    if (complGroup.length === 0) {
        complGroupInput.style.borderColor = "red";
    } else {
        complGroupInput.style.borderColor = "green";
    }
})

const complDescrpInput = document.getElementById("complaint-description");
complDescrpInput.addEventListener("change", function() {
    const otherComplaintChecked = document.getElementById("other-complaint").checked;
    const complDescrp = complDescrpInput.value.trim();
    if (otherComplaintChecked && complDescrp.length < 20) {
        complDescrpInput.style.borderColor = "red";
    } else {
        complDescrpInput.style.borderColor = "green";
    }
})

const solGroupInput = document.getElementById("solutions-group");
solGroupInput.addEventListener("change", function() {
    const solGroup = document.querySelectorAll("#solutions-group input[type=radio]:checked");
    if (solGroup.length === 0) {
        solGroupInput.style.borderColor = "red";
    } else {
        solGroupInput.style.borderColor = "green";
    }
})

const solDescrpInput = document.getElementById("solution-description");
solDescrpInput.addEventListener("change", function() {
    const otherSolutionChecked = document.getElementById("other-solution").checked;
    const solDescrp = solDescrpInput.value.trim();
    if (otherSolutionChecked && solDescrp.length < 20) {
        solDescrpInput.style.borderColor = "red";
    } else {
        solDescrpInput.style.borderColor = "green";
    }
})

// Modificar el event listener para usar validateForm correctamente
form.addEventListener("submit", function (event) {
    const valid = isValid(validateForm());
    if(valid)
      form.submit();
    else
      alert("There are errors in the form. Please check your inputs.")
});