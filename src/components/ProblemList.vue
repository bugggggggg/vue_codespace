<template>
  <div>

    <el-card>
      <el-input placeholder="请输入要查找的题号" v-model="query" >
        <el-button slot="append" icon="el-icon-search" v-on:click="getProblemList"></el-button>
      </el-input>
    </el-card>


    <el-row>
     <el-table :data="problemList" >
       <el-table-column label="题目序号" prop="problemId">
       </el-table-column>

       <el-table-column label="题目名称" prop="problemName" >
       </el-table-column>

       <el-table-column label="题目链接">
         <template slot-scope="scope">
           <el-button type="primary" v-on:click="toProblem(scope.row)"></el-button>
         </template>
       </el-table-column>

     </el-table>

      <!--分页-->
      <el-pagination
          background
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :total="total" :page-size="pagesize" :current-page="pagenum">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>



export default {
  name: "ProblemList",
  data(){
    return {
      problemList:[],
      total:0,
      pagenum:1,
      pagesize:1,
      query:''
    }
  },
  created() {
    this.getProblemList();
  },
  methods:{
    getProblemList:function(){
      const url='http://localhost:8081/';
      this.$axios.get(url+'problemList',
          {params: {pagenum:this.pagenum,pagesize:this.pagesize,query:this.query}})
      .then((response)=>{
        console.log(response);
        const data=response.data;
        if(data.code===200){
          this.problemList=data.data.problemList;
          this.total=data.data.total;

          //console.log(this.problemList);
        }
        else{
          console.log(data.msg);
          alert(data.msg);
        }
      })


    },

    toProblem:function(problemInfo){
      console.log(problemInfo.problemId);
      location=location.href+'/problem?problemId='+problemInfo.problemId;
    },

    handleCurrentChange:function(newnum){
      this.pagenum=newnum;
      console.log(this.pagenum);
      this.getProblemList();
    }


  }
}
</script>

<style scoped>

</style>