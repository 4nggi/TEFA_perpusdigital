<template>
    <div>
        <canvas id="myChart"></canvas>
    </div>
  </template>
  
  <script setup lang="ts">
  import Chart, { type ChartConfiguration, type ChartItem } from 'chart.js/auto'
  
  const client = useSupabaseClient()
  const jumlahPengunjung: any[] = [] // array biasa 
  const labels: string[] = []
  
  const getMonthByGrouped = async () => {
    const { data, error } = await client
        .from('pengunjung')
          .select()
      if(data) {
          data.map((i) => {
            const d = new Date()
              labels.push(months[i.tanggal-1])
          })
      }
  }
  
  const getJumlahPengunjungPerBulan = async () => {
    const { data, error } = await client
        .from('jumlahpengunjungperbulan')
          .select()
      if(data) {
        data.map((i) => {
            jumlahPengunjung.push(i.jumlah)
          })
      }
  }
  
  const months = [
    'Januari',
    'Pebruari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'Nopember',
    'Desember'
  ];
  
  const data = {
      labels: labels, 
    datasets: [{
      label: 'Pengunjung',
      backgroundColor: 'rgb(0, 153, 255, 100)',
      borderColor: 'rgb(255, 99, 132)',
      data: jumlahPengunjung, 
    }]
  };
  
  
  const config: ChartConfiguration = {
    type: 'bar',
    data: data,
    options: {}
  };
  
  const gambarChart = () => {
      const canvas = <ChartItem>document.getElementById('myChart')
    new Chart(canvas, config)
  }
  
  onMounted(() => {
      getMonthByGrouped()
      getJumlahPengunjungPerBulan()
    setTimeout(() => {
      gambarChart()
    },3000)
  })
  </script>
  