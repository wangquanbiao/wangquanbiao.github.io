<script setup lang="ts">
import { onMounted, reactive,ref } from 'vue';
import { userRequest } from '@/apis/api/user'
import * as jinrishici from 'jinrishici'
import type { Poetry } from '@/types/home'
let poetry = ref<Poetry>({});

onMounted(() => {
  // userRequest({ userName: '张三', psw: '1234' }).then((res: any) => {
  // })

  jinrishici.load((result: any) => {
    if (result.status) {
      poetry.value = {...(result.data as Poetry)};
      localStorage.setItem('token',result.token)

    }
  });
});

</script>

<template>
  <div class="home_view">
    <StarsBg></StarsBg>
    <div class="home_content">

      <div class="welcome">
        <p>
          有朋自远方来，不亦说乎！欢迎来到我的世界，希望你能在这了解到一个真正的我，也希望我们能成为志同道合的朋友。
        </p>
        <p class="eraser">
          <span class="text">
            有朋自远方来，不亦说乎！欢迎来到我的世界，希望你能在这了解到一个真正的我，也希望我们能成为志同道合的朋友。
          </span>
        </p>
      </div>

      <div class="head_portrait_box" data-aos="fade-up">

        <div class="head_portrait_item">
          <div class="head_portrait"></div>
          <div class="text">“{{ poetry?.content }}” -- {{ poetry?.origin?.author
            }}</div>
        </div>

        <i class="chevron bottom">

        </i>

      </div>


    </div>
  </div>
</template>


<style lang="scss" scoped>
@property --p {
  /* 属性的语法规则  表示是个百分百 */
  syntax: '<percentage>';
  /* 初始值 */
  initial-value: 0%;
  /* 是否能被继承 */
  inherits: false;
}

@keyframes erase2 {
  to {
    --p: 100%;
  }
}


.welcome {
  width: 80%;
  margin: 1em auto;
  font-size: 20px;
  text-align: center;
  color: aliceblue;
  line-height: 2;
  /* 段落首行缩进*/
  text-indent: 2em;
  position: relative;

  .eraser {
    position: absolute;
    /* 设置偏移量为0*/
    inset: 0;

    .text {
      background: linear-gradient(to right,
          transparent var(--p),
          #013cad calc(var(--p) + 30px));
      color: transparent;
      animation: erase2 5s linear forwards;

    }

  }
}

/* 下箭头的动画 */
@keyframes pulse {
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, 10px);
  }

  100% {
    transform: translate(0, 0);
  }
}


.home_view {
  width: 100%;
  height: 100%;

  .home_content {
    padding: 20px;
    min-height: calc(100vh - 40px);
    max-height: calc(100vh - 40px);
    overflow-y: auto;


    .head_portrait_box {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: calc(100vh - 40px);

      .head_portrait_item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .chevron {
        margin-top: 65px;
        display: block;
        animation: pulse 2s infinite;
        color: #FF4081;

        &::before {
          top: 0;
          transform: rotate(45deg);
          border-style: solid;
          border-width: 0 0.25em 0.25em 0;
          content: '';
          display: inline-block;
          height: 20px;
          position: relative;
          vertical-align: top;
          width: 20px;
        }
      }

      .head_portrait {
        width: 200px;
        height: 200px;
        background-image: url('../assets/image/sky.jpg');
        background-size: 100% 100%;
        border-radius: 999px;
      }

      .text {
        margin-top: 40px;
        text-align: center;
        font-size: 20px;
      }


    }
  }
}
</style>