<template>
  <div>
    <el-card>
      <pre>{{code}}</pre>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Code",
  data(){
    return{
      submissionId:1,
      code:''
    }

  },
  created() {
    this.submissionId=window.location.href.split("?")[1].split("=")[1];
    this.getCode();
  },
  methods:{
    getCode:function (){
      //const url='http://localhost:8081/';
      const url='http://106.15.234.251:8081/';
      this.$axios.get(url+'getStatusById',
          {params: {submissionId:this.submissionId}})
          .then((response)=>{
            //console.log(response);
            console.log("代码获取成功")
            const data=response.data;
            if(data.code===200){
              this.code=data.data.submissionCode;
            }
            else{
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