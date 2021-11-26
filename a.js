const ctx = document.getElementById('myChart').getContext('2d');
$.ajax({
    url: 'https://raw.githubusercontent.com/goooooouwa/out/master/coolshell/count.json',
    type: 'get',
    success: function (response) {
        const domains = JSON.parse(response);
        const filteredResult = domains.filter(d => d.count < 103 && d.count >= 10);
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: filteredResult.map(r => r.domain),
                datasets: [{
                    label: '# of domain count',
                    data: filteredResult.map(r => r.count),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});