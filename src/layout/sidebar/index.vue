<template>
  <div>
    <el-menu default-active="0">
      <div v-for="(item,index) in router()" :key="index">
        <el-submenu :index="index.toString()" v-if="item.children&&item.children.length">
          <template slot="title">
            <span>{{item.name}}</span>
          </template>
          <el-menu-item-group>
            <div v-for="child in item.children" :key="child.path" style="text-align: left">
              <router-link :to="child.path"  :key="child.name">
                <el-menu-item :index="item.path+'/'+child.path">
                  <span>{{child.name}}</span>
                </el-menu-item>
              </router-link>
            </div>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item :index="index.toString()" @click="goRouter(item.path)" v-else>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component({
    components: {}
  })
  export default class sidebar extends Vue {
    public created(): void {
      console.log('routes', this.$router.options.routes)
    }

    public router(): any {
      return this.$router.options.routes
    }

    public goRouter(query: string): void {
      if (this.$route.path !== query) {
        this.$router.push(!query ? '/' : query)
      }
    }
  }
</script>

<style scoped>

</style>
