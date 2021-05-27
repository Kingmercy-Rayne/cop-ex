<script>
import { Radar } from 'vue-chartjs';

export default {
  extends: Radar,
  data() {
    return {
      chartData: {
        labels: ['Event Creation', 'Edit', '', 'Review', 'x5'],
        datasets: [
          {
            label: 'Radar Chart',
            borderWidth: 1,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',

            data: [1, 2, 25820412, 23685667],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        angleLines: {
          display: false,
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
