import Vue from 'vue'
import Router from 'vue-router'

//lightmod
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

//darkmod
import darkMainpage from "../darkmod/Mainpage";
import darkProgramming from "../darkmod/Programming";
import darkThemes from "../darkmod/Themes";
import darkMusicAndSound from "../darkmod/MusicAndSound";
import darkGames from "../darkmod/Games";
import darkPhotos from "../darkmod/Photos";
import darkRelations from "../darkmod/Relations";
import darkTools from "../darkmod/Tools";
import darkNetwork from "../darkmod/Network";
import darkOffice from "../darkmod/Office";
import darkOthers from "../darkmod/Others";
import darkReading from "../darkmod/Reading";
import darkVideos from "../darkmod/Videos";
import darkSearch from "../darkmod/Search";


Vue.use(Router)

export default new Router({
  //base:'',
  //mode:'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: Mainpage
    },
    {
      path: '/dark',
      name: 'darkMainPage',
      component: darkMainpage
    },

    {
      path: '/programming',
      name: 'Programming',
      component: Programming
    },
    {
      path: "/darkprogramming",
      name: "darkProgramming",
      component: darkProgramming
    },

    {
      path: '/themes',
      name: 'Themes',
      component: Themes
    },
    {
      path: "/darkthemes",
      name: "darkThemes",
      component: darkThemes
    },

    {
      path: '/musicandsound',
      name: 'MusicAndSound',
      component: MusicAndSound
    },
    {
      path: '/darkmusicandsound',
      name: 'darkMusicAndSound',
      component: darkMusicAndSound
    },

    {
      path: '/games',
      name: 'Games',
      component: Games
    },
    {
      path: '/darkgames',
      name: 'darkGames',
      component: darkGames
    },

    {
      path: '/photos',
      name: 'Photos',
      component: Photos
    },
    {
      path: '/darkphotos',
      name: 'darkPhotos',
      component: darkPhotos
    },

    {
      path: '/relations',
      name: 'Relations',
      component: Relations
    },
    {
      path: '/darkrelations',
      name: 'darkRelations',
      component: darkRelations
    },

    {
      path: '/tools',
      name: 'Tools',
      component: Tools
    },
    {
      path: '/darktools',
      name: 'darkTools',
      component: darkTools
    },

    {
      path: '/network',
      name: 'Network',
      component: Network
    },
    {
      path: '/darknetwork',
      name: 'darkNetwork',
      component: darkNetwork
    },

    {
      path: '/office',
      name: 'Office',
      component: Office
    },
    {
      path: '/darkoffice',
      name: 'darkOffice',
      component: darkOffice
    },

    {
      path: '/others',
      name: 'Others',
      component: Others
    },
    {
      path: '/darkothers',
      name: 'darkOthers',
      component: darkOthers
    },

    {
      path: '/reading',
      name: 'Reading',
      component: Reading
    },
    {
      path: '/darkreading',
      name: 'darkReading',
      component: darkReading
    },

    {
      path: '/videos',
      name: 'Videos',
      component :Videos
    },
    {
      path: '/darkvideos',
      name: 'darkVideos',
      component :darkVideos
    },

    {
      path: '/search',
      name: 'Search',
      component :Search
    },
    {
      path: '/darksearch',
      name: 'darkSearch',
      component :darkSearch
    }
  ]
})
