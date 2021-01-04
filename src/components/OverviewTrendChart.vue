<script>
import { Line } from 'vue-chartjs';

// const { reactiveProp } = mixins;

export default {
  extends: Line,
  data() {
    return {
      rayne: 'rayne',
      chartData: {
        labels: [
          ['1st Sem', '2016/2017'],
          ['2nd Sem', ' 2016/2017'],
          ['1st Sem', ' 2017/2017'],
          ['2nd Sem', ' 2017/2018'],
          ['1st Sem', '2018/2019'],
          ['2nd Sem', '2019/2020'],
        ],
        datasets: [
          {
            label: 'COP',
            data: [2, 1, 2, 5, 4, 1],
            fill: false,
            borderColor: '#208c1e',
            backgroundColor: '#208c1e',
            borderWidth: 1,
            borderJoinStyle: 'bevel',
            borderCapStyle: 'round',
            tension: 0.5,
            pointRadius: 1.5,
          },
          {
            label: 'XP',
            data: [1, 4, 1, 0, 2, 0],
            fill: false,
            borderColor: '#fb6a48',
            backgroundColor: '#fb6a48',
            borderWidth: 1,
            borderJoinStyle: 'bevel',
            borderCapStyle: 'round',
            tension: 0.5,
            pointRadius: 1.5,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 1,
                // fontColor: '#fff',
                fontSize: 11,
              },
              gridLines: {
                display: false,
              },

              //   display: false,
              type: 'linear',
            },
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: false,
                // stepSize: 1,
                // fontColor: '',
                fontSize: 11,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: true,
          labels: {
            boxWidth: 10,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        tooltip: {
          mode: 'nearest',
          intersect: false,
          yPadding: 100,
          xPadding: 10,
          borderWidth: 40,
          //   usePointStyle: true,
        },
      },
    };
  },
  // mixins: [reactiveProp],
  // props: ['options'],
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
