<template>
  <div>
    <div class="card">
      <div class="lastupdated_time">
        <i class="fas fa-calendar-alt"></i>
        {{item.lastUpdated}}
      </div>
      <a :href="'/blog'+item.path">
        <h1>{{item.title}}</h1>
      </a>
      <div class="border"></div>
      <div class="body" v-html="description"></div>
      <div class="footer" @click="GoPath">繼續閱讀</div>
    </div>
  </div>
</template>
<script>
var vue = {
  name: "ArticleBox",
  props: ["item"],
  computed: {
    description: function() {
      if (this.item.frontmatter == {} || this.item.frontmatter == undefined)
        return null;
      if (this.item.frontmatter.description == undefined) 
        return null;
      return this.item.frontmatter.description;
    }
  },
  methods: {
    GoPath: function() {
      let path = "/blog" + this.item.path;
      location.href = path;
    }
  }
};
export default vue;
</script>
<style scoped>
.card {
  padding: 1.2em;
  background-color: #fafafa;
  border-radius: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  margin-top: 100px;
}
.card h1 {
  text-align: center;
  color: #428bca;
  cursor: pointer !important;
}
.border {
  margin-top: 10px;
  border-bottom: 1px solid #ddd;
}
.body {
  margin-top: 10px;
  line-height: 1.8;
  color: #333333;
  font-family: "Segoe UI", "微軟正黑體";
  font-size: 12pt;
  font-weight: 400;
}
.footer {
  border: 3px solid #000;
  color: #000;
  font: 12px Montserrat;
  text-transform: uppercase;
  padding: 10px;
  font-weight: 600;
  max-width: 250px;
  display: block;
  text-align: center;
  margin: 20px auto;
  position: relative;
  cursor: pointer !important;
}
.footer:hover {
  background: #000;
  border-color: #000;
  color: #fff;
}
.lastupdated_time {
  color: #aaa;
  text-align: right;
}
/* end STYLE 6 */
</style>