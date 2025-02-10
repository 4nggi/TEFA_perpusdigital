<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="my-3">
                    <form @submit.prevent="getPengunjung">
                        <input v-model="keyword" type="search" class="form-control form-control-lg rounded-5" placeholder=" filter...">
                    </form>
                </div>
                <div class="my-3 text-muted">Menampilkan {{ visitors.length }} dari {{ jumlah }}</div>
                <!-- <div class="container mt-5"> -->
                <div class="my-3 text-muted"> Daftar riwayat kunjungan </div>
                <!-- </div> -->
                <table class="table">
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>Nama</td>
                            <td>Keanggotaan</td>
                            <td>Waktu</td>
                            <td>Keperluan</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(visitor, i) in visitors" :key="i">
                            <td>{{ i + 1 }}.</td>
                            <td>{{ visitor.nama }}</td>
                            <td>{{ visitor.keanggotaan.nama }}</td>
                            <td>{{ visitor.tanggal }}, {{ visitor.waktu }}</td>
                            <td>{{ visitor.keperluan.nama }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
       
        <div class="content">
            <p class="no-print"></p>
        </div>

        <NuxtLink to="pengunjung"><button onclick="window.print()" class="btn btn-primary mt-3">Print</button>
        </NuxtLink>
        <NuxtLink to="/"><button type="submit" class="btn btn-dark btn-lg rounded-5 px-5">Kembali</button></NuxtLink>
    </div>
</template>
<script setup>
const supabase = useSupabaseClient()
const keyword = ref('')
const jumlah = ref(0)
const visitors = ref([])

const totalPengunjung = async ()=> {
  const { data, count } = await supabase.from('pengunjung').select("*", {count: 'exact' })
  if (data) jumlah.value = count
}

const getPengunjung = async () => {
    const { data, error } = await supabase.from('pengunjung').select(`*, keanggotaan(*), keperluan(*)`).order('id', { ascending: false })
    .ilike('nama', `%${keyword.value}%`)
    if (data) visitors.value = data
}

onMounted(() => {
    getPengunjung()
    totalPengunjung()
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