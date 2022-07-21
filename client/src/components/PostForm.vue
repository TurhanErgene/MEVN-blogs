<template>
  <div class="container">
    <form @submit.prevent="submitForm">
      <div class="field mt-3">
        <label class="label">Title</label>
        <div class="control">
          <input
            v-model="post.title"
            class="input"
            type="text"
            placeholder="Title of your post"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea
            v-model="post.content"
            class="textarea"
            placeholder="Wassup?"
          ></textarea>
        </div>
      </div>
      <div class="field">
        <label class="label">Creator</label>
        <div class="control">
          <input
            v-model="post.creator"
            class="input"
            type="text"
            placeholder="Who are you?"
          />
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button type="submit" class="button is-primary">Submit</button>
        </div>
        <div class="control">
          <router-link to="/" class="button"> Cancel </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["post", "submitForm"],
};
</script>

<style>
</style>