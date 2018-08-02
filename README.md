# VUE ♂ SVG

## inline svg vs icon font

### 矢量显示

- icon font 浏览器以文本方式由于抗锯齿的影响图标没有原始 svg 来的锐利

- inline SVG  滑溜溜的矢量图

![5b6321fda34ee](https://i.loli.net/2018/08/02/5b6321fda34ee.jpg)




### CSS 控制

- icon font 可以通过 CSS 控制图标大小（ 使用 font-size）， 颜色，阴影，旋转等。

- inline SVG  除了这些。 控制图标的各个部分、2使用 CSS 控制 SVG 特有的属性，如描边属性



### 定位

- icon font：通过伪元素插入的，它依赖于 line-height ， vertical-align ，letter-spacing ， word-spacing ，字体字形设计，受字体影响。

- inline SVG：SVG 的显示尺寸就是它本身的尺寸

![](https://pic3.zhimg.com/80/43b1103cf12e45fe3e2c161698ec4b8c_hd.jpg)



![](https://pic2.zhimg.com/80/bf4526ea8bdc780a5293cd202344dc88_hd.jpg)



### 诡异的问题

icon font: 

- 它被跨域加载，而没有使用正确的 CORS 头信息，Firefox。

- 因为任何原因，字体文件加载失败（网络抽风，服务器故障等

- 一些奇怪的 Chrome 漏洞会跳过 @font-face 规则，并使用 fallback 的字体取代它。

- 一些神奇的浏览器不支持 @font-face。



inline SVG  
inline SVG 是在文档流中，如果浏览器支持，它就会显示



### 语义

- icon font  
如果是正确地使用，字体还是图标。

- inline SVG  
图标是小的图像。





### 无障碍

- icon font  屏幕阅读识别为「文本」从而朗读，而视觉障碍人士并不需要这些无意义的「文本」。

- inline SVG  svg 可适当的添加，如 <title>  
、<desc>和 aria-labelledby 可以很好地透过浏览器传达信息。



### 浏览器兼容性

- icon font  
很广泛。即使是 IE 6。

- inline SVG  
还不错，问题出在 IE 8 和 Android 2.3-。可以使用 fallback 规则，但不完美。



## VUE ICON



## [vue-awesome](https://github.com/Justineo/vue-awesome) 实现

![5b632884c46b5](https://i.loli.net/2018/08/02/5b632884c46b5.png)





- N 个同样的图标就会生成 N 份同样的 inline svg

- 依赖 [Font Awesome](https://fontawesome.com/)  中的图标

- 使用不方便（import 导入，按需导）

- 自定义图标不方便





## 页面中使用 SVG 的方式

- Img/object 标签直接使用，使用时单独请求。项目中图标过多的化会带来过多的 http 请求

- svg sprite 类似于 css sprite，通过 `background-position`等属性控制其显示的位置，可控性差，无法方便的通过 css 进行控制样式

- Data URIs css 中直接使用 base64 编码后的 svg，但可控性差，无法使用 css 进行样式定制，可能会存在潜在的效率问题

- Inline svg 复用性差，效率低

  





## SVG SYMBOLS SPRITE



### `<symbol>` && `<use>`



`<symbol>` 元素用来对元素进行分组,它不会被直接显示，大概相当于定义一个模板，然后使用 `<use>` 元素引用并进行渲染。


假设有个 SVG 文件: `icon.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> 
  <symbol viewBox="0 0 24 24" id="heart"> 
    <path fill="#E86C60" d="M17,0c-1.9,0-3.7,0.8-5,2.1C10.7,0.8,8.9,0,7,0C3.1,0,0,3.1,0,7c0,6.4,10.9,15.4,11.4,15.8 c0.2,0.2,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2C13.1,22.4,24,13.4,24,7C24,3.1,20.9,0,17,0z"></path> 
  </symbol> 
  <symbol viewBox="0 0 32 32" id="arrow">
    <path fill="#0f0f0f" d="M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M22.8,13.6l-6,8C16.6,21.9,16.3,22,16,22 s-0.6-0.1-0.8-0.4l-6-8c-0.2-0.3-0.3-0.7-0.1-1S9.6,12,10,12h12c0.4,0,0.7,0.2,0.9,0.6S23,13.3,22.8,13.6z">
    </path>
  </symbol>
</svg>
```

页面使用：

```xml
<svg>
  <use xlink:href="./icon.svg#heart"/>
</svg>
```
在IE中通过<use>引用外部SVG文件的方法是不可行的，IE9以上也不支持，Edge 才支持。

正确的使用姿势应该是内联使用：

```xml
<body>
  <svg style="display: none;"> 
    <symbol viewBox="0 0 24 24" id="heart">
      <path fill="#E86C60" d="M17,0c-1.9,0-3.7,0.8-5,2.1C10.7,0.8,8.9,0,7,0C3.1,0,0,3.1,0,7c0,6.4,10.9,15.4,11.4,15.8 c0.2,0.2,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2C13.1,22.4,24,13.4,24,7C24,3.1,20.9,0,17,0z">
      </path>
    </symbol>
  </svg>
  <svg>
    <use xlink:href="#heart"/>
  </svg>
</body>
```

## Vue + SVG SYMBOLS SPRITE = VUE ICON

webpack 集成 svg-sprite，使用 svg-sprite 制作 svg symbols sprite

```javascript
{
  test: /\.svg$/,
  include: [resolve('src/assets/icons')],
  use: [
    {
      loader: 'svg-sprite-loader',
      options: {
        symbolId: 'icon-[name]'
      }
    }
  ]
}
```

注意避免 icons 下的 svg 文件被 url-loader 处理。

```javascript
{
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    exclude: [resolve('src/assets/icons')], // 默认不处理该文件夹的命中的文件
    options: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
    }
}
```

封装使用时的 svg component:


```html
<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
```

```javascript
const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('@/assets/icons', false, /\.svg$/);
requireAll(req);

export default {
  name: 'svg-icon',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return `svg-icon ${this.className}`;
      }
      return 'svg-icon';
    },
  },
};
```


使用 svgo 对 svg 文件进行精简：

```javascript
const svgoConfig = require('../config/svgo-config.json');

{
    test: /\.svg$/,
    include: [resolve('src/assets/icons')],
    use: [
      {
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]'
        }
      },
      {
        loader: 'svgo-loader',
        options: svgoConfig,
      }
    ]
},
```

## 使用 iconfont

```html
<script src="//at.alicdn.com/t/font_775504_9ioygazhi8o.js"></script>
```

```html
<template>
  <svg class="common-icon" aria-hidden="true">
    <use :xlink:href="'#icon-' + name"></use>
  </svg>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style>
.common-icon {
  overflow: hidden;
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;

  fill: currentColor;
}
</style>
```

更新维护方便！

END


参考文章：

- [使用SVG symbols建立图标系统](https://www.w3cplus.com/svg/how-to-create-an-icon-system-using-svg-symbols.html)
- [基于svg-sprite的svg icon方案实践](http://tech.lede.com/2018/03/28/fe/svg-icon/)
- [Inline SVG vs Icon Fonts](https://css-tricks.com/icon-fonts-vs-svg/)
