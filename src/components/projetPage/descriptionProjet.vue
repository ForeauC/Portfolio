<template>
    <div class="projet">
        <article class="projet__card">
            <div class="projet__card-img">
                <img src="../../assets/pastry.png" alt="" />
                <a class="projet__card-text" href=""><p>Voir le projet</p></a>
            </div>
            <h4 class="projet__card-title">Pastry By Rita</h4>
            <hr />
            <p class="projet__card-description">Site vitrine ( Développer avec Vue JS )</p>
        </article>
        <article class="projet__card">
            <div class="projet__card-img">
                <img src="../../assets/groupomania.png" alt="" />
                <a class="projet__card-text" href=""><p>Voir le projet</p></a>
            </div>
            <h4 class="projet__card-title">Groupomania</h4>
            <hr />
            <p class="projet__card-description">
                Réseau social ( Développer avec Vue JS / Node JS / Express / Mongoo DB )
            </p>
        </article>
        <article class="projet__card">
            <div class="projet__card-img">
                <img src="../../assets/rock.png" alt="" />
                <a class="projet__card-text" href="https://www.rockandreeffishing.com"
                    ><p>Voir le projet</p></a
                >
            </div>
            <h4 class="projet__card-title">Rock & Reef Fishing</h4>
            <hr />
            <p class="projet__card-description">Site vitrine ( Développer avec un CMS )</p>
        </article>
    </div>
</template>

<script>
export default {
    name: 'descriptionProjet'
}
</script>

<style lang="scss">
.projet {
    align-items: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    margin-top: 4rem;
    width: 100%;
    &__card {
        width: calc(33.33333% - 4rem);
        height: auto;
        padding: 1rem;
        cursor: pointer;

        &-img {
            width: 100%;
            height: 300px;
            margin: 0 auto;
            box-shadow: 3px 3px 20px #00000034;
            position: relative;
            & img {
                width: 100%;
                height: 300px;
                object-fit: cover;
            }
        }
        &-title {
            font-size: 1.2rem;
            padding: 1rem 1rem 1rem 0;
            font-weight: 600;
            text-align: start;
        }
        & hr {
            width: 2rem;
            height: 0.1rem;
            border: none;
            background-color: #cebfac;
        }
        &-description {
            text-align: start;
            padding-top: 1rem;
        }
        &-text {
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.5s;
            background-color: #3131315e;
            backdrop-filter: blur(5px);
            & p {
                color: #fefefe;
                &:hover {
                    transition: all 1s;
                    color: #cebfac;
                }
            }
        }
    }
}

.projet__card-img:hover .projet__card-text {
    opacity: 1;
}
</style>
