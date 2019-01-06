function chartDraw(mychart){
      myChart_1 = new Chart(document.getElementById(mychart), {
        type: "bar",
        data: {
          labels: ["アンケート結果"],
          datasets: [
            { label: "A", data: bar_List[0], backgroundColor: "rgba(244, 143, 177, 0.6)" },
            { label: "B", data: bar_List[1], backgroundColor: "rgba(255, 235, 59, 0.6)" },
            { label: "C", data: bar_List[2], backgroundColor: "rgba(100, 181, 246, 0.6)" },
            { label: "D", data: bar_List[3], backgroundColor: "rgba(50, 81, 246, 0.6)" }
          ]
        },
options: {
animation : false,
  scales: {
    yAxes: [{
      ticks: {
        suggestedMax: 100,
        suggestedMin: 0,
        stepSize: 10,
    　　　　}
  　　　　}]
  }
}})}
