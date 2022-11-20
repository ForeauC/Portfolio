<template>
    <div class="header">
        <headHome />
        <navBar />
        <titleHome />
    </div>
    <div id="service" class="serv container">
        <titleService />
        <descriptionService />
    </div>
    <div id="methode" class="method container">
        <titleMethode />
        <descriptionMethode />
    </div>
    <div id="projet" class="proj container">
        <titleProjet />
        <descriptionProjet />
    </div>
    <div id="propos" class="present container">
        <titlePresentation />
        <descriptionPresentation />
    </div>
    <div id="contact" class="contact-container">
        <div class="cont container">
            <contactPage />
        </div>
        <footerPage />
    </div>
</template>

<script>
import headHome from '@/components/headerPage/head.vue'
import navBar from '@/components/headerPage/nav.vue'
import titleHome from '@/components/headerPage/title.vue'
import titleService from '@/components/servicePage/titleService.vue'
import descriptionService from '@/components/servicePage/descriptionService.vue'
import titleMethode from '@/components/methodePage/titleMethode.vue'
import descriptionMethode from '@/components/methodePage/descriptionMethode.vue'
import titleProjet from '@/components/projetPage/titleProjet.vue'
import descriptionProjet from '@/components/projetPage/descriptionProjet.vue'
import titlePresentation from '@/components/presentationPage/titlePresentation.vue'
import descriptionPresentation from '@/components/presentationPage/descriptionPresentation.vue'
import contactPage from '@/components/contactPage/contact.vue'
import footerPage from '@/components/footerPage/footer.vue'

export default {
    name: 'App',
    components: {
        headHome,
        navBar,
        titleHome,
        titleService,
        descriptionService,
        titleMethode,
        descriptionMethode,
        titleProjet,
        descriptionProjet,
        titlePresentation,
        descriptionPresentation,
        contactPage,
        footerPage
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,800&display=swap');

* {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    color: #8f8f8f;
}

a {
    text-decoration: none;
    color: #fefefe;
}

li {
    list-style-type: none;
}

.header {
    width: 100%;
    height: auto;
    background-image: url('assets/background.jpg');
    background-size: cover;
}

.container {
    width: 85%;
    margin: auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding-top: 30px;
    padding-bottom: 60px;
    text-align: center;
}

.contact-container {
    background-color: #313131;
}
</style>
