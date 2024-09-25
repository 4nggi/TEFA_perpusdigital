<template>
  <div>
    <h1>Statistik Pengunjung per Bulan</h1>
    <ul>
      <li v-for="stat in statistikList" :key="stat.bulan">
        Bulan: {{ stat.bulan }} - Jumlah Pengunjung: {{ stat.jumlah_pengunjung }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const statistikList = ref([]);
let supabase = useSupabaseClient()

const fetchStatistik = async () => {
  const { data, error } = await supabase
    .from('pengunjung')
    .select()
    // .rpc('get_statistik_pengunjung_per_bulan'); // Pastikan Anda telah membuat fungsi ini di Supabase
  if(data) console.log(data)
};


</script>
