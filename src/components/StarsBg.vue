<template>
    <!-- @size：宽高 -->
    <div class="stars_view">
        <css-doodle>
            :doodle {
            @grid: 12 / 50vmin 80vmin;
            @size: 100vw 100vmin;
            perspective: 10px;
            }
            :container {
            perspective: 50px;
            transform-style: preserve-3d;
            }
            position: absolute;
            top: 0;
            left: 0;
            width: 2px;
            height: 2px;
            border-radius: 50%;
            left: 50%;
            top: 50%;
            background: hsl(@rn(1, 255, 3), @rn(50%, 90%), @rn(50%, 90%));
            transform: scale(@rn(1, 10, 3)) translate3d(@rn(-50, 50, 3)vw, @rn(-50, 50, 3)vh, @rn(-100, 20)px);
            animation: move @rn(5, 15, 3)s infinite @rn(-20, -10, 3)s linear alternate;
            box-shadow: 0 0 1px #fff, 0 0 5px #fff;
            @keyframes move {
            100% {
            margin-top: 500px;
            }
            }
        </css-doodle>
    </div>
</template>


<style lang="scss" scoped>
.stars_view {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url('../assets/image/bg.png');
    background-size: 100% 100%;
}

@keyframes change {
    10% {
        filter: hue-rotate(360deg);
    }
}
</style>
