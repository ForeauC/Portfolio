<template>
    <div class="methode">
        <article class="methode__card">
            <h4 class="methode__card-title">MISE EN PLACE DU PROJET</h4>
            <p class="methode__card-text">
                En appele visio ou par mail, nous échangeons sur vos besoins et les bases de votre
                projet.<br /><br />Définition du design, des fonctionnalité et du délais de
                réalisations.
            </p>
        </article>
        <article class="methode__card">
            <h4 class="methode__card-title">ÉCHANGES DES DOCUMENTS</h4>
            <p class="methode__card-text">
                Pour pouvoir lancer le dévoloppements, vous me transmettez les ducuements et
                ressources qui seront utlisé (logo, contenue texte, ect).<br /><br />Signature du
                devis final.
            </p>
        </article>
        <article class="methode__card">
            <h4 class="methode__card-title">DÉVELOPPEMENT</h4>
            <p class="methode__card-text">
                Réalisations du dévoloppements du projet. Vous serez informer de l'avancer.<br /><br />Des
                points en visio ou mail seront possible durant le développement.
            </p>
        </article>
        <article class="methode__card">
            <h4 class="methode__card-title">DÉPLOIMENT DU PROJET</h4>
            <p class="methode__card-text">
                Dans un premier temps, nous validerons le site ou l'application. Si besoins des
                modifications seront apporté.<br /><br />Aprés validations, le site sera déployé en
                ligne.
            </p>
        </article>
    </div>
</template>

<script>
export default {
    name: 'descriptionMethode'
}
</script>

<style lang="scss">
.methode {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    margin-top: 4rem;
    width: 100%;
    &__card {
        width: calc(100% - 2rem);
        margin: 0 1rem 0 1rem;
        padding: 1.5rem 0;
        box-shadow: 3px 3px 20px #00000034;
        border: solid 1px #cebfac;
        border-radius: 1rem;
        transition: all 1s ease;
        cursor: pointer;
        &:hover {
            -webkit-transform: scale(1.05);
            -ms-transform: scale(1.05);
            transform: scale(1.05);
            transition: 1s ease;
        }
        &-title {
            padding-bottom: 1.6rem;
            font-size: 1.2rem;
            font-weight: 600;
        }
        &-text {
            padding: 0 1.2rem;
        }
    }
}
</style>
