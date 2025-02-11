<template>

<div class="container-fluid">
      <div class="row">
          <div class="col-lg-12">
              <h2 class="text-center my-4">Form Pengembalian</h2>
              <div class="my-3">
        <form @submit.prevent="kirimData">
        <label form="nama"> Nama:</label>
        <input type="text" id="nama" v-model="form.nama" required class="form-control form-control-lg rounded-5 abu">
        <label form="judul_buku">Judul Buku:</label> 
                            <div class="col-lg-12">
                                   <select v-model="form.judul" class="form-control form-control-lg form-select rounded-5 mb-2 abu">
                                    <option value="">Pilih buku</option>
                                    <option v-for="(item, i) in objectives" :key="i" :value="item.id">{{ item.judul }}</option>
                                </select>   
                            </div>
                            <label form="judul_buku">Keanggotaan</label>
                            <div class="mb-3">
                        <select v-model="form.keanggotaan"
                            class="form-control form-control-lg form-select rounded-5 abu">
                            <option value="">Keanggotaan</option>
                            <option v-for="(member, i) in members" :key="i" :value="member.id">{{ member.nama }}
                            </option>
                        </select>
                    </div>
                    <div v-if="form.keanggotaan == 1" class="mb-3">
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
                                    <option value="">Jurusan</option>
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
                    <br>
        <button type="submit" class="btn btn-dark btn-lg rounded-5 px-5 abu">Kembalikan Buku</button><br><br>
        <NuxtLink to="/">
        <button type="submit" class="btn btn-dark btn-lg rounded-5 px-5">back</button>
        </NuxtLink >
        </form>
            </div>
        </div>
    </div>
    </div>

    <div class="container-fluid">
        <div class="row">
    <div class="col-lg-12">
    <h3>Riwayat Peminjaman</h3>
    <div class="my-3">
        <form @submit.prevent="getPeminjaman"></form>
    </div>
    <div class="my-3 text-muted">Menampilkan daftar riwayat peminjaman </div>
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
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()

const members = ref([]);
const objectives = ref([]);

const form = ref({
    nama: '',
    judul: '',
    keanggotaan: "",
    tingkat: "",
    jurusan: "",
    kelas: "",
});

const kirimData = async () => {
    const { error } = await supabase.from("pengembalian").insert([form.value])
    if(!error) navigateTo("/pengembalian/")
    else throw error
}

const gettanggal_pengembalian= async () => {
    const { data, error } = await supabase.from("tanggal_pengembalian").select("*")
    if(data) members.value = data
};

const getjudul = async () => {
    const { data, error } = await supabase.from("buku").select()
    if(data) objectives.value = data
};

const getkeanggotaan = async () => {
    const { data, error } = await supabase.from('keanggotaan').select('*')
    if (data) members.value = data
};




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
    gettanggal_pengembalian();
    getjudul();
    getkeanggotaan();
})
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


.return-book {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h2, h3 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin: 10px 0 5px;
}

input {
  padding: 10px;
  margin-bottom: 20px;
}

button {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>