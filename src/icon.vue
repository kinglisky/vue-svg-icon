<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
// 引入所有的svg的文件
const requireAll = (ctx) => ctx.keys().map(ctx);
const req = require.context('./assets', true, /\.svg$/);
requireAll(req);

export default {
    name: 'custom-icon',

    props: {
        name: {
            type: String,
            required: true,
        },

        className: {
            type: String,
        },
    },
    computed: {
        iconName() {
            return `#icon-${this.name}`;
        },

        svgClass() {
            if (this.className) {
                return `svg-icon ${this.className}`;
            }
            return 'svg-icon';
        },
    },
};
</script>

<style scoped>
.svg-icon {
    overflow: hidden;
    vertical-align: middle;
    fill: currentColor;
}
</style>
