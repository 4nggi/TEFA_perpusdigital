 <template>
  <div>
      <canvas id="myChart"></canvas>
  </div>
 </template>

 <script setup>
import Chart from 'Chart.js/auto';

const labels=[
  'January',
  'February',
  'March',
  'April',
  'Mei',
  'june',
  'july'
];

const data= {
  labels: labels,
  datasets: [{
    labels: 'pengunjung',
    backgroundcolor: [
    'rgb(20, 112, 164)',
    'rgb(40, 83, 62)',
    'rgb(46, 61, 139)',
    'rgb(255, 235, 51)',
    'rgb(216, 57, 57)',
    'rgb(158, 90, 94)',
    'rgb(216, 57, 57)'
    ],
    borderColor: 'rgb(255, 99, 132)',
    data: [30, 10, 10, 20, 30, 5, 10],
}]
};

const config = {
  type: 'bar',
  data: data,
  options: {}
};
onMounted(()=>{
  const myChart = new Chart(
  document.getElementById('myChart'),
  config
);
})
</script>