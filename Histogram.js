var ctx = document.getElementById('chart').getContext('2d');

var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Java", "Spring", "MySQL", "Python", "WebＣrawler"],
        datasets: [{
            label: '# Ability value',
            data: [85 , 40 , 50 , 60 , 70 , 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    }
});