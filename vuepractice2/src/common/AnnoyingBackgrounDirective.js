import Vue from 'vue';

export const  AnnoyingBackgroun = {
    bind(el, binding, vnode) {
        const defaultBackgroundColor = 'green;';
        const color = binding.value || defaultBackgroundColor;
        if (el) {
            el.style.backgroundColor = color;
            // el.elm.style.backgroundColor = color;
        }
    }
};

Vue.directive('annoying--background', AnnoyingBackgroun);
