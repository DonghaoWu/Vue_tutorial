<template>
  <b-col md="4" cols="12">
    <b-card
      :title="name"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2"
      footer="Card Footer"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text>

      <b-button href="#" variant="primary">Apply</b-button>
    </b-card>
  </b-col>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['name'],
};
</script>

<style></style>
