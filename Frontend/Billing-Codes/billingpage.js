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
        const products = [
    { name: 'Harpic', mrp: 499.00, qty: 5, rate: 399.00 },
    { name: 'Banana chips', mrp: 150.00, qty: 3, rate: 120.00 },
    { name: 'Coffee', mrp: 850.00, qty: 1, rate: 800.00 },
    { name: 'Coca Cola', mrp: 45.00, qty: 12, rate: 42.00 },
    { name: 'Tea powder', mrp: 250.00, qty: 2, rate: 225.00 },
    { name: 'Milk', mrp: 60.00, qty: 4, rate: 58.00 },
    { name: 'Bread', mrp: 40.00, qty: 2, rate: 40.00 },
    { name: 'Butter', mrp: 120.00, qty: 1, rate: 110.00 },
    { name: 'Cheese', mrp: 300.00, qty: 2, rate: 280.00 },
    { name: 'Biscuits', mrp: 50.00, qty: 6, rate: 45.00 },                                                                                                 
   ];

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

        