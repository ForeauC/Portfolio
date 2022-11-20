<template>
    <div class="title">
        <div class="title__logo">
            <svg
                class="title__logo-img"
                id="Calque_2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 178.36 138.06"
            >
                <g id="Calque_2-2">
                    <g>
                        <path
                            class="cls-1"
                            d="M135.3,44.07l-21.14,13.39v80.6l21.14-28.54v-39.06h23v-17.05h-23v-9.34Zm19,13.34v9.05h-23v41.74l-13.14,17.74V59.67l13.14-8.33v6.07h23Z"
                        />
                        <polygon
                            class="cls-1"
                            points="116.16 4.45 116.16 39.43 133.3 28.57 133.3 19.51 169.89 19.51 178.36 27.06 178.36 4.45 116.16 4.45"
                        />
                        <path
                            class="cls-1"
                            d="M93.92,101.15c-3.49,4.18-8.76,10.49-12.13,11.35-5.04,1.28-10.61,1.93-16.54,1.93-9.28,0-17.16-2.12-23.42-6.31-1.57-1.05-3.05-2.2-4.44-3.44l-16.61,10.52c3.53,3.41,7.49,6.36,11.86,8.81,9.46,5.31,20.37,8,32.44,8,7.01,0,13.39-.69,18.95-2.05,5.54-1.36,10.59-3.06,15.02-5.07l.74-.33v-29.8l-2.15,2.15c-.97,.97-2.24,2.49-3.71,4.25Z"
                        />
                        <path
                            class="cls-1"
                            d="M84.39,2.1c-5.88-1.39-12.15-2.1-18.61-2.1-12.53,0-23.88,2.77-33.76,8.24-9.92,5.5-17.82,13.37-23.5,23.4C2.87,41.64,0,53.53,0,67s2.84,25.35,8.43,35.34c.15,.27,.3,.53,.46,.79l1.21,2.06,20.27-12.84-.97-2.09c-3.09-6.9-4.66-14.73-4.66-23.27s1.59-16.36,4.74-23.25c3.08-6.76,7.69-12.21,13.68-16.19,5.96-3.97,13.52-5.98,22.45-5.98,5.57,0,10.9,.7,15.85,2.07,2.8,.78,7.86,6.91,10.88,10.58,1.51,1.84,2.82,3.42,3.89,4.49l5.56,5.56V8.41l-1.82-.9c-4.46-2.2-9.7-4.02-15.57-5.41Zm13.39,32.4c-.7-.81-1.49-1.77-2.36-2.82-4.86-5.89-9.18-10.85-12.9-11.89-5.3-1.47-10.99-2.22-16.92-2.22-9.73,0-18.03,2.24-24.66,6.65-6.63,4.41-11.71,10.42-15.1,17.86-3.39,7.42-5.1,15.8-5.1,24.91s1.53,16.69,4.55,23.84l-13.8,8.74c-4.96-9.22-7.48-20.18-7.48-32.59s2.69-24,8-33.39c5.3-9.38,12.69-16.73,21.95-21.87,9.27-5.14,19.98-7.74,31.82-7.74,6.16,0,12.11,.67,17.69,1.99,5.4,1.28,10.21,2.93,14.31,4.91v23.6Z"
                        />
                    </g>
                </g>
            </svg>
        </div>
        <div class="title__text">
            <h1>DÉVELOPPEUR WEB<br /><span>FRONT-END</span></h1>
        </div>
        <div class="title__button">
            <button><a href="#service" v-smooth-scroll>En savoir plus</a></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'titleHome'
}
</script>

<style lang="scss">
.title {
    color: #fefefe;
    width: 100%;
    text-align: center;
    align-items: center;
    &__logo {
        max-width: calc(100px + 6vw);
        margin: 0 auto;
        padding-top: 60px;
        padding-bottom: 60px;
        &-img {
            width: 100%;
            height: auto;
            fill: #8f8f8f;
        }
    }
    &__text {
        font-size: calc(12px + 2vw);
        line-height: 85px;
        padding: 0 10px 0 10px;

        padding-bottom: calc(30px + 2vh);
        & span {
            font-size: calc(12px + 2vw);
        }
    }
    &__button {
        text-align: center;
        padding-bottom: 3rem;
        & button {
            padding: 10px 40px;
            background-color: #cebfac;
            border: none;
            border-radius: 5px;
            color: #fefefe;
            font-weight: 500;
            font-size: 15px;
            transition: 0.3s;
            cursor: pointer;
            &:hover {
                animation: pulse 1s infinite;
                transition: 0.3s;
            }
        }
    }
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    70% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(1);
    }
}

@media screen and (max-width: 768px) {
    .title {
        padding-top: 80px;
    }
}
</style>
