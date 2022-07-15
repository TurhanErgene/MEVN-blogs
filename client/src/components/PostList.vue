<template>
  <div class="container">
    <div v-for="post in posts" :key="post._id" class="card my-4">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ post.title }}</p>
          </div>
        </div>

        <div class="content">
          {{ post.content }}
          <p />
          <strong>Creator: {{ post.creator }}</strong>
        </div>
        <div class="card">
          <footer class="card-footer">
            <button class="card-footer-item button is-warning">Edit</button>
            <button
              @click="removePost(post._id)"
              class="card-footer-item button is-danger"
            >
              Delete
            </button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { onMounted } from "vue";

export default {
  setup() {
    const posts = ref([]);

    const API_URL = "http://localhost:5000/posts";

    onMounted(() => {
      getPosts();
    });

    async function getPosts() {
      const response = await fetch(API_URL);
      const json = await response.json();
      posts.value = json;
    }
    async function removePost(_id) {
      const reponse = await fetch(`${API_URL}/${_id}`, {
        method: "DELETE",
      });
      getPosts();
    }
    return {
      posts,
      removePost,
    };
  },
};
</script>

<style>
</style>
