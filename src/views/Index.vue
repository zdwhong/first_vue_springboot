<template>
    <div id="app">
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <!--<el-menu :default-openeds="['1']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>员工管理</template>
                        <el-menu-item index="1-1">员工列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-message"></i>部门管理</template>
                        <el-menu-item index="2-1">部门列表</el-menu-item>
                    </el-submenu>
                </el-menu>-->
                <el-menu :default-openeds="['0','1']" router>
                    <el-submenu v-for="(menu,index) in $router.options.routes" :index="index+''">
                        <template slot="title"><i class="el-icon-message"></i>{{index}}-{{menu.name}}</template>
                        <el-menu-item v-for="(item,index2) in menu.children" :index="item.path" :class="$route.path==item.path?'is-active':''">{{index}}-{{index2}}-{{item.name}}</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>
                </el-header>

                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    };
</script>

<style>

</style>
