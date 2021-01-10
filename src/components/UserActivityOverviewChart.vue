<script>
import { Radar } from 'vue-chartjs';

export default {
  extends: Radar,
  data() {
    return {
      chartData: {
        labels: [
          'Babol',
          'Cabanatuan',
          'Daegu',
          'Jerusalem',
          'Fairfield',
          'New York',
          'Gangtok',
          'Buenos Aires',
          'Hafar Al-Batin',
          'Idlib',
        ],
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
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
