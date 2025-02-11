<template> 
  <div class="container-fluid">
      <div class="row my-5">
          <div class="col-lg-6 box ">
              <nuxt-link to="../pengunjung/tambah">
                  <div class="card bg-pengunjung rounded-5">
                      <div class="card-body">
                          <h2 class="btn btn-light fs-3 rounded-3">Pengunjung</h2>
                      </div>
                  </div>
              </nuxt-link>
          </div>
          <div class="col-lg-6 box">
            <nuxt-link to="../buku/rak">
                  <div class="card bg-buku rounded-5">
                      <div class="card-body">
                          <h2 class="btn btn-light fs-3 rounded-3"> Rak</h2>
                      </div>
                  </div>
              </nuxt-link>
          </div>
          <div class="row my-5">
            <div class="col-lg-6 box ">
            <nuxt-link to="../peminjaman">
                  <div class="card bg-peminjaman rounded-5">
                      <div class="card-body">
                          <h2 class="btn btn-light fs-3 rounded-3">Riwayat peminjaman buku</h2>
                      </div>
                  </div>
              </nuxt-link>
            </div>
              <div class="col-lg-6 box">
            <nuxt-link to="../pengembalian">
                  <div class="card bg-pengembalian rounded-5">
                      <div class="card-body">
                          <h2 class="btn btn-light fs-3 rounded-3">Pengembalian</h2>
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
            <h2 class="pt-4"><span class="no">{{ jml_pengunjung }}</span> Pengunjung</h2>
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
<div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h4 class="my-4 text-white text-center">Contact Us</h4>

            <div class="footerContactUs">
              <div class="perFooterContactUs">
                <i class="fas text-white fa-envelope"></i>
                <p class="text-white">info@smkn4-tsm.sch.id</p>
              </div>

              <div class="perFooterContactUs">
                <i class="fas text-white fa-phone-alt"></i>
                <p class="text-white">02265312059</p>
              </div>

              <div class="perFooterContactUs">
                <i class="fas text-white fa-road"></i>
                <p class="text-white">Jl Depok Kel. Sukamenak Kec. Purbaratu Kota Tasikmalaya 46196.</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <h4 class="my-4 text-center text-white"></h4>
            <div class="footerAbout">
              <a href="" class="text-white"></a>
              <a href="" class="text-white"></a>
              <a href="" class="text-white"></a>
              <a href="" class="text-white">Copyright by @anggi</a>
            </div>
          </div>

          <div class="col-md-4 text-center">
            <h4 class="my-4 text-white">Newsletter</h4>
            <form>
              <div class="form-group">
                <input class="form-control" type="search" placeholder="Example@gmail.com" aria-label="Search" />
                <button class="btn btn-primary btn-newsletter" type="submit">Kirim</button>
              </div>
            </form>
          </div>
        </div>
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
  color:rgb(0, 0, 0);
}
.box {
width: 50%;
}
.box a{
text-decoration: none;
}
.footer {
  background-color: #263238;
  padding-top: 25px;
  padding-bottom: 50px;
  margin-top: 125px;
}

.footerContactUs {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.footerContactUs .perFooterContactUs {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 10px 0;
}

.footerContactUs .perFooterContactUs p {
  margin: 0 0 0 20px;
  -webkit-transform: translateY(-5px);
          transform: translateY(-5px);
}

.footerAbout {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  text-align: center;
}

.footerAbout a {
  margin: 5px 0;
}

.btn-newsletter {
  width: 100%;
  margin-top: 10px;
}

.footerCopyright {
  width: 100%;
  height: 60px;
  background-color: #111111;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.footerCopyright p {
  margin: 0;
}

.perFooterContactUs p {
    font-size: .9em;
  }
</style>