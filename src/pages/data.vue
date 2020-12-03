<template>
    <base-page index='2'>
        <template slot="content">
            <div>
               <el-table
                    :data="userdata"
                    style="width: 100%"
                    :row-class-name="tableRowClassName"
                    :header-cell-style="tableHeaderColors"
                     @selection-change="handleSelectionChange">
                     <el-table-column
                        type="selection"
                        width="55">
                    </el-table-column>
                    <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="center" inline class="demo-table-expand">
                        <el-form-item label="航班">
                            <span>{{ props.flight }}</span>
                        </el-form-item>
                        <el-form-item label="出发地">
                            <span>{{ props.Departure }}</span>
                        </el-form-item>
                        <el-form-item label="目的地">
                            <span>{{ props.Arrive }}</span>
                        </el-form-item>
                        <el-form-item label="出发时间">
                            <span>{{ props.DepartureTime }}</span>
                        </el-form-item>
                        <el-form-item label="到达时间">
                            <span>{{ props.ArriveTime }}</span>
                        </el-form-item>
                        <el-form-item label="飞机型号">
                            <span>{{ props.type }}</span>
                        </el-form-item>
                        <el-form-item label="准点率">
                            <span>{{ props.rate }}</span>
                        </el-form-item>
                        </el-form>
                    </template>
                    </el-table-column>
                    
                    <el-table-column
                    label="航班"
                    prop="flight"
                    >
                    </el-table-column>
                    <el-table-column
                    label="出发地"
                    prop="Departure">
                    </el-table-column>
                    <el-table-column
                    label="目的地"
                    prop="Arrive">
                    </el-table-column>
                    <el-table-column
                    label="出发时间"
                    prop="DepartureTime">
                    </el-table-column>
                    <el-table-column
                    label="到达时间"
                    prop="ArriveTime">
                    </el-table-column>
                    <el-table-column
                    label="飞机型号"
                    prop="type">
                    </el-table-column>
                    <el-table-column
                    label="准点率"
                    prop="rate">
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button
                            size="mini"
                            type="danger"
                            @click.native.prevent="deleteRow(scope.$index, userdata)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <!-- <el-pagination
                background
                layout="prev, pager, next"
                :total="100">
                </el-pagination> -->
            </div>
        </template>
    </base-page>
</template>
<script>
import BasePage from "@/components/BasePage";
import request from "@/http/request";
import URL from "@/http/url";
export default {
  name: "opinion",

  components: {
    "base-page": BasePage
  },

  data() {
    return {
      userdata: []
    };
  },
  mounted() {
    //初始化
    const islogin = localStorage.getItem("isLogin");
    if (islogin) {
      this.dataInfo();
    } else {
      this.$router.push({ path: "/" });
    }
  },
  methods: {
    dataInfo() {
      return request({
        url: URL.data + "/"
      }).then(res => {
        this.userdata = res.data;
        console.log(res.data);
        return res;
      });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val);
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 1) {
        return "success-row";
      }
      return "";
    },
    tableHeaderColors({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color: #00A0B0;color: #ffffff;font-weight: 600;text-align:center;";
      }
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    deleteRow(index, rows) {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          rows.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>
<style>
.cell{
  text-align: center;
}
.element-menu-item {
  width: 240px;
}
</style>