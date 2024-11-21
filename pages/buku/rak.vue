<template>
<div class="bg">
    <div class="container ">
        <div class="row justify-content-center  ">
            <div class="col-lg-2">
                <div class="card rounded-5">
                    <div class="card-body text-center">
                        <h2>Rak buku</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="position-relative ">
            <div class="angka-container-grid">
                <div class="angka-item area-1"><NuxtLink to="/buku">000</NuxtLink></div>
                <div class="angka-item area-2"><NuxtLink to="/buku">100</NuxtLink></div>
                <div class="angka-item area-3"><NuxtLink to="">200</NuxtLink></div>
                <div class="angka-item area-4"><NuxtLink to="">300</NuxtLink></div>
                <div class="angka-item area-5"><NuxtLink to="">400</NuxtLink></div>
                <div class="angka-item area-6"><NuxtLink to="">500</NuxtLink></div>
                <div class="angka-item area-7"><NuxtLink to="">600</NuxtLink></div>
                <div class="angka-item area-8"><NuxtLink to="">700</NuxtLink></div>
                <div class="angka-item area-9"><NuxtLink to="">800</NuxtLink></div>
                <div class="angka-item area-10"><NuxtLink to=""></NuxtLink>0</div>
            <NuxtLink to=""></NuxtLink>
            </div>

        </div> 
</div>
</div>
</template>
<style scoped>
.bg{
    background-image: url('/assets/img/pd.jpg');
    background-size: cover;
    height: 100vh;
    width: 207.5vh;
}
.angka-container-grid {
  display: grid;
  grid-template-areas:
    "area-1 area-2 area-3"
    "area-4 area-5 area-6"
    "area-7 area-8 area-9"
    ". area-10 ."; /* Elemen terakhir tanpa elemen lain di sebelah kanan */
  gap: 70px;
}

.area-1 {
  grid-area: area-1;
  left: -70px; /* Geser ke kiri */
}

.area-4 {
  grid-area: area-4;
  left: 40px; /* Geser ke kiri */
}

.area-7 {
  grid-area: area-7;
  left: 40px; /* Geser ke kiri */
}

.area-10 {
  grid-area: area-10;
  left: 40px; /* Geser ke kiri */
}
.angka-item {
  background-color: #d6d6d6;
  color: black;
  text-align: center;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
}




</style>