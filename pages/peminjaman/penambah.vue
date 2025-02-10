<template>
    <div class="container-fluid">
      <div class="row">
          <div class="col-lg-12">
              <h2 class="text-center my-4">Form Peminjaman</h2>
              <div class="my-3">
        <form @submit.prevent="kirimData">
        <label for="nama"> Nama:</label>
        <input type="text" id="nama" v-model="form.nama" required class="form-control form-control-lg rounded-5 abu"><br><br>
        <div class="mb-3">
                        <select v-model="form.anggota"
                            class="form-control form-control-lg form-select rounded-5 abu">
                            <option value="">Keanggotaan</option>
                            <option v-for="(member, i) in members" :key="i" :value="member.id">{{ member.nama }}
                            </option>
                        </select>
                    </div>
                    <div v-if="form.anggota == 1" class="mb-3">
                        <div class="row">
                            <div class="col-md-4">
                                <select v-model="form.tingkat"
                                    class="form-control form-control-lg form-select rounded-5 mb-2 abu">
                                    <option value="">Tingkat</option>
                                    <option value="X">X</option>
                                    <option value="XI">XI</option>
                                    <option value="XII">XII</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <select v-model="form.jurusan"
                                    class="form-control form-control-lg form-select rounded-5 mb-2 abu">
                                    <option value="">jurusan</option>
                                    <option value="PPLG">PPLG</option>
                                    <option value="TJKT">TJKT</option>
                                    <option value="TSM">TSM</option>
                                    <option value="DKV">DKV</option>
                                    <option value="TOI">TOI</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <select v-model="form.kelas"
                                    class="form-control form-control-lg form-select rounded-5 mb-2 abu">
                                    <option value="">Kelas</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                        </div>
                    </div>
        <label for="judul_buku">Judul Buku:</label>
        <div class="col-lg-12">
                                <select v-model="form.judul" class="form-control form-control-lg form-select rounded-5 mb-2 abu">
                                    <option value="">Pilih buku</option>
                                    <option v-for="(item, i) in objectives" :key="i" :value="item.id">{{ item.judul }}</option>
                                </select>
                            </div>
        <br>
        <button type="submit" class=" r btn btn-dark btn-lg rounded-5 px-5 abu">Kirim</button>
        <NuxtLink to="/buku">
        <button type="submit" class="btn btn-dark btn-lg rounded-5 px-5">Kembali</button>
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
    judul: '',
    anggota: "",
    tingkat: "",
    jurusan: "",
    kelas: "",
    
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

const getanggota = async () => {
    const { data, error } = await supabase.from('keanggotaan').select('*')
    if (data) members.value = data
};


const getjudul = async () => {
    const { data, error } = await supabase.from("buku").select()
    if(data) objectives.value = data
};



onMounted(() => {
    gettanggal_peminjaman();
    getanggota();
    getjudul();
    
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
.anggota{
    background-color: bisque;
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