<template>
  <div class="article">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif">
    </div>
    <div v-else class="main">
      <div class="main_item">
        <div class="title">
          <span
            :class="[{topStyle:(post.top === true)},{essenceStyle:(post.good === true)},
            {questionStyle:(post.top !== true && post.good !== true)}]"
            v-if="(post.top === true | post.good === true)"
          >{{post | tabFormatter}}</span>
          <span class="titleInfo">{{post.title}}</span>
        </div>
        <div class="titleAbout">
          <ul>
            <li>发布于&nbsp;{{post.create_at | formatDate}}</li>
            <li>作者&nbsp;{{post.author.loginname}}</li>
            <li>{{post.visit_count}}&nbsp;次浏览</li>
            <li>来自&nbsp;{{post | fromFormatter}}</li>
          </ul>
        </div>
      </div>
      <div v-html="post.content" class="markdown-body"></div>
    </div>
      
 <div id="reply">
      <div class="topbar">{{post.reply_count}}回复</div>
      <div v-for="(reply,index)  in post.replies" class="replySec">
        <div class="replyUp">
          <router-link :to="{
          name:'user_info',
          params:{
            name:reply.author.loginname
          }
          }">
            <img :src="reply.author.avatar_url" alt="">
          </router-link>
          <router-link :to="{
          name:'user_info',
          params:{
            name:reply.author.loginname
          }
          }">
            <span>{{reply.author.loginname}}</span>
          </router-link>
          <span>
          {{index+1}}楼
        </span>
          <span v-if="reply.ups.length>0" >
          ☝ {{reply.ups.length}}
        </span>
          <span v-else>
        </span>
        </div>
      <p v-html="reply.content" class="markdown-body"></p>
      </div>
    </div>
  

  </div>
</template>
<script src="./Article.js"></script>
<style src="./Article.css"></style>






