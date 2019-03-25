<template>
  <div class="slideBar">
    <div class="authorInfo">
      <div class="authorInfo_topbar">
        <span>作者</span>
      </div>

      <div class="authorInfo_content">
        <span class="portrait">
          <router-link
            :to="{
          name:'user_info',
          params:{
            name:userinfo.loginname
          }
          }"
          >
            <img :src="userinfo.avatar_url" alt>
          </router-link>
        </span>

        <span class="author">{{userinfo.loginname}}</span>
      </div>
    </div>
    <div class="recentTopics">
      <div class="recentTopics_topbar">作者最近主题</div>
      <div class="recentTopics_content">
        <ul>
          <li v-for = "list in topiclimitby5">
        <router-link :to="{
        name:'post_content',
        params:{
          id:list.id,
          name:list.author.loginname
        }
        }">
          {{list.title}}
        </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="authorReplies">
      <div class="authorReplies_topbar">作者最近回复</div>
      <div class="authorReplies_content">
        <ul>
          <li v-for =  'list in replylimitby5'>
            <router-link :to="{
          name: 'post_content',
          params:{
            id: list.id,
          name:list.author.loginname
          }
          }"
            >{{list.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script src="./SlideBar.js"></script>
<style scoped src="./SlideBar.css"></style>

