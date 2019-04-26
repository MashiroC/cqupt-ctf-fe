<template>
    <div id="app">
        <el-row style="border-bottom:0">
            <el-col :span="24">
                <el-menu
                        class="el-menu-demo"
                        mode="horizontal"
                        default-active="/"
                        :router="true"
                        background-color="#FFB6C1"
                        text-color="#1f4e5f"
                        active-text-color="#BE7ED6"
                        :collapse-transition="false"
                        style="border-bottom: 0">
                    <el-menu-item index="/"><img src="/ziti.png"></el-menu-item>
                    <el-menu-item v-for="item in pages" :key='item.value' :index="item.Name">{{item.Name}}
                    </el-menu-item>
                    <div v-if="hasLogin()">
                        <el-menu-item class="onright">{{this.username}}</el-menu-item>
                    </div>
                    <div v-else>
                        <el-menu-item index="/signup" class="onright">Signup</el-menu-item>
                        <el-menu-item index="/login" class="onright">Login</el-menu-item>
                    </div>
                </el-menu>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="hero background-primary">网络攻防实验平台</div>
            </el-col>
        </el-row>
        <el-container id="main">
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>
                <div class="footer"><p><a href="http://blog.mashiroc.fun/" target="_blank">Powered by 0xfa.Mashiroc</a>
                </p>
                </div>
            </el-footer>
        </el-container>

        <!--<section class="hero is-dark">-->
        <!--<div class="hero-body">-->
        <!--<div class="container has-text-centered">-->
        <!--power by <a href="http://blog.mashiroc.fun/">Mashiroc</a>-->
        <!--</div>-->
        <!--</div>-->
        <!--</section>-->
    </div>
</template>

<script>
    import global from "./Global"
    export default {
        data() {
            return {
                pages: [{Name: "Teams", active: false},
                    {Name: "Challenges", active: false},
                    {Name: "Scoreboard", active: false},
                    {Name: "Match", active: false},
                    {Name: "Shop", active: false}]
            }
        },
        methods: {
            checkActive: function (name) {
                for (let i in this.pages) {
                    this.pages[i].active = this.pages[i].Name === name;
                }
            },
            hasLogin: function () {
                this.username=global.username
                return global.username!==""
            }
        }
    }
</script>

<style scoped>

    /*.container {*/
    /*text-align: center;*/
    /*}*/

    #app {
        margin-top: 0;
        padding-top: 0;
    }

    .hero {
        margin-top: 0;
        height: 10rem;
        padding-top: 5.7rem;
        padding-left: 10rem;
        font-size: 45px;
    }

    .header {
        background-color: #303133;
    }

    .el-menu-demo {
        margin-bottom: 0;
    }

    #main {
        text-align: center;
        padding-top: 1rem;
        padding-bottom: 2rem;
    }

    /*.page {*/
    /*width: 20%;*/
    /*}*/

    .footer {
        text-align: center;
        padding-top: 2rem;
        padding-bottom: 2rem;
        font-size: 12px;
        color: #303133;
    }


    .footer a:visited {
        color: #303133;
        text-decoration: underline;
    }

    .footer a:hover {
        color: #909399;
        text-decoration: none;
    }

    .footer a:active {
        color: #303133;
        text-decoration: none;
    }

    .onright {
        float: right !important;
    }
</style>

