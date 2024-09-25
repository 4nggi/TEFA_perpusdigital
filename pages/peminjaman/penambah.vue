<template>
    <div class="container-fluid">
      <div class="row">
          <div class="col-lg-12">
              <h2 class="text-center my-4">form peminjaman</h2>
              <div class="my-3">
        <form @submit.prevent="kirimData">
        <label for="nama"> Nama:</label>
        <input type="text" id="nama" v-model="nama" required class="form-control form-control-lg rounded-5 abu"><br><br>
        <label for="judul_buku">Judul Buku:</label>
        <input type="text" id="judul_buku" v-model="judulBuku" required class="form-control form-control-lg rounded-5 abu"><br><br>
        <label for="tanggal_peminjaman">Tanggal Peminjaman:</label>
        <input type="date" id="tanggal_peminjaman" v-model="tanggalPeminjaman" required class="form-control form-control-lg rounded-5 abu"><br><br>
        
        <NuxtLink to="/peminjaman">
        <button type="submit" class=" r btn btn-dark btn-lg rounded-5 px-5 abu">kirim</button>
        </NuxtLink>
        <NuxtLink to="/buku">
        <button type="submit" class="btn btn-dark btn-lg rounded-5 px-5">kembali</button>
        </NuxtLink>
        </form>
            </div>
        </div>
    </div>
    </div>
  
</template>
<script setup>
const supabase = useSupabaseClient()

const members = ref([]);
const objectives = ref([]);

const form = ref({
    nama: '',
    judulBuku: '',
    tanggalPeminjaman: ''
});

const kirimData = async () => {
    const { error } = await supabase.from("peminjaman").insert([form.value])
    if(!error) navigateTo("/peminjaman/")
    else throw error
}

const gettanggal_peminjaman= async () => {
    const { data, error } = await supabase.from("tanggal_peminjaman").select("*")
    if(data) members.value = data
};

const getjudul_buku = async () => {
    const { data, error } = await supabase.from("judul_buku").select("*")
    if(data) objectives.value = data
};

onMounted(() => {
    gettanggal_peminjaman();
    getjudul_buku();
});
</script>
<style scoped>
.btn{
    background-color: aquamarine;
    color: black;
}
.nama{
    background-color: bisque;
}
.tanggal{
    background-color: azure;
}
.judulbuku{
    background-color: antiquewhite;
}

.abu{
    background-color: #d9d9d9;
}
.n{
    position: fixed;
    right: 30px;
}
</style>