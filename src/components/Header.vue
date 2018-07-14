<template>
  <div id="app-header">
    <header class="frame-header">
      <div class="frame-wrapper">
        <div class="header-left">
          <a class="logo" href="todo"><img src="../assets/images/logo.png"><span class="site-name">Ruster</span></a>
          <nav>
            <a href="/">首页</a>
            <a href="/wiki">Wiki</a>
            <a href="/resource">资源</a>
          </nav>
        </div>
        <div class="header-right">
          <form class="search" method="get" action="todo/search">
            <input class="input-search" type="search" name="keyword" placeholder="请输入关键字" value="">
            <a class="btn btn-search" href="javascript:;"><i class="fa fa-search"></i></a>
          </form>
          <nav>
            <a href="todo/create-topic">发布话题</a>
            <a href="todo/user/todo">todo</a>
            <a href="todo/logout">退出</a>
            <a href="todo/register">注册</a>
            <a href="todo/login">登录</a>
          </nav>
        </div>
      </div>
    </header>

    <header class="m-frame-header">
      <a href="javascript:;" class="btn btn-menu" id="m-btn-menu"><i class="fa fa-navicon"></i></a>
      <div class="box-btns">
        <a class="btn" href="todo/create-topic">发布话题</a>
        <a class="btn" href="todo/register">注册</a>
        <a class="btn" href="todo/login">登录</a>
      </div>
      <div class="title">
        <a href="todo"><img src="../assets/images/logo.png"></a>
      </div>
    </header>

    <div class="m-nav-bg" id="m-nav-bg"></div>
    <nav class="m-nav" id="m-nav">
      <a href="todo"><span class="icon"><i class="fa fa-home"></i></span> 首页</a>
      <a href="todo/resource"><span class="icon"><i class="fa fa-file-text"></i></span> 资源</a>
      <a href="todo/user/"><span class="icon"><i class="fa fa-user-circle"></i></span> 用户中心</a>
      <a href="todo/logout"><span class="icon"><i class="fa fa-sign-out"></i></span> 退出</a>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'app-header'
}
</script>
<style lang="scss">
@import "../assets/styles/scss/sdk/index";

.frame-header {
  height: 5rem;
  background: #fff;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  @include boxShadow(0 .1rem .1rem $box-shadow-color);

  nav {
    float: left;
    font-size: 0;
    padding-left: 1.5rem;

    a {
      max-width: 12rem;
      display: inline-block;
      height: 5rem;
      padding: 1.5rem 1.5rem 1.2rem;
      border-bottom: .3rem #fff solid;
      font-size: 1.4rem;
      line-height: 2rem;
      color: $font-color;
      @include transition(all .2s ease-in-out);
      @extend %textOverflowEllipsis;

      &:hover, &.active {
        border-bottom-color: $theme-color;
        color: $theme-color;
      }
    }

    .icon-red-dot {
      position: relative;
      width: .6rem;
      height: .6rem;
      @include borderRadius(50%);
      background: red;
      top: -1rem;
    }
  }
}

.header-left {
  float: left;
  height: 5rem;

  .logo {
    float: left;
    display: inline-block;
    height: 4rem;
    padding: .5rem 0;

    img {
      width:4rem;
      height: 4rem;
      vertical-align: middle;
    }

    .site-name{
      font-size: 2.4rem;
      color: $font-color;
      font-weight: bold;
      display: inline-block;
      vertical-align: middle;
      margin-left:.5rem;
    }
  }
}

.header-right {
  float: right;
  height: 5rem;

  .search {
    float: left;
    height: 5rem;
    padding: 1rem 0 1rem 2rem;
    position: relative;

    input {
      width: 20rem;
      font-size: 1.2rem;
      padding: .4rem 3rem .4rem .8rem;
    }

    .btn-search {
      position: absolute;
      width: 3rem;
      @include setHeightGroup(3rem);
      right: 0;
      top: 1rem;
      z-index: 110;
      text-align: center;
      font-size: 1.8rem;
      color: $lightest-font-color;
    }
  }
}
</style>
