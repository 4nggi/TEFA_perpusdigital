<template>
    <div class="row p-3 color text-white position" style="width: 100%; z-index: 10%;">
        <div class="col-lg-1">
            <img src="~/assets/img/LOGO-SMK4.png" alt="logo smkn4" height="100px" width="100px">
        </div>
        <div class="col-lg-11">
            <h1>PERPUS DIGITAL</h1>
            <address>
                SMKN 4 Tasikmalaya
            </address>
            <address>
                JL.Depok, Sukamenak, Purbaratu
            </address>
        </div>
    </div>
    <div class="container">
    <div class="row justify-content-center">
      <div class="col-auto">
        <nav class="nav justify-content-center pt-3 pb-3 mb-4 proto rounded-pill">
          <nuxt-link to="/pengaturan" v-if="user" class="nav-link"><span class="nav-text">PENGATURAN</span></nuxt-link>
          <nuxt-link to="/auth/signin" v-if="user === null" class="nav-link"><span class="nav-text">SIGNIN</span></nuxt-link>
          <nuxt-link to="/auth/signout" v-if="user != null" class="nav-link"><span class="nav-text">SIGNOUT</span></nuxt-link>
        </nav>
      </div>
    </div>
  </div>
  </template>
  <style>
  .color{
    background-color:  #0000ab;
  }
  </style>