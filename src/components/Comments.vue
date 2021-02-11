<template>
    <div class="comments-outside">
      <div class="comments-header">
        <div class="comments-stats">
          <span><i class="fa fa-thumbs-up"></i>Likes: {{ likes }}</span>
          <span><i class="fa fa-comment"></i>Comments: {{ comments.length }}</span>
        </div>
        <div class="post-owner">
          <div class="avatar">
            <img :src="creator.avatar" alt="">
          </div>
          <div class="username">
            <a href="#">@{{ creator.user }}</a>
          </div>
        </div>
      </div>
      <Comment @submitСommentParent="submitCommentParent"
      />
    </div>
</template>
<script>
import Comment from "./Comment";
export default {
  name: 'Comments',
  components: {
    Comment
  },
  computed: {
    likes() {
      return this.$store.getters.getLikes;
    },
    creator() {
      return this.$store.getters.getCreator;
    },
    comments() {
      return this.$store.getters.getComments;
    },
    currentUser() {
      return this.$store.getters.getCurrentUser;
    }
  },
  methods: {
    submitCommentParent: function(reply) {
      const currentUser = this.$store.getters.getCurrentUser;
      const comments = this.$store.getters.getComments;
      const update = {
        id: comments.length + 1,
        user: currentUser.user,
        avatar: currentUser.avatar,
        text: reply
      }
      console.log(update)
      this.$store.dispatch('addComment', update)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  text-decoration: none;
}
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ececec;
  margin: 1em 0;
  padding: 0;
}
.comments-outside {
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  max-width: 600px;
}
.comments-header {
  background-color: #C8C8C8;
  padding: 10px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  color: #333;
  min-height: 80px;
  font-size: 20px;
}
.comments-header .comments-stats span {
  margin-left: 10px;
}
.post-owner {
  display: flex;
  align-items: center;
}
.post-owner .avatar > img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
}
.post-owner .username {
  margin-left: 5px;
}
.post-owner .username > a {
  color: #333;
}
</style>