      tailwind.config = {
        theme: {
          extend: {
            colors: {
              'custom-purple': '#6D5BD0',
              'custom-light-purple': '#F0EEFF',
              'custom-background': '#F8F9FE',
              'custom-gray': '#A0AEC0',
              'custom-dark-gray': '#4A5568',
              'custom-light-gray': '#F7FAFC',
              'custom-green': '#48BB78',
              'custom-red': '#F56565',
            },
            fontFamily: {
              inter: ['Inter', 'sans-serif'],
            },
          }
        }
      }
        // Get the necessary elements
        const dropdownButton = document.getElementById('customerTypeBtn');
        const dropdownMenu = document.getElementById('dropdownMenu');
        const selectedCustomerType = document.getElementById('selectedCustomerType');
        const dropdownItems = document.querySelectorAll('.dropdown-item');

        // Toggle dropdown menu on button click
        dropdownButton.addEventListener('click', () => {
            dropdownMenu.classList.toggle('hidden');
        });

        // Handle dropdown item selection
        dropdownItems.forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior
                selectedCustomerType.textContent = item.textContent; // Update button text
                dropdownMenu.classList.add('hidden'); // Hide the dropdown
            });
        });

        // Close dropdown when clicking outside of it
        window.addEventListener('click', (event) => {
            if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.add('hidden');
            }
        });

        