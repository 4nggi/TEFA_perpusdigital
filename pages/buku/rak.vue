<template>
  <div class="bg">
    <div class="container-fluid">
      <div class="row">
        <div class="col text-center">
          <h2 class="text-white">RAK BUKU</h2>
        </div>
      </div>
      <div class="row gap-1 justify-content-center">
        <div class="col-sm-4" v-for="(kategori, i) in jenis" :key="i">
          <nuxt-link :to="`/buku/kategori-${kategori.id}`">
            <div class="card">
              <div class="card-body">
                {{ kategori.nama }} | {{ kategori.keterangan }}
              </div>
            </div>
          </nuxt-Link>
        </div>
      </div>
    </div>

  </div>
  <nuxt-link to="/">
    <button type="submit" class="btn btn-light btn-lg rounded-5 px-5">Kembali</button>
  </nuxt-link>
</template>
<script setup>
const supabase = useSupabaseClient();
const jenis = ref([])

const getKategori = async () => {
  const { data, error } = await supabase
    .from('kategori_buku')
    .select(`*`)
  if (data) jenis.value = data
  if (error) throw error
}

onMounted(() => {
  getKategori();
});
</script>
<style scoped>
.bg {
  background-image: url('/assets/img/pd.jpg');
  background-size: cover;
  height: 100vh;
  width: 207.5vh;
}

.angka-container-grid {
  display: grid;
  grid-template-areas:
    "area-1 area-2 area-3"
    "area-4 area-5 area-6"
    "area-7 area-8 area-9"
    ". area-10 .";
  /* Elemen terakhir tanpa elemen lain di sebelah kanan */
  gap: 70px;
}

.area-1 {
  grid-area: area-1;
  left: -70px;
  /* Geser ke kiri */
}

.area-4 {
  grid-area: area-4;
  left: 40px;
  /* Geser ke kiri */
}

.area-7 {
  grid-area: area-7;
  left: 40px;
  /* Geser ke kiri */
}

.area-10 {
  grid-area: area-10;
  left: 40px;
  /* Geser ke kiri */
}

.angka-item {
  background-color: #d6d6d6;
  color: black;
  text-align: center;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
}
</style>