<template>
    <div class="title-methode">
        <h2 class="title-methode__h2">MÉTHODES</h2>
        <h3 class="title-methode__h3">Pour la réalisation de vos projet</h3>
        <hr class="title-methode__hr" />
    </div>
</template>

<script>
export default {
    name: 'titleMethode'
}
</script>

<style lang="scss">
.title-methode {
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
