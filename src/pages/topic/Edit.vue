<template>
  <section>
    <div class="block-main">
      <div class="panel">
        <div class="panel-header">
          <app-crumbs :text="crumbText"></app-crumbs>
        </div>
        <div class="panel-content">
          <div class="create-topic">
            <div class="category-line">
              <label>请选择版块：</label>
              <select name="category" v-model="category">
                <option value="">请选择</option>
                <option v-for="(item, index) in categories" v-bind:value="item.categoryName" :key="index">{{item.categoryNameCn}}</option>
              </select>
            </div>
            <div class="title-line">
              <label>标题：</label>
              <div class="input-wrapper"><input type="text" value="" name="title" placeholder="请输入一个简洁、明确的标题" v-model="title"></div>
            </div>
            <div class="editor-wrapper">
              <div class="editor-wrapper-inner edit-article">
                <mavon-editor :boxShadow="false" :subfield="false" v-model="content"></mavon-editor>
              </div>
            </div>
            <div class="btn-line">
              <a href="javascript:;" class="btn btn-primary" @click="submit">提交</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-aside></app-aside>
  </section>
</template>

<script>
import {mavonEditor} from 'mavon-editor'
import Aside from '../../components/Aside'
import Crumbs from '../../components/Crumbs'
import config from '../../config'

export default {
  name: 'page-topic-edit',
  components: {
    'app-crumbs': Crumbs,
    'app-aside': Aside,
    'mavon-editor': mavonEditor
  },
  data: function () {
    return {
      userId: '',
      username: '',
      category: '',
      title: '',
      content: '',
      crumbText: '创建话题',
      categories: []
    }
  },
  mounted: function () {
    let user = JSON.parse(localStorage.getItem('user'))
    this.username = user ? user.username : ''
    this.userId = user ? user.id : ''
    this.loadCategories()
  },
  methods: {
    validate: function () {
      if (this.category.trim() === '') {
        alert('版块不能为空, 请选择一个版块')
        return false
      }

      if (this.title.trim() === '') {
        alert('话题标题不能为空')
        return false
      }

      if (this.content.trim() === '') {
        alert('话题内容不能为空')
        return false
      }

      return true
    },
    submit: function () {
      if (this.validate()) {
        let params = {
          userId: this.userId,
          categoryName: this.category,
          title: this.title,
          content: this.content
        }
        fetch(config.urlPrefix + '/api/theme_new', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(params)
        }).then(res => res.json())
          .then(data => {
            this.$router.push('/')
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    loadCategories: function () {
      fetch(config.urlPrefix + '/api/categorys', {
        method: 'GET'
      }).then(res => res.json())
        .then(data => {
          this.categories = data.categorys
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/scss/sdk/index";
.create-topic {
  padding: 1rem;

  .category-line {
    padding: 1rem;
    line-height: 2rem;
    font-size: 1.4rem;
  }

  .title-line {
    padding: 1rem;
    line-height: 3rem;
    font-size: 1.4rem;

    label {
      float: left;
    }

    .input-wrapper {
      padding-left: 5rem;
    }

    input {
      width: 100%;
    }
  }

  .btn-line {
    padding: 0 1rem 1rem;
  }
}
</style>
