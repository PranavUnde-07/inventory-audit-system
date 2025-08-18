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
      document.addEventListener('DOMContentLoaded', function () {
            // --- Live Time Functionality ---
            const timeElement = document.getElementById('live-time');
            function updateTime() {
                const now = new Date();
                const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
                timeElement.textContent = now.toLocaleDateString('en-US', options).replace(',', '');
            }
            updateTime();
            setInterval(updateTime, 1000);

            // --- Main Content View Switching ---
            const dashboardView = document.getElementById('dashboard-view');
            const allOrdersView = document.getElementById('all-orders-view');
            const seeAllOrdersBtn = document.getElementById('see-all-orders-btn');
            const backToDashboardBtns = document.querySelectorAll('.back-to-dashboard-btn');

            seeAllOrdersBtn.addEventListener('click', () => {
                dashboardView.classList.add('hidden');
                allOrdersView.classList.remove('hidden');
                allOrdersView.classList.add('flex');
            });

            backToDashboardBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    allOrdersView.classList.add('hidden');
                    allOrdersView.classList.remove('flex');
                    dashboardView.classList.remove('hidden');
                });
            });

            // --- Right Sidebar View Switching ---
            const summaryCardsContainer = document.getElementById('summary-cards-container');
            const allDuesView = document.getElementById('all-dues-view');
            const allStatusView = document.getElementById('all-status-view');
            const seeAllDuesBtn = document.getElementById('see-all-dues-btn');
            const seeAllStatusBtn = document.getElementById('see-all-status-btn');
            const backToSummaryBtns = document.querySelectorAll('.back-to-summary-btn');

            seeAllDuesBtn.addEventListener('click', () => {
                summaryCardsContainer.classList.add('hidden');
                allDuesView.classList.remove('hidden');
                allDuesView.classList.add('flex');
            });

            seeAllStatusBtn.addEventListener('click', () => {
                summaryCardsContainer.classList.add('hidden');
                allStatusView.classList.remove('hidden');
                allStatusView.classList.add('flex');
            });

            backToSummaryBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    allDuesView.classList.add('hidden');
                    allDuesView.classList.remove('flex');
                    allStatusView.classList.add('hidden');
                    allStatusView.classList.remove('flex');
                    summaryCardsContainer.classList.remove('hidden');
                });
            });
        });
        // Chart.js Configurations
function randomData(count, max) {
    return Array.from({ length: count }, () => Math.floor(Math.random() * max));
}

document.addEventListener('DOMContentLoaded', function () {
    // Finance Flow Chart
    new Chart(document.getElementById('financeFlowChart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Finance Flow',
                data: randomData(7, 5000),
                borderColor: '#6D5BD0',
                backgroundColor: 'rgba(109, 91, 208, 0.2)',
                fill: true,
                tension: 0.3
            }]
        },
       options: { 
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } }
}

    });

    // Total Order Chart
    new Chart(document.getElementById('totalOrderChart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Orders',
                data: randomData(7, 300),
                borderColor: '#48BB78',
                backgroundColor: 'rgba(72, 187, 120, 0.2)',
                fill: true,
                tension: 0.3
            }]
        },
       options: { 
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } }
}

    });

    // Category Doughnut Chart
    new Chart(document.getElementById('categoryChart'), {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [40, 35, 25],
                backgroundColor: ['#3B82F6', '#8B5CF6', '#D1D5DB'],
                borderWidth: 1
            }]
        },
        options: { 
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%'
}

    });

    // Order Status Doughnut Chart
    new Chart(document.getElementById('statusChart'), {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [27, 3],
                backgroundColor: ['#48BB78', '#F6AD55',],
                borderWidth: 1
            }]
        },
        options: { 
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%'
}

    });
});