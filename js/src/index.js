import {App} from '@/components/App/App'
import {Recalculation} from '@/components/Recalculation/Recalculation'
import {Header} from '@/components/Header/Header'
import './scss/index.scss'

const app = new App(
  '#app',
  {
    components: [Header, Recalculation]
  })

app.render()
app.fetchData()
