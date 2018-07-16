<template>
  <div>
    <div class="block-main">
      <div class="panel">
        <div class="panel-header">
          <app-crumbs></app-crumbs>
        </div>
        <div class="panel-content">
          <div class="create-topic">
            <div class="category-line">
              <label>请选择版块：</label>
              <select name="category" id="category">
                <option value="">请选择</option>
                <option value="id" selected>22</option>
              </select>
            </div>
            <div class="title-line">
              <label>标题：</label>
              <div class="input-wrapper"><input type="text" value="" name="title" placeholder="请输入一个简洁、明确的标题"></div>
            </div>
            <div class="editor-wrapper">
              <div class="editor-wrapper-inner edit-article">
                <textarea name="content" class="editor"></textarea>
              </div>
            </div>
            <div class="btn-line">
              <a href="javascript:;" class="btn btn-primary" id="btn-submit">提交</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-aside></app-aside>
  </div>
</template>

<script>
import Aside from '../../components/Aside'
import Crumbs from '../../components/Crumbs'

export default {
  name: 'page-topic-edit',
  components: {
    'app-crumbs': Crumbs,
    'app-aside': Aside
  }
}
</script>

<style scoped>

</style>
