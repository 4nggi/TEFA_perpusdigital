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
        <div class="position-relative jarak">
            <div class="position-absolute top-0 start-0 jarak"><button>400</button></div>
            <div class="position-absolute top-0 start-50 translate-middle-x jarak"><button>500</button></div>
            <div class="position-absolute top-0 end-0 jarak"><button>600</button></div>
            <div class="position-absolute top-50 start-0 translate-middle-y space"> <button>700</button></div>
            <div class="position-absolute top-50 start-50 translate-middle space"><button>800</button></div>
            <div class="position-absolute top-50 start-50 translate-middle-x space2"><button>000</button></div>
            <div class="position-absolute top-50 end-0 translate-middle-y space"><button>900</button></div>
            <div class="position-absolute bottom-0 start-0 space1"><button>100</button></div>
            <div class="position-absolute bottom-0 start-50 translate-middle-x space1"> <button>200</button></div>
            <div class="position-absolute bottom-0 end-0 space1"><button>300</button></div>
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
.jarak{
    margin-top: 50px;
}
.space{
    margin-top: 150px;
}
.space1{
    margin-top: 100px;
}
.space2{
    margin-top: 250px;
}
</style>