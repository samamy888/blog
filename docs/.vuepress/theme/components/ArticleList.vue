<template>
  <div>
    <div v-for="x in site">
      <ArticleBox :item="x" />
    </div>
  </div>
</template>

<script>

import ArticleBox from "@theme/components/ArticleBox.vue";

var vue = {
  name: "ArticleList",
  data() {
    return {
      site: [],
    };
  },
  mounted() {
    this.site = Site_To_List(this.$site.pages);
    this.site = AddDateToNewSite(this.site);
    this.site = _.orderBy(this.site, (x) => new Date(x.lastUpdated), ["desc"]);
  },
};
function Site_To_List(pages) {
  let list = [];
  return pages.filter((x) => {
    if (x.frontmatter == {} || x.frontmatter?.description == undefined) return false;
    return x.frontmatter.description.length > 0;
  });
}
function AddDateToNewSite(site){
  site.forEach(x=>{
    if(x.lastUpdated=="" || x.lastUpdated==null){
      x.lastUpdated = new Date();
    }
  });
  return site;
}
export default vue;
</script>