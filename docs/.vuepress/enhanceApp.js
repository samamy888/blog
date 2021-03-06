
import ArticleList from './theme/components/ArticleList.vue'
import ArticleBox from './theme/components/ArticleBox.vue'
import Disqus_V2 from './theme/components/Disqus_V2.vue'
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.component('ArticleList', ArticleList)
  Vue.component('ArticleBox', ArticleBox)
  Vue.component('Disqus_V2', Disqus_V2)
}