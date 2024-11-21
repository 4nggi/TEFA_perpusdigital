<template>
    <div class="container-fluid">
      <div class="row">
          <div class="col-lg-12">
              <h2 class="text-center my-4">form pengembalian</h2>
              <div class="my-3">
        <form @submit.prevent="kirimData">
        <label form="nama"> Nama:</label>
        <input type="text" id="nama" v-model="form.nama" required class="form-control form-control-lg rounded-5 abu"><br><br>
        <label form="nama"> judulbuku:</label>
        <input type="text" id="nama" v-model="form.judulbuku" required class="form-control form-control-lg rounded-5 abu">
        <label form="judul_buku">Judul Buku:</label> 
        <div class="col-lg-12">
                                   <select v-model="form.peminjaman" class="form-control form-control-lg form-select rounded-5 mb-2 abu">
                                    <option value="">pilih buku</option>
                                    <option v-for="(item, i) in objectives" :key="i" :value="item.id">{{ item.judul }}</option>
                                </select>   
                            </div>
        <br>
        <NuxtLink  to="/pengembalian">
        <button type="submit" class="btn btn-dark btn-lg rounded-5 px-5 abu">kirim</button>
        </NuxtLink >
        <NuxtLink to="/rak">
        <button type="submit" class="btn btn-dark btn-lg rounded-5 px-5">kembali</button>
        </NuxtLink >
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
    peminjaman: '',
});

const kirimData = async () => {
    const { error } = await supabase.from("pengembalian").insert([form.value])
    if(!error) navigateTo("/pengembalian/")
    else throw error
}

 const gettanggal_pengembalian= async () => {
     const { data, error } = await supabase.from("tanggal_pengembalian").select("*")
     if(data) members.value = data
 }
const getpeminjaman = async () => {
    const { data, error } = await supabase.from("peminjaman").select()
    if(data) objectives.value = data
};


onMounted(() => {
    gettanggal_pengembalian();
    getpeminjaman();
});
</script>
<style scoped>
.btn{
    background-color: rgb(223, 223, 223);
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