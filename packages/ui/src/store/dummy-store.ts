import { Store } from './store'

interface Dummy extends Object {
  count: number
}

class DummyStore extends Store<Dummy> {
  protected data(): Dummy {
    return {
      count: 0
    }
  }

  incrementCount () {
    this.state.count++
  }
}

export const dummyStore = new DummyStore('DUMMY_STORE')
