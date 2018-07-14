<template>
  <div class="pagination" id="app-pagination">
    <a class="first" :class="{disabled: pagination.isFirstPageDisabled}" :href="pagination.baseUrl + '/' + pagination.firstPage">«</a>
    <a class="ellipsis" v-if="pagination.isShowPrevEllipsis">...</a>
    <a v-for="item in pagination.pageList" :key="item.page" :href="pagination.baseUrl + '/' + item.page" :class="{active: item.isActive, disabled: item.isActive}">{{item.page}}</a>
    <a v-if="pagination.isShowNextEllipsis" class="ellipsis">...</a>
    <a class="last" :class="{disabled: pagination.isLastPageDisabled}" :href="pagination.baseUrl + '/' + pagination.lastPage">»</a>
  </div>
</template>
<script>
const RECORDS_COUNT_PER_PAGE = 15

export default {
  name: 'app-pagination',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    baseUrl: {
      type: String,
      default: ''
    }
  },
  computed: {
    pagination: function () {
      let curPage = this.currentPage
      let total = this.total
      let baseUrl = this.baseUrl
      let delta = 1

      if (total % RECORDS_COUNT_PER_PAGE === 0) {
        delta = 0
      }

      let pageCount = total / RECORDS_COUNT_PER_PAGE + delta
      let isShowPrevEllipsis = true
      let isShowNextEllipsis = true
      let isFirstPageDisabled = false
      let isLastPageDisabled = false
      let pageList = []

      if (pageCount < 6) {
        isShowPrevEllipsis = false
        isShowNextEllipsis = false
      } else {
        if (curPage < 4) {
          isShowPrevEllipsis = false
        }
        if (curPage > pageCount - 3) {
          isShowNextEllipsis = false
        }
      }

      if (curPage === 1) {
        isFirstPageDisabled = true
      }

      if (curPage === pageCount) {
        isLastPageDisabled = true
      }

      if (pageCount < 6) {
        // 总页数小于等于5时
        for (let i = 1; i < pageCount + 1; i++) {
          if (i === curPage) {
            pageList.push({
              page: i,
              isActive: true
            })
          } else {
            pageList.push({
              page: i
            })
          }
        }
      } else if (curPage < 4) {
        // 总页数大于5，当前页码小于等于3时，隐藏左侧ellipsis
        for (let i = 1; i < 6; i++) {
          if (i === curPage) {
            pageList.push({
              page: i,
              isActive: true
            })
          } else {
            pageList.push({
              page: i
            })
          }
        }
      } else if (curPage > pageCount - 3) {
        // 总页数大于5，当前页码距离总页数小于等于3时，隐藏右侧ellipsis
        for (let i = pageCount - 4; i < pageCount + 1; i++) {
          if (i === curPage) {
            pageList.push({
              page: i,
              isActive: true
            })
          } else {

            pageList.push({
              page: i
            })
          }
        }
      } else {
        // 当前页码的左右两侧各放置两个页码
        for (let i = curPage - 2; i < curPage + 3; i++) {
          if (i === curPage) {
            pageList.push({
              page: i,
              isActive: true
            })
          } else {
            pageList.push({
              page: i
            })
          }
        }
      }

      return {
        baseUrl: baseUrl,
        isShowPrevEllipsis: isShowPrevEllipsis,
        isShowNextEllipsis: isShowNextEllipsis,
        pageList: pageList,
        isFirstPageDisabled: isFirstPageDisabled,
        isLastPageDisabled: isLastPageDisabled,
        firstPage: 1,
        lastPage: pageCount
      }
    }
  }
}
</script>
<style lang="scss">
@import "../assets/styles/scss/sdk/index";

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
