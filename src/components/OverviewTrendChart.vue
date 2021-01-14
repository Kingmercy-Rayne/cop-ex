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
            label: '',
            data: [2, 1, 2, 5, 1, 2],
            fill: false,
            borderColor: '#9491d6',
            backgroundColor: '#9491d6',
            borderWidth: 2,
            borderJoinStyle: 'bevel',
            borderCapStyle: 'round',
            tension: 0.4,
            pointRadius: 1.5,
          },
          {
            label: '',
            data: [1, 4, 1, 0, 2, 0],
            fill: false,
            borderColor: '#f65758',
            backgroundColor: '#f65758',
            borderWidth: 2,
            borderJoinStyle: 'bevel',
            borderCapStyle: 'round',
            tension: 0.4,
            pointRadius: 1.5,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
                stepSize: 1,
                // fontColor: '#fff',
                fontSize: 11,
              },
              gridLines: {
                display: false,
                // drawBorder: false,
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
          position: 'bottom',
          align: 'center',
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
        layout: {
          padding: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          },
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
