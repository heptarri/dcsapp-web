import Vue from 'vue'
import Router from 'vue-router'

import Mainpage from "../pages/Mainpage";
import Programming from "../pages/Programming";
import Themes from "../pages/Themes";
import MusicAndSound from "../pages/MusicAndSound";
import Games from "../pages/Games";
import Photos from "../pages/Photos";
import Relations from "../pages/Relations";
import Tools from "../pages/Tools";
import Network from "../pages/Network.vue";
import Office from "../pages/Office.vue";
import Others from "../pages/Others.vue";
import Reading from "../pages/Reading.vue";
import Videos from "../pages/Videos.vue";
import Search from "../pages/Search.vue";


Vue.use(Router)

export default new Router({
  base:'',
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: Mainpage
    },
    {
      path: '/programming',
      name: 'Programming',
      component: Programming
    },
    {
      path: '/themes',
      name: 'Themes',
      component: Themes
    },
    {
      path: '/musicandsound',
      name: 'MusicAndSound',
      component: MusicAndSound
    },
    {
      path: '/games',
      name: 'Games',
      component: Games
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos
    },
    {
      path: '/relations',
      name: 'Relations',
      component: Relations
    },
    {
      path: '/tools',
      name: 'Tools',
      component: Tools
    },
    {
      path: '/network',
      name: 'Network',
      component: Network
    },
    {
      path: '/office',
      name: 'Office',
      component: Office
    },
    {
      path: '/others',
      name: 'Others',
      component: Others
    },
    {
      path: '/reading',
      name: 'Reading',
      component: Reading
    },
    {
      path: '/videos',
      name: 'Videos',
      component :Videos
    },
    {
      path: '/search',
      name: 'Search',
      component :Search
    }
  ]
})
