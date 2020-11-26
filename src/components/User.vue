<template>
  <div>
    <el-card>
      <el-row>
        用户编号:{{userId}}
      </el-row>
      <el-row>
        用户名:{{username}}
      </el-row>
      <el-row>
        邮箱:{{email}}
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "User",
  data(){
    return{
      userId:1,
      username:'',
      email:''
    }
  },
  created() {
    //this.userId=sessionStorage.getItem("userid");
    this.getUserInformation();
  },
  methods:{
    getUserInformation:function (){
      const url = 'http://localhost:8081/';
      this.$axios.get(url + 'user/index',
          {params: {userId:this.userId}})
          .then((response) => {
            console.log(response);
            const data = response.data;
            if (data.code === 200) {
              this.email=data.data.email;
              this.username=data.data.username;

              //console.log(this.problemList);
            } else {
              console.log(data.msg);
              alert(data.msg);
            }
          })
    }
  }
}
</script>

<style scoped>

</style>