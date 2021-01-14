<script>
import { Doughnut } from 'vue-chartjs';

export default {
  extends: Doughnut,
  data() {
    return {
      chartData: {
        // labels: ['successfull', 'unsuccessfull'],
        datasets: [
          {
            borderWidth: 1,
            borderColor: ['#9491d6', '#eeeefa'],
            backgroundColor: ['#9491d6', '#eeeefa'],
            data: [6, 2],
          },
        ],
      },
      options: {
        cutoutPercentage: 70,
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
