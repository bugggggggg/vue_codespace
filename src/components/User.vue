<template>

  <div class="user_container">
    <!-- <el-card>
      <el-row>
        用户编号:{{userId}}
      </el-row>
      <el-row>
        用户名:{{username}}
      </el-row>
      <el-row>
        邮箱:{{email}}
      </el-row>
    </el-card> -->

    <el-row :gutter="20">

      <el-col :span="6" :xs="24">
        <el-card class="user_card">
          <div>
            <el-avatar src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" />
          </div>
          <br>
          <el-row>
            用户编号:{{ userId }}
          </el-row>
          <el-row>
            用户名:{{ username }}
          </el-row>
          <el-row>
            邮箱:{{ email }}
          </el-row>


          <!-- 这里修改了                   -->
          <el-row>通过的题目：</el-row>
          <el-row v-for="id in acceptProblem" :key="id">
              <span>{{id}} </span>
          </el-row>



        </el-card>
      </el-col>


    </el-row>
  </div>
</template>

<script>
export default {
  name: "User",
  data(){
    return{
      userId:1,
      username:'',
      email:'',
      acceptProblem:[],


    }
  },
  created() {
    this.userId=sessionStorage.getItem("userid");
    this.getUserInformation();
    this.getAcceptProblem();
  },
  methods:{
    getUserInformation:function (){
      //const url='http://localhost:8081/';
      const url='http://106.15.234.251:8081/';
      this.$axios.get(url + 'user/index',
          {params: {userId:this.userId}})
          .then((response) => {
            console.log(response);
            const data = response.data;
            if (data.code === 200) {
              this.email = data.data.email;
              this.username = data.data.username;

              //console.log(this.problemList);
            } else {
              console.log(data.msg);
              alert(data.msg);
            }
          })
    },

    getAcceptProblem:function (){
      //const url='http://localhost:8081/';
      const url='http://106.15.234.251:8081/';
      this.$axios.get(url + 'user/accept',
          {params: {userId:this.userId}})
          .then((response) => {
            console.log(response);
            const data = response.data;
            if (data.code === 200) {
              this.acceptProblem = data.data.acceptList;


              //console.log(this.problemList);
            } else {
              console.log(data.msg);
              alert(data.msg);
            }
          })
    },
  }
}
</script>

<style scoped>

.user_card {
  margin-top: 10px;
  margin-left: 10px;
}

.profile_card {
  margin-top: 10px;
  margin-right: 10px;
}
</style>