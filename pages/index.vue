<template> 
  <div class="container-fluid">
      <div class="row my-5">
          <div class="col-lg-6 box ">
              <nuxt-link to="../pengunjung/tambah">
                  <div class="card bg-pengunjung rounded-5">
                      <div class="card-body">
                          <h2>Pengunjung</h2>
                      </div>
                  </div>
              </nuxt-link>
          </div>
          <div class="col-lg-6 box">
            <nuxt-link to="../buku/rak">
                  <div class="card bg-buku rounded-5">
                      <div class="card-body">
                          <h2>Cari Buku</h2>
                      </div>
                  </div>
              </nuxt-link>
          </div>
          <div class="row my-5">
            <div class="col-lg-6 box ">
            <nuxt-link to="../peminjaman">
                  <div class="card bg-peminjaman rounded-5">
                      <div class="card-body">
                          <h2> Riwayat peminjaman buku</h2>
                      </div>
                  </div>
              </nuxt-link>
            </div>
              <div class="col-lg-6 box">
            <nuxt-link to="../pengembalian">
                  <div class="card bg-pengembalian rounded-5">
                      <div class="card-body">
                          <h2>pengembalian</h2>
                      </div>
                  </div>
              </nuxt-link>
          </div>
          </div>
      </div>
  </div>
  <h2 style="margin: 30px"><strong>STATISTIK</strong></h2>
<div class="Container-fluid">
  <div class="row justify-content-evenly rounded-3">
    <div class="col-5">
      <div class="card-body text">
        <div class="raccing">
          <nuxt-link to="/pengunjung">
            <h2 class="pt-4"><span class="no">{{ jml_pengunjung }}</span> pengunjung</h2>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="col-5">
      <nuxt-link to="/buku">
      <div class="raccing1">
        <h2><span class="no">{{ jml_buku }}</span> Buku</h2>
      </div>
      </nuxt-link>
    
    
    </div>
  </div>
  <div class="line">
    <Chart />
  </div>
</div>
</template>
<script setup>
const supabase = useSupabaseClient()
const jml_pengunjung = ref(0)
const jml_buku = ref(0)
const jml_peminjaman = ref(0)

async function getjml_pengunjung() {
const{ error , data, count } = await supabase
.from("pengunjung")
.select('*', { count: 'exact' })
if (count) jml_pengunjung.value = count

}
async function getjml_buku() {
const{ error , data, count } = await supabase
.from("buku")
.select('*', { count: 'exact' })
if (count) jml_buku.value = count

}
async function getjml_peminjaman() {
const{ error , data, count } = await supabase
.from("peminjaman")
.select('*', { count: 'exact' })
if (count) jml_peminjaman.value = count

}
async function getjml_pengembalian() {
const{ error , data, count } = await supabase
.from("peminjaman")
.select('*', { count: 'exact' })
if (count) jml_peminjaman.value = count

}

onMounted(() => {
getjml_pengunjung()
getjml_buku()
getjml_peminjaman()
getjml_pengembalian()
})
</script>

<style scoped>
.card {
  height: 250px;
  box-shadow: 1px 1px 10px #424242;
}
.card.bg-pengunjung {
  background-image: url('../assets/img/bg-home-cari-buku.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.card.bg-buku {
  background: url('../assets/img/rawr.jpg') no-repeat center center;
  background-size: cover;
}
.card.bg-peminjaman {
  background-image: url('../assets/img/jis.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.card.bg-pengembalian {
  background-image: url('../assets/img/kmli.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.raccing {
height: 200px;
box-shadow: 1px 1px 10px;
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
background-color:   #697408;
}
.raccing1 {
height: 200px;
box-shadow: 1px 1px 10px;
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
background-color:   #4b5856;
}
.card-body h2{
  color:black;
}
.box {
width: 50%;
}
.box a{
text-decoration: none;
}
</style>