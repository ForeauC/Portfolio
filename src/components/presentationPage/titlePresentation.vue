<template>
    <div class="title-presentation">
        <h2 class="title-presentation__h2">À PROPOS</h2>
        <h3 class="title-presentation__h3">Un passionné à votre service</h3>
        <hr class="title-presentation__hr" />
    </div>
</template>

<script>
export default {
    name: 'titlePresentation'
}
</script>

<style lang="scss">
.title-presentation {
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
