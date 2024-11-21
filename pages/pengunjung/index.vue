<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                    <div class="my-3">
                        <form  @submit.prevent="getPengunjung">
                            <input v-model="keyword" type="search" class="form-control rounded-5" placeholder="Filter...">
                        </form>
                    </div>
                    <!-- <div class="container mt-5"> -->
                <div class="my-3 text-muted">menampilkan daftar riwayat kunjungan </div>
            <!-- </div> -->
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
        <!-- <div class="row">
            <div class="col-md"> -->
                <!--- button triger modal --->
                <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modelTambah">
                    <i class="fa fa-plus">tambah data</i>
                </button>
            </div>
            <div class="col-md">
                <button class="btn btn-outline-secondary shadow float-right">print<i class="fa fa-print"></i></button>
            </div>
        </div> -->
        <div class="content">
            <p class="no-print"></p>
        </div>
        <NuxtLink to="/">
            <button onclick="window.print()" class="btn btn-primary mt-3">print</button>
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

onMounted(() => {
    getPengunjung()
})
</script>

<style>
@media print {
   .btn
   {
    display: none;
   }
   .placeholder{
    display: none;
   }
}
</style>