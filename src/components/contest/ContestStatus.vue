<template>
  <div class="status_container">



    <el-row>
      <el-table :data="statusList" >
        <el-table-column label="提交编号" prop="submissionId" >
        </el-table-column>

        <el-table-column label="用户编号" prop="uid" >
        </el-table-column>

        <el-table-column label="语言" prop="languageId">
        </el-table-column>

        <el-table-column label="题目编号" prop="problemId" >
        </el-table-column>

        <el-table-column label="评测结果" prop="submissionJudgeResult" >
        </el-table-column>

        <el-table-column label="提交时间" prop="submissionSubmitTime" >
        </el-table-column>

        <el-table-column label="消耗内存" prop="submissionUsedMemory" >
        </el-table-column>

        <el-table-column label="消耗时间" prop="submissionUsedTime" >
        </el-table-column>

        <el-table-column label="查看完整代码"  >
          <template slot-scope="scope">
            <el-button type="primary" v-on:click="showAllCode(scope.row)">完整代码</el-button>
          </template>
        </el-table-column>



      </el-table>

      <!--分页-->
      <el-pagination
          background
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :total="total"
          :page-size="pagesize"
          :current-page="pagenum">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ContestStatus",
  data(){
    return {
      userId:0,
      statusList:[],
      total:0,
      pagenum:1,
      pagesize:10,
      contestId:0

    }
  },
  created() {
    this.userId = sessionStorage.getItem("userid");
    this.contestId=sessionStorage.getItem("contestId");
    this.getStatusList();
  },
  methods: {
    getStatusList: function() {
      const url=this.APi;
      this.$axios.get(url + 'contest/statusList',
          { params: {
            pagenum: this.pagenum
              , pagesize: this.pagesize
              , contestId: this.contestId
              , userid:this.userId}})
          .then((response) => {
            console.log(response);
            const data = response.data;
            if (data.code === 200) {
              this.statusList = data.data.statusList;
              this.total = data.data.total;

              //console.log(this.problemList);
            } else {
              console.log(data.msg);
              alert(data.msg);
            }
          })

    },

    handleCurrentChange: function(newnum) {
      this.pagenum = newnum;
      console.log(this.pagenum);
      this.getStatusList();
    },
    showAllCode:function(statusInfo) {
      //console.log(statusInfo.submissionCode);
      location='/code?submissionId=' + statusInfo.submissionId;
    }


  }
}
</script>

<style scoped>

</style>
