<template>
    <div class="head">
        <div class="head__icones">
            <a href="#">
                <img class="icones" src="../../assets/github.png" alt="" />
            </a>
            <a href="#">
                <img class="icones" src="../../assets/linkedin.png" alt="" />
            </a>
            <a href="#">
                <img class="icones" src="../../assets/whatsapp.png" alt="" />
            </a>
        </div>
        <div class="head__contact">
            <p>Contact : clément.foreau@gmail.com</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'headHome'
}
</script>

<style lang="scss">
.head {
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    color: #fefefe;
    &__icones {
        width: 50%;
        text-align: start;
        padding-left: 20px;
        & .icones {
            width: 40px;
            height: 40px;
            padding-right: 20px;
        }
    }
    &__contact {
        width: 50%;
        text-align: end;
        padding-right: 20px;
        & p {
            color: #fefefe;
        }
    }
}

@media screen and (max-width: 768px) {
    .head {
        display: none;
    }
}
</style>
