<template>
    <el-container class="home-container">

      <el-header>
        <div>
          <img src="" alt="">
          <span>codespace</span>
        </div>
        <el-button type="primary" v-on:click="logout">退出</el-button>
      </el-header>

      <el-container>

        <!--  侧边栏-->
        <el-aside width="200px">
          <el-menu router>

            <el-menu-item index="/user">用户信息</el-menu-item>
            <el-menu-item index="/problemList">题目</el-menu-item>
            <el-menu-item index="/status">提交状态</el-menu-item>
          </el-menu>
        </el-aside>



        <el-main>
          <!-- 路由占位符-->
          <router-view></router-view>
        </el-main>
      </el-container>

    </el-container>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      //左侧菜单
      menuList:[]

    }
  },

  methods:{
    logout:function(){
      sessionStorage.setItem("isLogin", false);
      sessionStorage.removeItem("userid" );
      //
      location="/login"

    },


  }

}
</script>

<style scoped>

.home-container{
  height: 100%;
}

.el-header{

  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
}

.el-aside{

}

.el-main{
  background-color: azure;
}

</style>