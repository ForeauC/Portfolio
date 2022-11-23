<template>
    <div class="service">
        <article class="service__card">
            <img src="../../assets/crayon.png" alt="" />
            <h4 class="service__card-title">MAQUETTE DE SITE WEB / MOBILE</h4>
            <p class="service__card-text">Création de maquette selon votre charte graphique.</p>
        </article>
        <article class="service__card">
            <img src="../../assets/window.png" alt="" />
            <h4 class="service__card-title">INTÉGRATION WEB</h4>
            <p class="service__card-text">
                Des intégrations respectant les standart du web . ( HTML / CSS )
            </p>
        </article>
        <article class="service__card">
            <img src="../../assets/cle.png" alt="" />
            <h4 class="service__card-title">DÉVELOPPEMENT DE FONCTIONNALITÉ</h4>
            <p class="service__card-text">Fonctionnalité selon vos besoins métier.</p>
        </article>
        <article class="service__card">
            <img src="../../assets/recherche.png" alt="" />
            <h4 class="service__card-title">RÉFÉRENCEMENT NATUREL</h4>
            <p class="service__card-text">Optimisation des pages web pour un SEO optimal.</p>
        </article>
        <article class="service__card">
            <img src="../../assets/animation.png" alt="" />
            <h4 class="service__card-title">DYNAMISME DES PAGES</h4>
            <p class="service__card-text">
                Des animations non intrusives pour embellir votre projet
            </p>
        </article>
        <article class="service__card">
            <img src="../../assets/ajuster.png" alt="" />
            <h4 class="service__card-title">RESPONSIVE DESIGN</h4>
            <p class="service__card-text">
                Comptabilité sur tous les supports ( Desktop, tablette et mobile )
            </p>
        </article>
    </div>
</template>

<script>
export default {
    name: 'descriptionService'
}
</script>

<style lang="scss">
.service {
    align-items: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    margin-top: 4rem;
    width: 100%;
    &__card {
        width: calc(33.33333% - 2rem);
        height: auto;
        background-color: #f2f0f0e2;
        box-shadow: 0 4px 30px rgb(0 0 0 / 5%);
        padding: 1.5rem 0;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
            transform: translateY(-10px);
        }
        & img {
            width: 45px;
            height: 45px;
            padding-top: 1rem;
            padding-bottom: 1rem;
            margin: 0 auto;
        }
        &-title {
            font-size: 1.2rem;
            padding: 0 1rem 1rem 1rem;
            font-weight: 600;
        }
        &-text {
            padding: 0 1rem 1rem 1rem;
        }
    }
}

@media screen and (max-width: 900px) {
    .service__card {
        width: calc(50% - 2rem);
    }
}
@media screen and (max-width: 625px) {
    .service__card {
        width: calc(100% - 2rem);
    }
}
</style>
