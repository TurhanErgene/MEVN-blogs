<template>
  <h1>Update Page</h1>
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

    async function getPost() {
      const { id } = route.params;
      console.log(id);
    }
    return getPost();
  },
};
</script>

<style>
</style>