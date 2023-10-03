document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey-form");
    const popup = document.getElementById("popup");
    const popupResults = document.getElementById("popup-results");
    const closePopup = document.getElementById("close-popup");
    const resetButton = document.getElementById("reset-button");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const gender = document.querySelectorAll('input[type="checkbox"]:checked');
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        // Validate form fields
        if (!firstName || !lastName || !dob || !country || gender.length === 0 || !profession || !email || !mobile) {
            alert("Please fill out all fields before submitting the form.");
            return;
        }

        // Build result string
        let resultString = `<strong>First Name:</strong> ${firstName}<br>`;
        resultString += `<strong>Last Name:</strong> ${lastName}<br>`;
        resultString += `<strong>Date of Birth:</strong> ${dob}<br>`;
        resultString += `<strong>Country:</strong> ${country}<br>`;
        resultString += "<strong>Gender:</strong> ";
        gender.forEach((g) => {
            resultString += `${g.nextSibling.textContent}, `;
        });
        resultString = resultString.slice(0, -2) + "<br>";
        resultString += `<strong>Profession:</strong> ${profession}<br>`;
        resultString += `<strong>Email:</strong> ${email}<br>`;
        resultString += `<strong>Mobile Number:</strong> ${mobile}<br>`;

        // Display results in the popup
        popupResults.innerHTML = resultString;
        popup.style.display = "block";
    });

    resetButton.addEventListener("click", function () {
        form.reset();
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
        form.reset();
    });
});
