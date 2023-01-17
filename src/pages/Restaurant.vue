<template>
  <div>
    <Header />
    <SearchBar type="resturant" />
    Restaurant
    <Contents />
  </div>
</template>

<script>
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Contents from "../components/Contents";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    SearchBar,
    Contents,
  },
};
</script>
