import { configure } from 'mobx'
import BrandStore from './BrandStore'
import ModelStore from './ModelStore'
import YearStore from './YearStore'
import ResultStore from './ResultStore'

export default class RootStore {
  constructor() {
    configure({ enforceActions: 'always' })
    this.brandStore = new BrandStore()
    this.modelStore = new ModelStore(this)
    this.yearStore = new YearStore(this)
    this.resultStore = new ResultStore(this)
  }
}
