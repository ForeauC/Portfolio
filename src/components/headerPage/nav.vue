<template>
    <div class="nav">
        <img src="../../assets/menu.png" alt="" @click="showMenu()" />
        <div class="nav__content"></div>
        <ul class="nav__content-link" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
            <li class="nav__content-link-item">
                <a href=""> SERVICES </a>
            </li>
            <li class="nav__content-link-item">
                <a href=""> MÉTHODES </a>
            </li>
            <li class="nav__content-link-item">
                <a href=""> PROJETS </a>
            </li>
            <li class="nav__content-link-item">
                <a href=""> TARIFS </a>
            </li>
            <li class="nav__content-link-item">
                <a href=""> À PROPOS </a>
            </li>
            <li class="nav__content-link-item">
                <a href=""> CONTACT </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'navBar',

    data() {
        return {
            showMobileMenu: false
        }
    },
    methods: {
        showMenu() {
            this.showMobileMenu = !this.showMobileMenu
        }
    }
}
</script>

<style lang="scss">
.nav {
    background-color: #2f31336a;
    padding-top: 25px;
    padding-bottom: 25px;
    & img {
        display: none;
    }
    &__content {
        &-link {
            display: flex;
            justify-content: space-around;
            &-item {
                font-size: 1.2rem;
                & a:hover {
                    transition: all 1s;
                    color: #cebfac;
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .nav {
        position: absolute;
        width: 100%;
        padding: 0;
        background-color: #313131;
        & img {
            width: 50px;
            height: auto;
            display: block;
            margin: 0 auto;
            padding: 10px;
            cursor: pointer;
        }

        .open-menu {
            opacity: 1;
            height: 100vh;
        }
        .closed-menu {
            opacity: 0;
            height: 0;
            padding: 0;
        }

        .nav__content {
            z-index: 100;
            position: relative;
            transition: all 0.2s ease-out;
            &-link {
                display: block;
                text-align: center;
                & li {
                    padding-top: 30px;
                }
                & a {
                    color: #fff;
                }
                & a:hover {
                    transition: all 1s;
                    color: #cebfac;
                }
            }
        }
    }
}
</style>
