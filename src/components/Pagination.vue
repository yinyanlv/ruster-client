<template>
  <div class="pagination" id="app-pagination">
    <!--<a class="first {{#if pagination.is_first_page_disabled}}disabled{{/if}}" href="{{pagination.base_url}}{{pagination.first_page}}">«</a>-->
    <!--{{#if pagination.is_show_prev_ellipsis}}-->
    <!--<a class="ellipsis">...</a>-->
    <!--{{/if}}-->
    <!--{{#each pagination.page_list}}-->
    <!--<a href="{{../pagination.base_url}}{{this.page}}" {{#if this.is_active}}class="active disabled"{{/if}}>{{this.page}}</a>-->
    <!--{{/each}}-->
    <!--{{#if pagination.is_show_next_ellipsis}}-->
    <!--<a class="ellipsis">...</a>-->
    <!--{{/if}}-->
    <!--<a class="last {{#if pagination.is_last_page_disabled}}disabled{{/if}}" href="{{pagination.base_url}}{{pagination.last_page}}">»</a>-->
  </div>
</template>
<script>
export default {
  name: 'app-pagination'
}
</script>
<style lang="scss">
@import "../assets/styles/scss/sdk/index"

.pagination {
  padding: 1rem;
  font-size: 0;
  overflow: hidden;

  a {
    display: inline-block;
    font-size: 1.2rem;
    float: left;
    height: 3rem;
    border: 0.1rem solid $pagination-btn-bd-color;
    padding: 0 1.2rem;
    line-height: 2.8rem;
    border-right: 0;
    color: $lighter-font-color;

    &.active {
      background: $theme-color;
      color: #fff;

      &:hover {
        background: $theme-color;
      }
    }

    &:hover {
      background: $bg-color;
    }

    &.ellipsis {
      padding: 0 1rem;
    }

    &.first {
      -webkit-border-top-left-radius: .4rem;
      border-top-left-radius: .4rem;
      -webkit-border-bottom-left-radius: .4rem;
      border-bottom-left-radius: .4rem;
    }

    &.last {
      border-right: .1rem solid $pagination-btn-bd-color;

      -webkit-border-top-right-radius: .4rem;
      border-top-right-radius: .4rem;
      -webkit-border-bottom-right-radius: .4rem;
      border-bottom-right-radius: .4rem;
    }
  }
}
</style>
