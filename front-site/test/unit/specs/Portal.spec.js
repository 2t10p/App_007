import Vue from 'vue'
import Portal from '@/components/Portal'

describe('Portal.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Portal)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.portal h1').textContent)
      .to.equal('Portal Page')
  })
})
