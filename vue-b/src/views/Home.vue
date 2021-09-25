<template>
  <b-container>
    <b-row align-v="center" class="mb-5">
      <job-card
        v-for="job in displayJobs"
        :key="job.id"
        :name="job.name"
      ></job-card>
    </b-row>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
      @input="paginate(currentPage)"
    ></b-pagination>
  </b-container>
</template>

<script>
// @ is an alias to /src
import JobCard from '../components/JobCard.vue';

export default {
  name: 'Home',
  data() {
    return {
      jobs: [],
      displayJobs: [],
      currentPage: 1,
      perPage: 3,
      rows: 3,
    };
  },
  components: {
    JobCard,
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await fetch('data.json');
      const data = await res.json();
      this.jobs = data;
      this.displayJobs = this.jobs.slice(0, this.perPage);
      this.rows = data.length;
    },
    paginate(currentPage) {
      this.displayJobs = this.jobs.slice(
        (currentPage - 1) * this.perPage,
        currentPage * this.perPage
      );
    },
  },
};
</script>

<style scoped></style>
