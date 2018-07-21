<template>
  <section class="not-found">
    <div class="info">此页面不存在 <span>:(</span></div>
    <div class="btn-line"><router-link :to="{path: '/'}">回到首页</router-link></div>
  </section>
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>
<style lang="scss">
@import "../assets/styles/scss/sdk/index";

.not-found {
  position: absolute;
  width: 100%;
  top: 30%;

  .info {
    text-align: center;
    font-size: 4.4rem;
    font-weight: bold;
    line-height: 6rem;
    color: $lighter-font-color;

    span {
      color: $lightest-font-color;
    }
  }

  .btn-line {
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 3rem;
    text-align: center;

    a {
      color: $theme-color;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

@include mobile() {

  .not-found {

    .info {
      font-size: 2.8rem;
      line-height: 3.8rem;
    }

    a {
      font-size: 1.8rem;
    }
  }
}
</style>
