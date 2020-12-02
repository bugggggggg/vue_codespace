<template>
  <div class="Page">
    <el-card class="box" shadow="always">
      <el-row class="title">
        <h1>登录</h1>
      </el-row>
      <el-form label-width="0">
        <el-form-item>
          <el-input class="form-input" v-model="email" placeholder="邮箱">

          </el-input>
        </el-form-item>
        <el-form-item >
          <el-input class="form-input" v-model="password" placeholder="密码" show-password>

          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="form-button" v-on:click="login" round>登录</el-button>

        </el-form-item>


        <el-form-item>
          <el-button type="primary" class="form-button" v-on:click="toRegister" round>去注册</el-button>
          <el-button type="primary" class="form-button" v-on:click="getPassword" round>邮箱找回密码</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>



export default {
  name: "Login",
  data(){
    return {
      email:'',
      password:''
    }
  },
  methods:{
    login:function (){
      console.log("请求登录");
      //const url='http://localhost:8081/';
      const url='http://106.15.234.251:8081/';
      this.$axios.post(url+'login',
          {email:this.email,password:this.password})
          .then(function (response){
            const Data = response.data;
            const data=Data.data;
            if (response.status === 200&&Data.msg === 'success')
            {


                const uid = data.userid;
                const username = data.username;
                console.log("Login Success!");
                sessionStorage.setItem("isLogin", true);
                sessionStorage.setItem("userid", uid);
                alert("登录成功！欢迎你，" + username +"！");
                location = '../';
              }
              else
              {
                console.log("Login Fail!");
                var message = data.msg;
                alert("登录失败！" + message);
              }

      })
          .catch(function (error) { // 请求失败处理
            console.log(error);
          });
    },

    logout:function(){
      //const url='http://localhost:8081/';
      //const url='http://106.15.234.251:8081/';
      console.log("请求退出登录");

        sessionStorage.setItem("isLogin", false);
        sessionStorage.removeItem("userid" );


    },
    toRegister:function(){
      location="./register"
    },
    getPassword:function (){

      //const url='http://localhost:8081/';
      const url='http://106.15.234.251:8081/';
      this.$axios.get(url+'getPasswordByEmail',
          {params: {email:this.email}})

          .then((response)=>{
              const data=response.data;
              console.log(data.msg);
              alert(data.msg);
          })
    }


  }
}
</script>

<style scoped>

</style>