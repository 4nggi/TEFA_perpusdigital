<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <h2 class="text-center my-4">FORM KUNJUNGAN</h2>
                <form @submit.prevent="kirimData">
                    <div class="mb-3">
                        <input v-model="form.nama" class="form-control form-control-lg rounded-5 abu" type="text"
                            placeholder="nama..." />
                    </div>
                    <div class="mb-3">
                        <select v-model="form.keanggotaan"
                            class="form-control form-control-lg form-select rounded-5 abu">
                            <option value="">keanggotaan</option>
                            <option v-for="(member, i) in members" :key="i" :value="member.id">{{ member.nama }}
                            </option>
                        </select>
                    </div>
                    <div v-if="form.keanggotaan == 1" class="mb-3">
                        <div class="row">
                            <div class="col-md-4">
                                <select v-model="form.tingkat"
                                    class="form-control form-control-lg form-select rounded-5 mb-2 abu">
                                    <option value="">tingkat</option>
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
                                    <option value="">kelas</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <select v-model="form.keperluan"
                            class="form-control form-control-lg form-select rounded-5 mb-2 abu">
                            <option value="">keperluan</option>
                            <option v-for="(item, i) in objectives" :key="i" :value="item.id">{{ item.nama }}</option>
                        </select>
                    </div>
                    <NuxtLink to="/pengunjung">
                    <button type="submit" class=" r btn btn-dark btn-lg rounded-5 px-5 abu">kirim</button></NuxtLink>
                    <NuxtLink to="/">
                    <button type="submit" class=" r btn btn-dark btn-lg rounded-5 px-5 abu ">kembali</button></NuxtLink>
                    
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
const supabase = useSupabaseClient()

const members = ref([]);
const objectives = ref([]);

const form = ref({
    nama: "",
    keanggotaan: "",
    tingkat: "",
    jurusan: "",
    kelas: "",
    keperluan: "",
});

const kirimData = async () => {
    const { error } = await supabase.from("pengunjung").insert([form.value])
    if (!error) navigateTo("/pengunjung")
    else throw error
}

const getkeanggotaan = async () => {
    const { data, error } = await supabase.from("keanggotaan").select("*")
    if (data) members.value = data
};

const getkeperluan = async () => {
    const { data, error } = await supabase.from("keperluan").select("*")
    if (data) objectives.value = data
};

onMounted(() => {
    getkeanggotaan();
    getkeperluan();
});
</script>
<style scoped>
.btn {
    background-color: aquamarine;
    color: black;
}

.nama {
    background-color: bisque;
}

.keanggotaan {
    background-color: azure;
}

.tingkat {
    background-color: antiquewhite;
}

.jurusan {
    background-color: aqua;
}

.kelas {
    background-color: aqua;
}

.keperluan {
    background-color: aqua;
}

.abu {
    background-color: #d9d9d9;
}

.n {
    position: fixed;
    right: 30px;
}

/* Overall Form Styling */
.container-fluid {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  font-family: 'Arial', sans-serif; /* Choose a bold, modern font */
}

.row {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 400px; /* Adjust width as needed */
}

/* Form Heading */
h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

/* Input Fields */
.form-control {
  border: 2px solid #ccc; /* Subtle border */
  border-radius: 5px;
  padding: 12px;
  font-size: 16px;
  transition: all 0.3s ease; /* Smooth transitions */
}

.form-control:focus {
  outline: none;
  border-color: #007bff; /* Blue focus color */
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.2);
}

/* Form Buttons */
button[type="submit"] {
  background-color: #007bff; /* Blue button */
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

/* Additional Styling (optional) */

</style>