<!---------------------------- TEMPLATE ----------->
<template>
  <div class="controlPrincipal">
    <div class="flex nowrap" ref="slideshow">
      <!-- slide -->
      <div class="slide" v-for="(slide, index) in slides" :key="index">
        <a href="#">
          <img :src="slide.img" alt="" />
        </a>

        <div class="textSlide">
          <p>{{ slide.text }}</p>
        </div>
      </div>
      <!-- slide -->
    </div>

    <!-- ------- -->
    <div class="controles">
      <button class="boton" @click="anterior">
        <img
          src="https://raw.githubusercontent.com/falconmasters/slideshow-infinito-react/5243d5e5245957be086c21b308da6af09799222f/src/img/iconmonstr-angel-left-thin.svg"
          alt=""
        />
      </button>
      <button class="boton derecho" @click="siguiente">
        <img
          src="https://raw.githubusercontent.com/falconmasters/slideshow-infinito-react/5243d5e5245957be086c21b308da6af09799222f/src/img/iconmonstr-angel-right-thin.svg"
          alt=""
        />
      </button>
    </div>
  </div>
</template>
<!----------------------------- SCRIPTS ---------->
<script>
export default {
  name: "SlideShow",

  props: {
    slides: Array,
    velocidad: {
      type: Number,
      default: 300,
    },
  },

  data() {
    return {
      currentSlide: 0,
    };
  },

  methods: {
    anterior() {
      const slideshow = this.$refs.slideshow;
      if (slideshow.children.length > 0) {
        const index = slideshow.children.length - 1;
        const ultimoElemento = slideshow.children[index];

        slideshow.insertBefore(ultimoElemento, slideshow.firstChild);

        slideshow.style.transition = "none";
        const tamanoSlide = ultimoElemento.offsetWidth + "px";
        slideshow.style.transform = `translateX(-${tamanoSlide})`;

        setTimeout(() => {
          slideshow.style.transition = this.velocidad + "ms ease-out all";
          slideshow.style.transform = `translateX(0)`;
        }, 30);
      }
    },

    siguiente() {
      const slideshow = this.$refs.slideshow;

      if (slideshow.children.length > 0) {
        const primerElemento = slideshow.children[0];
        slideshow.style.transition = this.velocidad + "ms ease-out all";
        const tamanoSlide = primerElemento.offsetWidth + "px";
        // mover
        slideshow.style.transform = `translateX(-${tamanoSlide})`;
        //
        const transicion = () => {
          // mover primer elemento al final
          slideshow.appendChild(primerElemento);
          // reiniciar position
          slideshow.style.transition = "none";
          slideshow.style.transform = `translateX(0)	`;
          slideshow.removeEventListener("transitionend", transicion);
        };

        // event listener
        slideshow.addEventListener("transitionend", transicion);
      }
    },
  },
};
</script>
<!----------------------------- STYLES ---------->
<style scoped lang="scss">
.controlPrincipal {
  position: relative;
}
.slide {
  min-width: 100%;
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 10;
  max-height: 500px;
  position: relative;
  img {
    width: 100%;
    vertical-align: top;
  }
}
.textSlide {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 100%;
  padding: 10px 60px;
  text-align: center;
  position: absolute;
  bottom: 0;
  @media screen and(max-width: 700px) {
    position: relative;
    background: rgba(0, 0, 0, 0.5);
  }
}
.controles {
  position: absolute;
  top: 0;
  z-index: 11;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.boton {
  pointer-events: all;
  background: none;
  cursor: pointer;
  widows: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: 0.3s ease all;
  filter: drop-shadow(-2px 0px 0px #fff);
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
}
.derecho {
  right: 0;

  filter: drop-shadow(2px 0px 0px #fff);
}
</style>
