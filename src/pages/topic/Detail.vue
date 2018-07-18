<template>
  <section class="page-topic-detail">
    <div class="block-main">
      <div class="panel">
        <article class="article">
          <div class="article-header">
            <div class="title">
              <!-- TODO -->
              <!--<span class="tag">置顶</span>-->
              <!--<span class="tag">精华</span>-->
              <h3>title</h3>
            </div>
            <div class="info">
              <span class="item">• 版块 <span class="tag tag-category">aaa</span></span>
              <span class="item">• 作者 <a href="#">abc</a></span>
              <span class="item">• 发布于 <span class="datetime-ago">3小时</span></span>
              <!-- TODO -->
              <!--<span class="item">• 最后一次编辑 <span class="datetime-ago"></span></span>-->
              <!--<span class="item">• n 个回复</span>-->
              <!--<span class="item">• n 次浏览</span>-->
            </div>
            <div class="operator operator-topic">
              <div>
                <span class="btn"><i class="fa fa-arrow-circle-o-up"></i><span class="text">已置顶</span></span>
                <span class="btn"><i class="fa fa-arrow-circle-o-up"></i><span class="text">置顶</span></span>
                <span class="btn"><i class="fa fa-graduation-cap"></i><span class="text">已设为精华</span></span>
                <span class="btn"><i class="fa fa-graduation-cap"></i><span class="text">设为精华</span></span>
                <span class="btn btn-edit"><i class="fa fa-edit"></i>编辑</span>
                <span class="btn btn-delete"><i class="fa fa-trash"></i>删除</span>
                <span class="btn btn-collect"><i class="fa fa-star"></i><span class="text">已收藏</span></span>
                <span class="btn btn-collect"><i class="fa fa fa-star-o"></i><span class="text">收藏</span></span>
                <span class="btn btn-agree"><i class="fa fa-thumbs-up"></i><span class="text">已赞</span> <span class="num">n</span></span>
                <span class="btn btn-agree"><i class="fa fa-thumbs-o-up"></i><span class="text">赞</span> <span class="num">n</span></span>
                <span class="btn btn-disagree" data-disagreed="true"><i class="fa fa-thumbs-down"></i><span class="text">已踩</span> <span class="num">n</span></span>
                <span class="btn btn-disagree" data-disagreed="false"><i class="fa fa-thumbs-o-down"></i><span class="text">踩</span> <span class="num">n</span></span>
              </div>
            </div>
          </div>
          <div class="article-content">
            <div class="markdown-body">
              <div class="markdown-text" v-html="topicContent" v-highlight></div>
            </div>
          </div>
        </article>
      </div>
      <div class="panel">
        <div class="panel-header">
          <div class="title"><span>n</span> 条回复</div>
        </div>
        <div class="panel-content">

          <div class="comment highlight">
            <div class="avatar">
              <a href="#"><img src="/static/images/avatar.jpg"></a>
            </div>
            <div class="info">
              <dl>
                <dt>
                  <div class="comment-info">
                    <a href="#" class="username">admin</a> • n 楼 • <span class="datetime-ago">3小时</span> • <span class="tag">作者</span>
                  </div>
                  <div class="operator operator-comment">
                    <span class="btn btn-edit"><i class="fa fa-edit"></i> 编辑</span>
                    <span class="btn btn-delete"><i class="fa fa-trash"></i> 删除</span>
                    <span class="btn btn-reply"><i class="fa fa fa-mail-reply"></i> <span class="text" data-show-editor="false">回复</span></span>
                    <span class="btn btn-agree"><i class="fa fa-thumbs-up"></i> <span class="text">已赞</span> <span class="num">n</span></span>
                    <span class="btn btn-agree"><i class="fa fa-thumbs-o-up"></i> <span class="text">赞</span> <span class="num">n</span></span>
                    <span class="btn btn-disagree"><i class="fa fa-thumbs-down"></i> <span class="text">已踩</span> <span class="num">n</span></span>
                    <span class="btn btn-disagree"><i class="fa fa-thumbs-o-down"></i> <span class="text">踩</span> <span class="num">n</span></span>
                  </div>
                </dt>
                <dd>
                  <div class="markdown-body">
                    comment-content
                  </div>
                </dd>

                <!-- editor -->
                <dd class="editor-wrapper-box">
                  <div class="editor-wrapper">
                    <div class="editor-wrapper-inner">
                      <mavon-editor :boxShadow="false" :subfield="false" :externalLink="false"></mavon-editor>
                    </div>
                    <div class="btn-line">
                      <span class="btn btn-primary btn-reply-topic">回复</span>
                    </div>
                  </div>
                </dd>
              </dl>
            </div>
          </div>

          <div class="no-data">
            暂无回复
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel-header">
          <div class="title">添加回复</div>
        </div>
        <div class="panel-content">
          <div class="editor-wrapper">
            <div class="editor-wrapper-inner">
              <mavon-editor :boxShadow="false" :subfield="false" :externalLink="false"></mavon-editor>
            </div>
            <div class="btn-line">
              <span class="btn btn-primary btn-reply-topic">回复</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-aside></app-aside>
  </section>
</template>
<script>
import 'highlight.js'
import {mavonEditor} from 'mavon-editor'
import Aside from '../../components/Aside'
export default {
  name: 'page-topic-detail',
  components: {
    'app-aside': Aside,
    'mavon-editor': mavonEditor
  },
  data: function () {
    return {
      topicContent: `<p><img src="https://raw.githubusercontent.com/ruster-xyz/sundries/master/imgs/ruster-community.png" alt="ruster-community"></p>
<h3>在网友的捐助167元下,Ruster社区闪亮而出!</h3>
<pre><code>Let's Learn together
Help together
Think together,
Strong together
</code></pre>
<h3>社区功能： 目前三大功能</h3>
<ul>
<li>
<p>1-论坛：板块有：最美/博客/分享/问答/招聘/未回复/Actix/Wasm/IOT (论坛具有扩展性模块支持一键添加)</p>
</li>
<li>
<p>2-博客：博客具有独立页面展示，具有收藏/喜欢属性，具有强大的热榜功能，最美模块分别根据最近一段时间内收藏量排行和全站收藏量2个排行榜，同时侧边栏根据收藏量展示最美的人排行榜</p>
</li>
<li>
<p>3-WIKI：wiki功能是具有自定义的html页面，可以不断添加海量wiki信息.</p>
</li>
</ul>
<p>其他：</p>
<p>explore模块</p>
<p>markdown编辑器</p>
<p>丰富的个人中心</p>
<p>后续功能......</p>
<h3>社区是属于每个人的!</h3>
<iframe height="500" width="700" src="http://player.youku.com/embed/XMzU0NDQ2NDc0NA==" frameborder="0" 'allowfullscreen'=""></iframe><pre><code class="language-rust hljs"><span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> iron;
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> router;
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> mount;
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> staticfile;
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> handlebars_iron <span class="hljs-keyword"><span class="hljs-keyword">as</span></span> hbs;
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> iron_sessionstorage2 <span class="hljs-keyword"><span class="hljs-keyword">as</span></span> iron_sessionstorage;
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> serde;
<span class="hljs-meta"><span class="hljs-meta">#[macro_use]</span></span>
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> serde_derive;
<span class="hljs-meta"><span class="hljs-meta">#[macro_use]</span></span>
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> serde_json;
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> urlencoded;
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> chrono;
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> crypto;
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> rand;
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> toml;
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> hyper;
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> hyper_native_tls;
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> url;
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> multipart;
<span class="hljs-meta"><span class="hljs-meta">#[macro_use]</span></span>
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> lazy_static;
<span class="hljs-meta"><span class="hljs-meta">#[macro_use]</span></span>
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> mime;
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> mysql;
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> pulldown_cmark;
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> regex;
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> rss;
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> lettre;
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> uuid;
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> schedule;
<span class="hljs-keyword"><span class="hljs-keyword">extern</span></span> <span class="hljs-keyword"><span class="hljs-keyword">crate</span></span> log4rs;

<span class="hljs-keyword"><span class="hljs-keyword">mod</span></span> common;
<span class="hljs-keyword"><span class="hljs-keyword">mod</span></span> routes;
<span class="hljs-keyword"><span class="hljs-keyword">mod</span></span> controllers;
<span class="hljs-keyword"><span class="hljs-keyword">mod</span></span> services;
<span class="hljs-keyword"><span class="hljs-keyword">mod</span></span> models;

<span class="hljs-keyword"><span class="hljs-keyword">use</span></span> std::path::Path;

<span class="hljs-keyword"><span class="hljs-keyword">use</span></span> iron::Chain;
<span class="hljs-keyword"><span class="hljs-keyword">use</span></span> mount::Mount;
<span class="hljs-keyword"><span class="hljs-keyword">use</span></span> staticfile::Static;
<span class="hljs-keyword"><span class="hljs-keyword">use</span></span> hbs::{HandlebarsEngine, DirectorySource};
<span class="hljs-keyword"><span class="hljs-keyword">use</span></span> iron_sessionstorage::SessionStorage;
<span class="hljs-keyword"><span class="hljs-keyword">use</span></span> iron_sessionstorage::backends::RedisBackend;

<span class="hljs-keyword"><span class="hljs-keyword">use</span></span> common::lazy_static::CONFIG;
<span class="hljs-keyword"><span class="hljs-keyword">use</span></span> common::db::get_redis_config;
<span class="hljs-keyword"><span class="hljs-keyword">use</span></span> common::middlewares::FlowControl;
<span class="hljs-keyword"><span class="hljs-keyword">use</span></span> common::utils::mount_template_var;
<span class="hljs-keyword"><span class="hljs-keyword">use</span></span> controllers::upload::{create_upload_folder, run_clean_temp_task};

<span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword">fn</span></span></span><span class="hljs-function"> </span><span class="hljs-title"><span class="hljs-function"><span class="hljs-title">main</span></span></span></span>() {

    log4rs::init_file(<span class="hljs-string"><span class="hljs-string">"log4rs.yaml"</span></span>, <span class="hljs-built_in"><span class="hljs-built_in">Default</span></span>::<span class="hljs-keyword"><span class="hljs-keyword">default</span></span>()).unwrap();

    <span class="hljs-keyword"><span class="hljs-keyword">let</span></span> <span class="hljs-keyword"><span class="hljs-keyword">mut</span></span> chain = Chain::new(routes::gen_router());

    chain.link_before(FlowControl);

    <span class="hljs-keyword"><span class="hljs-keyword">let</span></span> <span class="hljs-keyword"><span class="hljs-keyword">mut</span></span> hbs_engine = HandlebarsEngine::new();
    hbs_engine.add(<span class="hljs-built_in"><span class="hljs-built_in">Box</span></span>::new(DirectorySource::new(<span class="hljs-string"><span class="hljs-string">"views/"</span></span>, <span class="hljs-string"><span class="hljs-string">".hbs"</span></span>)));
    hbs_engine.handlebars_mut().register_helper(<span class="hljs-string"><span class="hljs-string">"var"</span></span>, <span class="hljs-built_in"><span class="hljs-built_in">Box</span></span>::new(mount_template_var));
    hbs_engine.reload().unwrap();
    chain.link_after(hbs_engine);

    <span class="hljs-keyword"><span class="hljs-keyword">let</span></span> redis_config = get_redis_config(&amp;CONFIG);
    chain.link_around(SessionStorage::new(RedisBackend::new(&amp;*redis_config.connect_string, redis_config.expire).unwrap()));

    <span class="hljs-keyword"><span class="hljs-keyword">let</span></span> <span class="hljs-keyword"><span class="hljs-keyword">mut</span></span> mount = Mount::new();
    mount.mount(<span class="hljs-string"><span class="hljs-string">"/"</span></span>, chain);
    mount.mount(<span class="hljs-string"><span class="hljs-string">"static/"</span></span>, Static::new(Path::new(<span class="hljs-string"><span class="hljs-string">"static"</span></span>)));
    mount.mount(<span class="hljs-string"><span class="hljs-string">"upload/"</span></span>, Static::new(Path::new(<span class="hljs-string"><span class="hljs-string">"upload"</span></span>)));

    create_upload_folder();  <span class="hljs-comment"><span class="hljs-comment">// 创建上传文件夹</span></span>
    run_clean_temp_task();  <span class="hljs-comment"><span class="hljs-comment">// 定时清理用户上传但并未保存的文件</span></span>

    <span class="hljs-keyword"><span class="hljs-keyword">let</span></span> host = CONFIG.get(<span class="hljs-string"><span class="hljs-string">"host"</span></span>).as_str().unwrap();
    <span class="hljs-keyword"><span class="hljs-keyword">let</span></span> port: &amp;<span class="hljs-built_in"><span class="hljs-built_in">str</span></span> = &amp;*CONFIG.get(<span class="hljs-string"><span class="hljs-string">"port"</span></span>).as_integer().unwrap().to_string();

    <span class="hljs-built_in"><span class="hljs-built_in">println!</span></span>(<span class="hljs-string"><span class="hljs-string">"http server is listening on port {}!"</span></span>, port);
    iron::Iron::new(mount)
        .http(host.to_string() + <span class="hljs-string"><span class="hljs-string">":"</span></span> + port)
        .unwrap();
}

</code></pre>`
    }
  }
}
</script>
<style lang="scss">

</style>
