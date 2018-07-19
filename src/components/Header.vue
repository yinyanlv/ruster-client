<template>
  <section id="app-header">
    <header class="frame-header">
      <div class="frame-wrapper">
        <div class="header-left">
          <a class="logo" href="/"><img src="../assets/images/logo.png"><span class="site-name">Ruster</span></a>
          <nav>
            <a href="/" class="active">首页</a>
            <a href="/wiki">Wiki</a>
            <a href="/explore">Explore</a>
          </nav>
        </div>
        <div class="header-right">
          <form class="search" method="get" action="todo/search">
            <input class="input-search" type="search" name="keyword" placeholder="请输入关键字" value="">
            <a class="btn btn-search" href="javascript:;"><i class="fa fa-search"></i></a>
          </form>
          <nav>
            <a href="/create-topic">发布话题</a>
            <a href="/user/admin">admin</a>
            <a href="/logout">退出</a>
            <a href="/register">注册</a>
            <a href="/login">登录</a>
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
  </section>
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

.m-frame-header {
  width: 100%;
  height: 4.5rem;
  position: fixed;
  background: #fff;
  display: none;
  top: 0;
  z-index: 100;
  border-bottom: .1rem solid $lighter-bd-color;

  .btn {
    height: 4.4rem;
    text-align: center;
    line-height: 4.4rem;
    font-size: 1.4rem;
    color: $font-color;
    padding: 0 .5rem;
  }

  .btn-menu {
    float: left;
    font-size: 2rem;
    width: 4.4rem;
    padding: 0;
  }

  .box-btns {
    float: right;
    height: 4.4rem;
    line-height: 4.4rem;
  }

  .icon-red-dot {
    position: relative;
    width: .6rem;
    height: .6rem;
    @include borderRadius(50%);
    background: red;
    top: -.8rem;
  }

  .title {
    padding: 0 15rem;
    text-align: center;
    @include setHeightGroup(4.4rem);

    a {
      display: inline-block;
      height: 3.2rem;
      width: 3.2rem;
      vertical-align: middle;
    }

    img {
      height: 3.2rem;
      width: 3.2rem;
      vertical-align: top;
    }
  }
}

.m-nav-bg {
  background: rgba(0, 0, 0, .5);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  display: none;
}

.m-nav {
  width: 100%;
  position: fixed;
  top: 4.5rem;
  background: #fff;
  display: none;
  z-index: 100;

  a {
    display: block;
    width: 100%;
    height: 3.7rem;
    line-height: 3.6rem;
    border-bottom: .1rem solid $lighter-bd-color;
    padding: 0 1rem 0 5rem;
    font-size: 1.4rem;
    color: $font-color;
    position: relative;

    .icon {
      width: 4.4rem;
      @include setHeightGroup(3.6rem);
      position: absolute;;
      left: 0;
      top: 0;
      text-align: center;
      font-size: 2rem;
    }
  }
}

@include mobile() {
  .frame-header {
    display: none;
  }

  .m-frame-header {
    display: block;
  }
}
</style>
