<template>
  <div class="comment-section">
    <div class="comment-list">
      <div
        class="comment"
        v-for="comment in comments"
        :key="comment.id"
      >
        <div class="comment-header">
          <div class="comment-author-date">
            <strong class="comment-author">{{ comment.author }}</strong>
            <span class="comment-date">{{ comment.date }}</span>
          </div>
          <button v-if="!comment.fixed" class="delete-button" @click="deleteComment(comment.id)">删除</button>
        </div>
        <div class="comment-body">{{ comment.text }}</div>
        <div class="comment-actions">
          <button class="like-button" @click="toggleLike(comment)">
            👍 {{ comment.likes }}
          </button>
          <button class="reply-button" @click="toggleReplyForm(comment.id)">回复</button>
        </div>
        <div v-if="comment.showReplyForm" class="reply-form">
          <textarea v-model="comment.replyText" placeholder="输入你的回复"></textarea>
          <button @click="submitReply(comment.id)">提交</button>
        </div>
        <div class="replies" v-if="comment.replies.length > 0">
          <div
            class="comment reply"
            v-for="reply in comment.replies"
            :key="reply.id"
          >
            <div class="comment-header">
              <div class="comment-author-date">
                <strong class="comment-author">{{ reply.author }}</strong>
                <span class="comment-date">{{ reply.date }}</span>
              </div>
              <button class="delete-button" @click="deleteReply(comment.id, reply.id)">删除</button>
            </div>
            <div class="comment-body">{{ reply.text }}</div>
            <div class="comment-actions">
              <button class="like-button" @click="toggleLike(reply)">
                👍 {{ reply.likes }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="new-comment">
      <textarea v-model="newCommentText" placeholder="输入你的内容"></textarea>
      <button class="submit-button" @click="submitComment">发表</button>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { ref, onMounted } from 'vue';

const username = ref('');
if (localStorage.getItem('loggedIn') === 'true') {
    const userData = JSON.parse(localStorage.getItem('userData'));
    username.value = userData.username;
}
const newCommentText = ref('');
const defaultComments = [
  {
    id: 1,
    author: "刘倩倩",
    date: "2024-06-3",
    text: "推荐大家选择陪诊员张三",
    replies: [],
    showReplyForm: false,
    replyText: "",
    likes: 0,
    liked: false,
    fixed: true
  },
  {
    id: 2,
    author: "懒洋洋",
    date: "2024-06-8",
    text: "避雷江西省人民医院刘xx医生！",
    replies: [],
    showReplyForm: false,
    replyText: "",
    likes: 0,
    liked: false,
    fixed: true
  },
  {
    id: 3,
    author: "开心超人",
    date: "2024-06-10",
    text: "请问医保报销的流程是怎么样的？",
    replies: [],
    showReplyForm: false,
    replyText: "",
    likes: 0,
    liked: false,
    fixed: true
  }
];

const comments = ref([]);
onMounted(() => {
  const storedComments = localStorage.getItem('comments');
  if (storedComments) {
    comments.value = JSON.parse(storedComments);
  } else {
    comments.value = [...defaultComments];
    localStorage.setItem('comments', JSON.stringify(comments.value));
  }
  ensureDefaultComments();
});

const ensureDefaultComments = () => {
  defaultComments.forEach(defaultComment => {
    const exists = comments.value.some(comment => comment.id === defaultComment.id);
    if (!exists) {
      comments.value.unshift(defaultComment); 
    }
  });
  localStorage.setItem('comments', JSON.stringify(comments.value));
};

// 切换回复表单
const toggleReplyForm = (commentId) => {
  const comment = comments.value.find((comment) => comment.id === commentId);
  comment.showReplyForm = !comment.showReplyForm;
};

// 提交回复
const submitReply = (commentId) => {
  const comment = comments.value.find((comment) => comment.id === commentId);
  if (comment.replyText.trim()) {
    comment.replies.push({
      id: Date.now(),
      author: username.value,
      date: new Date().toLocaleDateString(),
      text: comment.replyText,
      likes: 0,
      liked: false,
      fixed: false
    });
    ElMessage.success('回复成功');
    comment.replyText = "";
    comment.showReplyForm = false;
    ensureDefaultComments(); 
  }
};

// 删除评论
const deleteComment = (commentId) => {
  const comment = comments.value.find(comment => comment.id === commentId);
  if (comment && !comment.fixed) { 
    comments.value = comments.value.filter((comment) => comment.id !== commentId);
    ensureDefaultComments();
  }
};

// 删除回复
const deleteReply = (commentId, replyId) => {
  const comment = comments.value.find((comment) => comment.id === commentId);
  comment.replies = comment.replies.filter((reply) => reply.id !== replyId);
  ElMessage.success('删除成功');
  ensureDefaultComments(); 
};

// 提交新评论
const submitComment = () => {
  if (newCommentText.value.trim()) {
    const newComment = {
      id: Date.now(),
      author: username.value,
      date: new Date().toLocaleDateString(),
      text: newCommentText.value,
      replies: [],
      showReplyForm: false,
      replyText: "",
      likes: 0,
      liked: false,
      fixed: false
    };
    comments.value.push(newComment);
    ElMessage.success('评论成功');
    newCommentText.value = "";
    ensureDefaultComments(); 
  }
};

// 点赞功能
const toggleLike = (comment) => {
  if (comment.liked) {
    comment.likes -= 1;
  } else {
    comment.likes += 1;
  }
  comment.liked = !comment.liked;
  ensureDefaultComments(); 
  // ElMessage.success('点赞成功');
};

</script>
<style scoped>
.comment-section {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #fefefe;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
}
h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}
.comment-list {
  margin-bottom: 20px;
}
.comment {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  background-color: #f9fff9;
}
.comment.reply {
  border-left: 4px solid #4cc886;
  background-color: #f0fff0;
  margin-left: 0; 
}
.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}
.comment-author-date {
  display: flex;
  flex-direction: column;
}
.comment-author {
  font-size: 16px;
  color: #4cc886;
}
.comment-date {
  font-size: 12px;
  color: #666;
}
.comment-body {
  margin: 5px 0;
  font-size: 14px;
  color: #333;
}
.comment-actions {
  display: flex;
  gap: 10px;
}
.replies {
  margin-left: 0px; 
}
textarea {
  width: calc(100% - 100px);
  height: 40px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  resize: vertical;
}
button {
  padding: 8px 16px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}
button:hover {
  background-color: #218838;
}
.delete-button {
  background-color: #dc3545;
}
.delete-button:hover {
  background-color: #c82333;
}
.reply-button, .like-button {
  display: inline-block;
  margin-top: 10px;
}
.submit-button {
  width: 100px;
  height: 60px;
  margin-left: 10px;
}
.new-comment {
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom:40px;
}
.new-comment textarea {
  flex-grow: 1;
  margin-right: 10px;
  height: 60px;
}
.reply-form {
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
}
.reply-form textarea {
  flex-grow: 1;
  margin-right: 10px;
  height: 40px;
}
.reply-form button {
  height: 40px;
}
</style>