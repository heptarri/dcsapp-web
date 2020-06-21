import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Programming from "../components/Programming";
import Themes from "../components/Themes";
import MusicAndSound from "../components/MusicAndSound";
import Games from "../components/Games";
import Major from "../components/Major";
import Photos from "../components/Photos";
import Relations from "../components/Relations";
import Tools from "../components/Tools";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
      path: '/major',
      name: 'Major',
      component: Major
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
    }
  ]
})
