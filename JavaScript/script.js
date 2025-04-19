
// Function to handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const contact = document.getElementById('contact').value;
            const address = document.getElementById('address').value;

            // Create user object
            const user = {
                name: name,
                email: email,
                contact: contact,
                address: address
            };

            // Get existing users from localStorage or initialize empty array
            let users = JSON.parse(localStorage.getItem('users')) || [];

            // Add new user to array
            users.push(user);

            // Save updated users array to localStorage
            localStorage.setItem('users', JSON.stringify(users));

            // Reset the form
            registrationForm.reset();

            // Show success message
            alert('User registered successfully!');

            // Redirect to view page (optional)
            // window.location.href = 'view.html';
        });
    }
});

// Function to display users in the table
function displayUsers() {
    const userTableBody = document.getElementById('userTableBody');

    if (userTableBody) {
        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Clear existing table content
        userTableBody.innerHTML = '';

        // Check if there are any users
        if (users.length === 0) {
            const row = document.createElement('tr');
            row.innerHTML = '<td colspan="4" class="text-center">No users registered yet</td>';
            userTableBody.appendChild(row);
        } else {
            // Add each user to the table
            users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.contact}</td>
                    <td>${user.address}</td>
                `;
                userTableBody.appendChild(row);
            });
        }
    }
}

// Call displayUsers if we're on the view page
if (window.location.pathname.includes('view.html')) {
    displayUsers();
}