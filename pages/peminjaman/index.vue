<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <h2 class="text-center my-4">Riwayat Peminjaman Buku</h2>
                <div class="my-3">
                    <form @submit.prevent="getPeminjaman">
                        <input v-model="keyword" type="search" class="form-control rounded-5" placeholder="Filter...">
                    </form>
                </div>
                <div class="my-3 text-muted">Menampilkan daftar riwayat kunjungan </div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>Nama</td>
                            <td>Keangotaan</td>
                            <td>Tanggal Peminjaman</td>
                            <td>Judul Buku</td>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(visitor, i) in visitors" :key="i">
                            <td>{{ i + 1 }}.</td>
                            <td>{{ visitor.nama }}</td>
                            <td>{{ visitor.anggota?.nama }}</td>
                            <td>{{ visitor.tanggal_peminjaman }}</td>
                            <td>{{ visitor.buku.judul }}</td>
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
            <button type="submit" class="btn btn-dark btn-lg rounded-5 px-5">Kembali</button>
        </NuxtLink> 
    </div>
</template>
<script setup>
const supabase = useSupabaseClient()
const keyword = ref('')
const jumlah = ref(0)
const visitors = ref([])

const totalPeminjaman = async ()=> {
  const { data, count } = await supabase.from('peminjaman').select("*", {count: 'exact' })
  if (data) jumlah.value = count
}


const getPeminjaman = async () => {
    const { data, error } = await supabase.from('peminjaman').select(`*, anggota(*), buku(*)`).order('id', { ascending: false })
    if (data) visitors.value = data
}

onMounted(() => {
    getPeminjaman()
    totalPeminjaman()
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