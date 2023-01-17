<template>
  <div><Header /><SearchBar type="drinks" />Drinks</div>
</template>

<script>
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    SearchBar,
  },
};
</script>
