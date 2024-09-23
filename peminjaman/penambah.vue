<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <h2 class="text-center my-4">FORM peminjaman</h2>
                <form @submit.prevent="kirimData">
                    <div class="mb-3">
                        <input v-model="form.nama" class="form-control form-control-lg rounded-5 abu" type="text" placeholder="nama..."/>
                    </div>
                    <div class="mb-3">
                        <input v-model="form.borrow_date" class="form-control form-control-lg rounded-5 abu" type="text" placeholder="tanggal..."/>
                        <option v-for="(item, i) in objectives" :key="i" :value="item.id">{{ item.nama }}</option>
                    </div>
                    <div class="mb-3">
                        <input v-model="form.book_tittle" class="form-control form-control-lg rounded-5 abu" type="text" placeholder="judul buku..."/>
                        <option v-for="(item, i) in objectives" :key="i" :value="item.id">{{ item.nama }}</option>
                    </div>
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
</template>
<script setup>
const supabase = useSupabaseClient()

const members = ref([]);
const objectives = ref([]);

const form = ref({
    nama: "",
    borrow_date: "",
    book_tittle: "",
});

const kirimData = async () => {
    const { error } = await supabase.from("peminjaman").insert([form.value])
    if(!error) navigateTo("/peminjaman/")
    else throw error
}

const getborrow_date = async () => {
    const { data, error } = await supabase.from("borrow_date").select("*")
    if(data) members.value = data
};

const getbook_tittle = async () => {
    const { data, error } = await supabase.from("book_tittle").select("*")
    if(data) objectives.value = data
};

onMounted(() => {
    getborrow_date();
    getbook_tittle();
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