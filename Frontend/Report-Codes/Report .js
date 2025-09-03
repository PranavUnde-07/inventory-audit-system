        // Tailwind CSS Configuration
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
        };

        // Helper function to generate random data for charts
        function randomData(count, max) {
            return Array.from({ length: count }, () => Math.floor(Math.random() * max));
        }

        // Main script execution after the DOM is fully loaded
        document.addEventListener('DOMContentLoaded', function () {
            
            // --- Live Time Functionality ---
            const timeElement = document.getElementById('live-time');
            function updateTime() {
                const now = new Date();
                const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
                if(timeElement) {
                    timeElement.textContent = now.toLocaleDateString('en-US', options).replace(',', '');
                }
            }
            updateTime();
                setInterval(updateTime, 60000); // Update every minute is enough
            });