The Reformers Nation — Registration Form

A registration form built for The Reformers Nation, a Christian online community, to collect member details ahead of joining. Built with plain HTML, CSS, and JavaScript, no frameworks or libraries.

Live demo: https://damilola-dev1.github.io/reformers-nation-registration/

Problem Statement

Most community registrations, especially in church and faith-based settings, still rely on Google Forms or scattered WhatsApp messages to collect member details. This approach is rarely well-coordinated: responses are inconsistent, hard to organize, and easy to lose track of once numbers grow. This project takes a different approach, a purpose-built, validated web form with a dedicated backend, so data is collected consistently and cleanly from the start. The same approach can be adapted for other sectors in the future wherever there's a need to manage structured registration.

About

This form collects personal information, contact details, salvation and faith background, community interest, and a signed commitment agreement from anyone registering with The Reformers Nation. It was built as a real project for the community, not a tutorial exercise, and doubles as practice for core front-end skills, DOM manipulation, form validation, and working with a live backend.

Features

1. Sectioned, two-column responsive layout (Personal Information, Contact Details, Salvation Details, Community Details, Commitment, Terms and Conditions)
2. Live field-by-field validation on change, with visual feedback and inline error messages
3. Full validation on submit, covering text fields, regex-matched fields (email, phone), dropdowns, radio button groups, and a required checkbox
4. A popup confirmation modal on successful submission
5. Real backend integration via Formspree, submissions are emailed automatically, no server code required
6. Mobile-responsive, including a fix for the iOS Safari input auto-zoom issue

Built With

- HTML5
- CSS3 (Grid layout, no framework)
- Vanilla JavaScript (no libraries)
- [Formspree](https://formspree.io) for form submission handling

What This Demonstrates

- Reading and validating form input values (text, select, radio, checkbox, textarea)
- Regular expressions for email and phone number validation
- Working with radio button groups via `querySelectorAll` and `Array.from`
- Event delegation with a single `change` listener on the form
- Preventing default form submission and sending data with `fetch` and `FormData`
- Building and controlling a modal dialog with vanilla JavaScript
- Responsive CSS with Grid and media queries

Running Locally
Clone the repository and open `index.html` in a browser:

```
git clone https://github.com/Damilola-Dev1/reformers-nation-registration.git
cd reformers-nation-registration
```

Then open `index.html` directly, or serve it with any static server.

Author
Built by [Damilola-Dev1](https://github.com/Damilola-Dev1), a self-taught front-end developer, as part of ongoing front-end practice and real work for The Reformers Nation community.
