    const ctx = document.getElementById('orderStatusChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Completed', 'Pending'],
            datasets: [{
                data: [1, 1], // ✅ Equal values → Half Completed, Half Pending
                backgroundColor: ['#4CAF50', '#FF5252'], // Green & Red
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false // Hide legend
                }
            }
        }
    });