Template.appSeasonalityChart.rendered = function() {
	var data  = this.data;
	var ctx = $('.chart').get(0).getContext("2d");
	
	var seasonalityCHart = new Chart(ctx).Bar({
		labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: data.seasonality
        }
    ]
	}, {
		animation: false,
		responsive: true,
		showTooltips: false
	});

}