<template>
  <div class="PostList">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif">
    </div>
    <div class="main" v-else>
      <div class="mainItems">
        <ul>
          <li>全部</li>
          <li>精华</li>
          <li>分享</li>
          <li>问答</li>
          <li>招聘</li>
          <li>客户端测试</li>
        </ul>
      </div>
      <div class="mainContent">
        <ul>
          <li v-for="post in posts">
            <span class="portrait">
              <img :src="post.author.avatar_url" alt srcset>
            </span>
            <span class="amounts">
              <span class="reply_amounts">{{post.reply_count}}</span>
              <span class="slash">/</span>
              <span class="visit_amounts">{{post.visit_count}}</span>
            </span>
            <span
              :class="[{topStyle:(post.top === true)},{essenceStyle:(post.good === true)},
            {questionStyle:(post.top !== true && post.good !== true)}]"
            >{{post | tabFormatter}}</span>
            <router-link
              :to="{
        name:'post_content',
        params:{
          id:post.id,
          name:post.author.loginname
        }
        }"
            >
              <span class="title">{{post.title}}</span>
            </router-link>
            <span class="replyRencently">
              <!-- <router-link >
                <span class="replyRecently_replier">pic</span>
              </router-link>-->
              <span class="replyRecently_time">{{post.last_reply_at | formatDate}}</span>
            </span>
          </li>
                  <li>
          <!--分页-->
          <pagination @handleList="renderList"></pagination>
        </li>
        </ul>
      </div>
    </div>
    <!-- <div class="aside">aside</div> -->
  </div>
</template>

<script src="./PostList.js"></script>

<style scoped src="./PostList.css"></style>

