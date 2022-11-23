<template>
    <div class="methode">
        <article class="methode__card">
            <div class="methode__card-number">
                <p>1</p>
            </div>
            <div class="methode__card-text">
                <h4 class="methode__card-text-title">MISE EN PLACE DU PROJET</h4>
                <p class="methode__card-text-description">
                    En appel visio ou par mail, nous échangeons sur vos besoins et les bases de
                    votre projet.<br /><br />Définition du design, des fonctionnalités et du délai
                    de réalisation.
                </p>
            </div>
        </article>
        <article class="methode__card">
            <div class="methode__card-number">
                <p>2</p>
            </div>
            <div class="methode__card-text">
                <h4 class="methode__card-text-title">ÉCHANGES DES DOCUMENTS</h4>
                <p class="methode__card-text-description">
                    Pour pouvoir lancer le développement, vous me transmettez les documents et
                    ressources qui seront utlisés (logo, contenu texte, etc).<br /><br />Signature
                    du devis final.
                </p>
            </div>
        </article>
        <article class="methode__card">
            <div class="methode__card-number">
                <p>3</p>
            </div>
            <div class="methode__card-text">
                <h4 class="methode__card-text-title">DÉVELOPPEMENT</h4>
                <p class="methode__card-text-description">
                    Réalisation du développement du projet. Vous serez informé de l'avancée.<br /><br />Des
                    points en visio ou mail seront possibles durant le développement.
                </p>
            </div>
        </article>
        <article class="methode__card">
            <div class="methode__card-number">
                <p>4</p>
            </div>
            <div class="methode__card-text">
                <h4 class="methode__card-text-title">DÉPLOIEMENT DU PROJET</h4>
                <p class="methode__card-text-description">
                    Dans un premier temps, nous validerons le site ou l'application. Si besoins des
                    modifications seront apportées.<br /><br />Aprés validations, le site sera
                    déployé en ligne.
                </p>
            </div>
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
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    margin-top: 4rem;
    width: 100%;
    &__card {
        width: calc(50% - 4rem);
        display: flex;
        margin: 0 1rem 0 1rem;
        padding: 1.5rem 0;
        &-number {
            width: 20%;
            & p {
                width: 80%;
                padding-top: 20px;
                padding-bottom: 20px;
                text-align: center;
                border: 1px solid #cebfac;
                cursor: pointer;
                &:hover {
                    color: white;
                    background-color: #cebfac;
                }
            }
        }
        &-text {
            width: 80%;
            text-align: start;
            padding-left: 10px;
            &-title {
                padding-bottom: 20px;
            }
        }
    }
}

@media screen and (max-width: 900px) {
    .methode__card {
        width: calc(100% - 2rem);
    }
}
</style>
