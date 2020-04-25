<template>
    <div id="dept">
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="id" label="用户ID" width="100"></el-table-column>

            <el-table-column prop="departmentName" label="部门名称" width="850"></el-table-column>

            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!--分页-->
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[5, 10, 20, 100]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "Deptment",
        data() {
            return{
                total: 0, //总数量
                pageSize: 5,//默认的每页显示数量
                currentPage: 1,//默认的当前页
                tableData: []
            }
        },
        methods:{
            handleClick(row) {
                console.log(row);
            },
            //每页条数的变化
            handleSizeChange(pageSize) {
                //console.log(`每页 ${pageSize} 条`);
                const  _this = this;
                axios.get("http://localhost:8099/department/getListByPage/"+(_this.currentPage-1)+"/"+pageSize).then(function (resp) {
                    _this.tableData = resp.data.content;
                    _this.pageSize = resp.data.size;
                    _this.total = resp.data.totalElements;
                })
            },
            //点击某页查询数据
            handleCurrentChange(currentPage) {
                //console.log(`当前页: ${currentPage}`);
                const _this = this;
                _this.currentPage = currentPage;
                axios.get("http://localhost:8099/department/getListByPage/"+(_this.currentPage-1)+"/"+_this.pageSize).then(function (resp) {
                    _this.tableData = resp.data.content;
                    _this.pageSize = resp.data.size;
                    _this.total = resp.data.totalElements;
                })
            }
        },
        created() {
            const _this = this;
            axios.get("http://localhost:8099/department/getListByPage/"+(_this.currentPage-1)+"/"+_this.pageSize).then(function (result) {
                console.log(result);
                _this.tableData = result.data.content;
                _this.total = result.data.totalElements;
            })
        }

    }
</script>

<style scoped>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>
