<template>
  <PostForm :post="post" :submitForm="updatePost"></PostForm>
</template>

<script>
import PostForm from "../components/PostForm";
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue"; //composition api

export default {
  components: {
    PostForm,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const API_URL = "http://localhost:5000/posts";

    const post = ref({
      title: "",
      content: "",
      creator: "",
    });

    onMounted(() => {
      getPost();
    });

    async function getPost() {
      const { id } = route.params;
      const response = await fetch(`${API_URL}/${id}`);
      const json = await response.json();
      post.value = json;
    }

    async function updatePost() {
      const { id } = route.params;
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title: post.value.title,
          content: post.value.content,
          creator: post.value.creator,
        }),
      });

      //unnecessary
      const json = await response.json();

      router.push({
        name: "Home",
      });
    }
    return {
      post,
      updatePost,
    };
  },
};
</script>

<style>
</style>