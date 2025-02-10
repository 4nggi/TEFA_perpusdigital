<template>
  <div>
      <h2 class="text-start my-4">{{ buku.judul }}</h2>
      <div class="row">
          <div class="col-md-3">
              <div class="card">
                  <div class="card-body">
                      <span v-if="buku.cover"><img class="cover" :src="buku.cover" :alt="buku.judul"></span>
              <span v-else><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F508699%2Flandscape-placeholder&psig=AOvVaw2-SWmfk33NzXubPfqn0P16&ust=1714794757874000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNjln7nK8IUDFQAAAAAdAAAAABAE://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F508699%2Flandscape-placeholder&psig=AOvVaw2-SWmfk33NzXubPfqn0P16&ust=1714794757874000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNjln7nK8IUDFQAAAAAdAAAAABAE" class="cover"></span>
                  </div>
              </div>
          </div>
          <div class="col-md-6">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">Penulis : {{  buku.penulis }}</li>
                  <li class="list-group-item">Tahun terbit : {{  buku.tahun_terbit }}</li>
                  <li class="list-group-item">Penerbit : {{ buku.penerbit }}</li>
                  <li class="list-group-item">Rak : {{ buku.rak }}</li> 
                  <li class=" list-group-item">Deskripsi : {{ buku.deskripsi }}</li>
                  <NuxtLink :to="buku.link" target="_blank" class="btn btn-primary">Baca</NuxtLink>
                  <NuxtLink to="/peminjaman/penambah">
                    <button type="submit" class="btn btn-primary btn-lg mt-4 w-100 ">Pinjam buku ini</button>
                  </NuxtLink>
                  <NuxtLink to="/pengembalian/penambah">
                    <button type="submit" class="btn btn-primary btn-lg  mt-4  w-100 ">Kembalikan buku</button>
                 </NuxtLink>
              </ul>
          </div>
      </div>
  </div>
  <NuxtLink to="/buku/rak" class="btn btn-dark btn-lg rounded-5 px-5 ">
      Kembali
  </NuxtLink>
</template>

<script setup>
import { onMounted } from 'vue';

const supabase = useSupabaseClient()
const route = useRoute()
const buku = ref([])

const getBukuByID = async () => {
  const { data, error } = await supabase
  .from('buku')
  .select(`*, kategori_buku(*)`)
  .eq('id', route.params.id)
  .single()
  if(data) buku.value = data
}

onMounted(() => {
  getBukuByID()
})
</script>
<style scoped>
.cover{
  width: 100%;
}
 /* .{
  background-color: #000000;
  margin-right: 30px;
}  */
</style>