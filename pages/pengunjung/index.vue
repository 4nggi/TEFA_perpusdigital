<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <h2 class="text-center my-4">riwayat kunjungan</h2>
                <div class="my-3">
                    <form  @submit.prevent="getPengunjung">
                        <input v-model="keyword" type="search" class="form-control rounded-5" placeholder="Filter...">
                    </form>
                </div>
                <div class="my-3 text-muted">menampilkan daftar riwayat kunjungan </div>
                 <table class="table table-bordered">
                    <thead>
                        <tr>
                            <td>no</td>
                            <td>NAMA</td>
                            <td>KEANGGOTAAN</td>
                            <td>WAKTU</td>
                            <td>KEPERLUAN</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(visitor,i) in visitors" :key="i">
                            <td>{{ i+1 }}.</td>
                            <td>{{ visitor.nama }}</td>
                            <td>{{ visitor.keanggotaan.nama }}</td>
                            <td>{{ visitor.tanggal }}, {{ visitor.waktu }}</td>
                            <td>{{ visitor.keperluan.nama }}</td>
                        </tr>
                    </tbody>
                 </table>
            </div>
        </div>
        <NuxtLink to="/">
            <button type="submit" class="btn btn-dark btn-lg rounded-5 px-5">kembali</button>
        </NuxtLink>
    </div>
</template>
<script setup>
const supabase = useSupabaseClient()
const keyword = ref('')
const visitors = ref([])

const getPengunjung = async () => {
    const { data, error } = await supabase.from('pengunjung').select(`*, keanggotaan(*), keperluan(*)`).order('id', { ascending: false })
    if(data) visitors.value = data
}
const getBuku = async () => {
    const {data,error} = await supabase.from('pengunjung').select(`*, keanggotaan(*), keperluan(*)`)
        .ilike('nama', `%${keyword.value}%`)
    if(data) visitors.value = data
}

onMounted(() => {
    getPengunjung()
    getBuku()
})
</script>