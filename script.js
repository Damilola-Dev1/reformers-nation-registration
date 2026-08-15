const form = document.getElementById("registration-form");

const referralSelect = document.getElementById("referral");
const referralOtherRow = document.getElementById("referral-other-row");
const referralOtherField = document.getElementById("referral-other");

function toggleReferralOther() {
  const showOther = referralSelect.value === "other";
  referralOtherRow.classList.toggle("hidden", !showOther);
  referralOtherField.required = showOther;

  if (!showOther) {
    referralOtherField.value = "";
    referralOtherField.classList.remove("invalid", "valid");
    document.getElementById("referral-other-error").textContent = "";
  }
}

referralSelect.addEventListener("change", toggleReferralOther);
toggleReferralOther();

function validateForm() {
  const fullName = document.getElementById("full-name").value.trim();
  const isFullNameValid = fullName.length > 0;

  const dob = document.getElementById("dob").value;
  const isDobValid = dob !== "";

  const gender = document.getElementById("gender").value;
  const isGenderValid = gender !== "";

  const location = document.getElementById("location").value.trim();
  const locationRegex = /^[A-Za-z\s,]+$/;
  const isLocationValid = location.length === 0 || locationRegex.test(location);

  const maritalstatus = document.getElementById("maritalstatus").value;
  const isMaritalStatusValid = maritalstatus !== "";

  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  const isEmailValid = emailRegex.test(email);

  const phoneNumber = document.getElementById("phone").value.trim();
  const phoneRegex = /^(?:\+?234|0)[789][01]\d{8}$/;
  const isPhoneNumberValid = phoneRegex.test(phoneNumber);

  const bornAgainRadios = document.querySelectorAll('input[name="born-again"]');
  const isBornAgainValid = Array.from(bornAgainRadios).some(
    (radio) => radio.checked
  );

  const baptismRadios = document.querySelectorAll('input[name="baptism"]');
  const isBaptismValid = Array.from(baptismRadios).some(
    (radio) => radio.checked
  );

  const referral = document.getElementById("referral").value;
  const isReferralValid = referral !== "";

  const referralOther = document.getElementById("referral-other").value.trim();
  const isReferralOtherValid = referral !== "other" || referralOther.length > 0;

  const expectations = document.getElementById("expectations").value.trim();
  const isExpectationsValid = expectations.length > 0;

  const commitmentSignature = document
    .getElementById("commitment-signature")
    .value.trim();
  const isCommitmentSignatureValid = commitmentSignature.length > 0;

  const terms = document.getElementById("terms").checked;
  const isTermsValid = terms === true;

  return {
    "full-name": isFullNameValid,
    dob: isDobValid,
    gender: isGenderValid,
    location: isLocationValid,
    maritalstatus: isMaritalStatusValid,
    email: isEmailValid,
    phone: isPhoneNumberValid,
    "born-again": isBornAgainValid,
    baptism: isBaptismValid,
    referral: isReferralValid,
    "referral-other": isReferralOtherValid,
    expectations: isExpectationsValid,
    "commitment-signature": isCommitmentSignatureValid,
    terms: isTermsValid,
  };
}

const isValid = (validationObject) => {
  return Object.values(validationObject).every((value) => value === true);
};

const getFieldElements = () => {
  return {
    "full-name": document.getElementById("full-name"),
    dob: document.getElementById("dob"),
    gender: document.getElementById("gender"),
    location: document.getElementById("location"),
    maritalstatus: document.getElementById("maritalstatus"),
    email: document.getElementById("email"),
    phone: document.getElementById("phone"),
    "born-again": document.getElementById("born-again-group"),
    baptism: document.getElementById("baptism-group"),
    referral: document.getElementById("referral"),
    "referral-other": document.getElementById("referral-other"),
    expectations: document.getElementById("expectations"),
    "commitment-signature": document.getElementById("commitment-signature"),
    terms: document.getElementById("terms"),
  };
};

const errorMessages = {
  "full-name": "Full name is required.",
  dob: "Please select your date of birth.",
  gender: "Please select your gender.",
  location: "Location can only contain letters, spaces, and commas.",
  maritalstatus: "Please select your marital status.",
  email: "Please enter a valid email address.",
  phone: "Please enter a valid phone number.",
  "born-again": "Please select an option.",
  baptism: "Please select an option.",
  referral: "Please select how you heard about us.",
  "referral-other": "Please tell us who referred you or how you found us.",
  expectations: "Please share your expectations.",
  "commitment-signature": "Please sign with your full name.",
  terms: "You must agree to the terms and conditions.",
};

const getErrorElements = () => {
  return {
    "full-name": document.getElementById("full-name-error"),
    dob: document.getElementById("dob-error"),
    gender: document.getElementById("gender-error"),
    location: document.getElementById("location-error"),
    maritalstatus: document.getElementById("maritalstatus-error"),
    email: document.getElementById("email-error"),
    phone: document.getElementById("phone-error"),
    "born-again": document.getElementById("born-again-error"),
    baptism: document.getElementById("baptism-error"),
    referral: document.getElementById("referral-error"),
    "referral-other": document.getElementById("referral-other-error"),
    expectations: document.getElementById("expectations-error"),
    "commitment-signature": document.getElementById(
      "commitment-signature-error"
    ),
    terms: document.getElementById("terms-error"),
  };
};

form.addEventListener("change", (event) => {
  const validationObject = validateForm();
  const fieldElement = getFieldElements();
  const errorElement = getErrorElements();

  const applyResult = (key) => {
    fieldElement[key].classList.toggle("invalid", !validationObject[key]);
    fieldElement[key].classList.toggle("valid", validationObject[key]);
    errorElement[key].textContent = validationObject[key]
      ? ""
      : errorMessages[key];
  };

  if (event.target.name === "born-again") {
    applyResult("born-again");
  } else if (event.target.name === "baptism") {
    applyResult("baptism");
  } else {
    const key = event.target.id;
    if (fieldElement[key]) {
      applyResult(key);
    }
  }
});

const successModal = document.getElementById("success-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");

const openModal = () => {
  successModal.classList.add("show");
};

const closeModal = () => {
  successModal.classList.remove("show");
};

modalCloseBtn.addEventListener("click", closeModal);

successModal.addEventListener("click", (event) => {
  if (event.target === successModal) {
    closeModal();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const validationObject = validateForm();
  const fieldElement = getFieldElements();
  const errorElement = getErrorElements();
  const formIsValid = isValid(validationObject);

  for (const key of Object.keys(fieldElement)) {
    fieldElement[key].classList.toggle("invalid", !validationObject[key]);
    fieldElement[key].classList.toggle("valid", validationObject[key]);
    errorElement[key].textContent = validationObject[key]
      ? ""
      : errorMessages[key];
  }

  const messageBox = document.getElementById("message-box");

  if (!formIsValid) {
    messageBox.textContent = "Please fix the errors before submitting.";
    messageBox.style.color = "red";
    return;
  }

  messageBox.textContent = "";

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        form.reset();
        openModal();
      } else {
        messageBox.textContent = "Something went wrong. Please try again.";
        messageBox.style.color = "red";
      }
    })
    .catch(() => {
      messageBox.textContent = "Something went wrong. Please try again.";
      messageBox.style.color = "red";
    });
});
