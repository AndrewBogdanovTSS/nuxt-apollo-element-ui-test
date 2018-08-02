import Vue from 'vue'
import {Menu, MenuItem, Submenu, Collapse, CollapseItem} from "element-ui"
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import locale from 'element-ui/lib/locale'
import en from 'element-ui/lib/locale/lang/en'

// Importing proper locale
locale.use(en)

Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Collapse)
Vue.use(CollapseItem)

Vue.component(CollapseTransition.name, CollapseTransition)
