<template>
    <div class="title-contact">
        <h2 class="title-contact__h2">CONTACT</h2>
        <hr class="title-contact__hr" />
    </div>
    <div class="contact">
        <div class="contact__mail">
            <h3 class="contact__mail-title">Par mail</h3>
            <p class="contact__mail-text">clement.foreau@gmail.com</p>
        </div>
        <div class="contact__social">
            <div class="contact__social-title">
                <h3>Sur les réseaux</h3>
            </div>
            <div class="contact__social-icon">
                <a href="https://github.com/ForeauC">
                    <img class="icon-contact" src="../../assets/github.png" alt="" />
                </a>
                <a href="#">
                    <img class="icon-contact" src="../../assets/linkedin.png" alt="" />
                </a>
                <a href="#">
                    <img class="icon-contact" src="../../assets/whatsapp.png" alt="" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contactPage'
}
</script>

<style lang="scss">
.title-contact {
    margin-top: 4rem;
    text-align: center;
    &__h2 {
        font-size: 2.5rem;
        color: #fefefe;
    }
    &__hr {
        width: 5rem;
        height: 0.3rem;
        border: none;
        background-color: #cebfac;
        margin: 1.2rem auto;
    }
}

.contact {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
    width: 100%;
    &__mail {
        width: 50%;
        &-title {
            font-size: 1.6rem;
            padding-bottom: 1rem;
        }
        &-text {
            font-size: 1.6rem;
            color: #fefefe;
        }
    }
    &__social {
        width: 50%;
        &-title h3 {
            font-size: 1.6rem;
            padding-bottom: 1rem;
        }
        & .icon-contact {
            padding: 0 1rem;
        }
    }
}

@media screen and (max-width: 900px) {
    .contact {
        display: block;
        &__mail {
            width: 100%;
        }
        &__social {
            width: 100%;
            padding-top: 2rem;
        }
    }
}

@media screen and (max-width: 400px) {
    .contact__mail-text {
        font-size: 1.2rem;
    }
}
</style>
