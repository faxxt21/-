const form = document.querySelector("form");
    const emailInput = document.querySelector('input[type="email"]');
    const submitBtn = document.querySelector('button[type="submit"]');
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const emailValue = emailInput.value.trim();
            if (emailValue.includes("@") && emailValue.includes(".")) {
                alert(`Email "${emailValue}" пройшов перевірку.`);
                emailInput.value = "";
                emailInput.classList.remove("is-invalid");
                emailInput.classList.add("is-valid");
            } else {
                alert("Помилка. Введіть коректний Email.");
                emailInput.classList.add("is-invalid");
            }
        });
    }
