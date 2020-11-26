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
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>

            </el-submenu>
            <el-menu-item index="/problemList">problems</el-menu-item>
            <el-menu-item index="/status">status</el-menu-item>
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
      const url='http://localhost:8081/';
      console.log("请求退出登录");
      this
          .$axios
          .get(url+'logout')
          .then(function (){
            sessionStorage.setItem("isLogin", false);
            sessionStorage.removeItem("userid" );
          })
          .catch(function (error) { // 请求失败处理
            console.log(error);
          });

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