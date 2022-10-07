<template>
    <div class="title-service">
        <h2 class="title-service__h2">MES SERVICES</h2>
        <h3 class="title-service__h3">Création d'un site web de A à Z</h3>
        <hr class="title-service__hr" />
    </div>
</template>

<script>
export default {
    name: 'titleService'
}
</script>

<style lang="scss">
.title-service {
    margin-top: 4rem;
    text-align: center;
    &__h2 {
        padding-bottom: 2rem;
        font-size: 2.5rem;
        color: #000000;
    }
    &__h3 {
        font-size: 1.6rem;
    }
    &__hr {
        width: 5rem;
        height: 0.3rem;
        border: none;
        background-color: #cebfac;
        margin: 1.2rem auto;
    }
}
</style>
