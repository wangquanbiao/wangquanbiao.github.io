<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'


// 绑定点击事件 获取点击鼠标位置 显示动画
window.addEventListener("click", (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  const body = document.body;
  const html = document.documentElement;

  // 点击屏幕生成图标的字体颜色
  const colorArr = ['#0cf', '#ffcc00', '#fff']
  // 生成一个随机索引值
  const randomIndex = Math.floor(Math.random() * colorArr.length);


  html.style.setProperty('--color_font', `${colorArr[randomIndex]}`);

  // 设置自定义属性值，注意属性值应为字符串类型
  // body.style.setProperty('--pagex', `${event.pageX}`);
  // body.style.setProperty('--pagey', `${event.pageY}`);

  html.style.setProperty('--clientx', `${event.clientX}`);
  html.style.setProperty('--clienty', `${event.clientY}`);
  // html.style.setProperty('--scrolly', `${window.pageYOffset}`);

  // if (target) {
  //   target.style.setProperty('--offsetx', `${event.offsetX}`);
  //   target.style.setProperty('--offsety', `${event.offsetY}`);

  //   const parentElement = target.parentElement;
  //   if (parentElement) {
  //     parentElement.style.setProperty('--target-width', `${target.clientWidth}`);
  //     parentElement.style.setProperty('--target-height', `${target.clientHeight}`);
  //     parentElement.style.setProperty('--target-left', `${target.offsetLeft}`);
  //     parentElement.style.setProperty('--target-top', `${target.offsetTop}`);
  //   }
  // }
});

</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header> -->
  <div class="wrapper_container">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.wrapper_container {
  cursor: pointer;

}


.wrapper_container:active::after {
  transform: translate(-50%, -50%);
  opacity: 1;
  transition: 0s;
  left: -999px;
}

.wrapper_container::after {
  content: '☆';
  position: fixed;
  z-index: 999;
  left: calc(var(--clientx, -999) * 1px);
  top: calc(var(--clienty, -999) * 1px);
  transform: translate(-50%, calc(-100% - 20px));
  opacity: 0;
  transition: transform .3s, opacity 1s;
  color: var(--color_font);
  font-size: 20px;
  font-weight: 900;

}
</style>
