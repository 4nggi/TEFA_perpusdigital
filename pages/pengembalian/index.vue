<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <h2 class="text-center my-4">riwayat pengembalian Buku</h2>
                <div class="my-3">
                    <form  @submit.prevent="getPengembalian">
                        <input v-model="keyword" type="search" class="form-control rounded-5" placeholder="Filter...">
                    </form>
                </div>
                <div class="my-3 text-muted">menampilkan daftar riwayat kunjungan </div>
                
                 <table class="table table-bordered">
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>Nama</td>
                            <td>Tanggal pengembalian</td>
                            <td>Judul buku</td>
                            <td>Keanggotaan</td>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(visitor,i) in visitors" :key="i">
                            <td>{{ i+1 }}.</td>
                            <td>{{ visitor.nama }}</td>
                            <td>{{ visitor.tanggal_pengembalian}}</td>
                            <td>{{ visitor.buku.judul}}</td>
                            <td>{{ visitor.keanggotaan?.nama }}</td>
                            <td v-if="user" class="text-center">
                                <button v-if="!visitor.tanggal_pengembalian" @click="onDone(visitor.id)" class="btn btn-light btn-sm">♻️</button>
                                <span v-else>✔</span>
                            </td>   
                        </tr>
                    </tbody>
                 </table>
            </div>
        </div>
        <div class="content">
            <p class="no-print"></p>
        </div>

        <NuxtLink to="pengunjung"><button onclick="window.print()" class="btn btn-primary mt-3">Print</button>
        </NuxtLink><br><br>
        <NuxtLink to="/">
            <button type="submit" class="btn btn-dark btn-lg rounded-5 px-5">kembali</button>
        </NuxtLink>
    </div>
  </template>
  <script setup>
  const supabase = useSupabaseClient()
  const keyword = ref('')
  const visitors = ref([])
  

  const totalPengembalian = async ()=> {
  const { data, count } = await supabase.from('pengunjung').select("*", {count: 'exact' })
  if (data) jumlah.value = count
}

  const getPengembalian = async () => {
    const { data, error } = await supabase.from('pengembalian').select(`*, buku(*), keanggotaan(*)`).order('id', { ascending: false })
    if(data)visitors.value = data
    }
  
  onMounted(() => {
    getPengembalian()
    totalPengembalian()
  })
  </script>
  
<style>
@media print {
    .btn {
        display: none;
    }

    .form-control {
        display: none;
    }


}
</style>