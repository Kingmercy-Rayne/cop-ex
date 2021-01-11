<script>
import { Doughnut } from 'vue-chartjs';

export default {
  extends: Doughnut,
  data() {
    return {
      chartData: {
        // labels: ['Babol', 'Cabanatuan', 'Daegu', 'Jerusalem'],
        datasets: [
          {
            borderWidth: 1,
            borderColor: ['rgba(255,99,132,1)', 'rgba(75, 192, 192, 1)'],
            backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)'],
            data: [1000, 1000],
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
