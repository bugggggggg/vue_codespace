<template>
<div>

  讨论
  <el-timeline>
    <el-timeline-item :timestamp="discussion.discussionTime" placement="top" v-for="discussion in discussionList" :key="discussion.discussionId">
      <el-card>
        <div>{{discussion.discussionUid}}</div>
        <div>{{discussion.content}}</div>
      </el-card>
    </el-timeline-item>
  </el-timeline>
  <el-pagination
      background
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :total="total"
      :page-size="pagesize"
      :current-page="pagenum">
  </el-pagination>
</div>
</template>

<script>
export default {
  name: "Dicussion",
  data(){
    return{

      problemId: 1000,
      userId: 3,
      discussionList:[],
      total:0,
      pagenum:1,
      pagesize:5,
    }
  },

  created() {
    this.problemId = window.location.href.split("?")[1].split("=")[1];
    this.userId = sessionStorage.getItem("userid");

  },
  methods:{
    getDiscussionList:function() {
      const url='http://localhost:8081/';
      //const url = 'http://106.15.234.251:8081/';
      this.$axios.get(url + 'discussion/all',
          { params: { pagenum: this.pagenum, pagesize: this.pagesize, problemId:this.problemId }})
          .then((response) => {
            //console.log(response);
            const data = response.data;
            if(data.code === 200){
              this.discussionList = data.data.discussionList;
              this.total = data.data.total;

              //console.log(this.problemList);
            }
            else{
              console.log(data.msg);
              alert(data.msg);
            }
          })


    },

    handleCurrentChange:function(newnum){
      this.pagenum = newnum;
      console.log(this.pagenum);
      this.getProblemList();
    }
  }
}
</script>

<style scoped>

</style>