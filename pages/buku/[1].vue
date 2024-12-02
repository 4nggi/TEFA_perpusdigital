<template>
 <form @submit.prevent="getBuku">
            <input
              v-model="keyword"
              type="search"
              class="form-control rounded-5"
              placeholder="mau baca apa hari ini?"
              />
            </form>
            <nuxt-link :to="`/buku/${buku.id}`">
                <div class="card mb-3 shadow-lg">
                  <div class="card-body">
                    <img :src="buku.cover" class="cover" :alt="buku.judul" />
                  </div>
                </div>
              </nuxt-link>
</template>
<script setup>

const supabase = useSupabaseClient();

  const books = ref([])

  const getBuku = async () => {
    const { data, error} = await supabase
    .from('buku')
    .select(`*, kategori_buku(*)`)
    .ilike("judul" )
    if(data) books.value= data;
  
  };
  onMounted(() => {
    getBuku();
  });
</script>