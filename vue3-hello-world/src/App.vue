<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Button>{{count}}</Button>
  <div>{{state.count2}}</div>
  <div>{{state.user.username}}</div>
  <div ref="box">box</div>
  <button @click="changeUsername">更换名字</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { ref, reactive, onMounted} from 'vue'
// shallowReactive 非递归
// 
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup(){
      let count = ref(0)
      let state = reactive({
          count2: 8,
          user: {
              username: "烟熏三文鱼",
              password: '123456789',
              age: 15
          }
      })
      const changeUsername = () => {
          state.user.username = '这个是个更换过后的名字'
      }

      let box = ref(null)
      onMounted(() => {
          console.log("boxRef", box)
      })
      return { count, state, changeUsername, box } 
  }
}
</script>
