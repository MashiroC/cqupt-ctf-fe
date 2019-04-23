<template>
    <div class="container">
        <!--<div>-->
        <!--<el-button>默认按钮</el-button>-->
        <!--<el-button type="primary">主要按钮</el-button>-->
        <!--<el-button type="success">成功按钮</el-button>-->
        <!--<el-button type="info">信息按钮</el-button>-->
        <!--<el-button type="warning">警告按钮</el-button>-->
        <!--<el-button type="danger">危险按钮</el-button>-->
        <!--</div>-->


        <!--<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>-->

        <el-dialog
                :visible.sync="dialogVisible"
                width="70%"
        >
            <div slot="title" style="text-align: center"><h1>{{problemName}}</h1><h5>{{problemPoint}}</h5></div>
            <div id="problem-dialog">
                {{problemText}}
            </div>

            <span slot="footer" class="dialog-footer">
                <el-row :gutter="30">
                    <el-col :span="21">
                        <el-input v-model="flag" placeholder="Flag"></el-input>
                    </el-col>
                    <el-col :span="2">
                        <el-button type="primary" @click="submitFlag()">Submit</el-button>
                    </el-col>
                </el-row>
  </span>
        </el-dialog>
        <div v-for="type in challenges" :key="type.value">
            <el-row>
                <el-col :span="24" class="problem-type">
                    <div>{{type.name}}</div>
                </el-col>
            </el-row>
            <el-row v-for="columnIndex in getColumn(type)" :key="columnIndex" :gutter="40">
                <el-col :span="6" v-for="item in tttttt(type,columnIndex)" :key="item.value">
                    <el-badge value="pass" class="item">
                        <el-button @click="showPanel(item.name)" class="problem-box" type="primary"
                                   v-loading="loading===item.name">
                            <div>
                                {{item.name}}<br>
                                {{item.score}}
                                <div></div>
                            </div>
                        </el-button>
                    </el-badge>
                </el-col>
            </el-row>
        </div>
    </div>

</template>

<script>
    /* eslint-disable */


    export default {

        data() {
            return {
                dialogVisible: false,
                loading: "",
                flag: "",
                problemText: "asd",
                problemName: "Hacked for fun",
                problemPoint: 1000,
                hide: true,
                active: false,
                challenges: [{
                    name: "Web",
                    questions: [{
                        name: "pages",
                        score: 100,
                        // isLoading:false,
                    }, {
                        name: "刀塔自走棋",
                        score: 1000
                    }, {
                        name: "Fucking CSS",
                        score: 9999
                    }, {
                        name: "hacked by kaii",
                        score: 9999999
                    }, {
                        name: "DotA auto chess",
                        score: 0
                    }]
                }, {
                    name: "pwn",
                    questions: [{
                        name: "pwn0",
                        score: 100
                    }, {
                        name: "pwn1",
                        score: 1000
                    }, {
                        name: "pwn2",
                        score: 9999
                    }, {
                        name: "pwn3",
                        score: 9999999
                    }, {
                        name: "pwn4",
                        score: 0
                    }]
                }
                ]
            }
        },
        mounted: function () {
//初始化加载题目 暂时写死
        },
        name: "Challenges",
        methods: {
            getColumn: function (type) {
                return parseInt(type.questions.length / 4) + 1
            },

            tttttt: function (type, index) {
                return type.questions.slice((index - 1) * 4, index * 4)
            },

        testData:function (item) {
            this.problemName = "假题";
            this.problemPoint = -99999;
            this.problemText = "别看了这是道假题";
            this.loading = "";
            this.dialogVisible = "true";
        },

            showPanel: function (item) {
                item = event.currentTarget;
                this.loading = item;
                this.testData(item);


                // this.$http.get("http://localhost:1234/getQuestion").then(function (res) {
                //     let problem=res.body;
                //     this.problemName = problem.title;
                //     this.problemPoint=problem.score;
                //     this.problemText = problem.text;
                //     this.loading = "";
                //     this.dialogVisible = "true";
                // }, function (res) {
                //     console.log(res);
                //     this.loading = "";
                //     this.dialogVisible = "true";
                //     alert("请求错误");
                // });
            },
            submitFlag: function () {

            },
            hidePanel: function () {
                this.active = false;
            }
        }
    }
</script>

<style scoped>

    .el-row {
        margin-bottom: 20px;

    }

    .el-card {
        border-radius: 10px;
    }

    .problem-box {
        height: 5rem;
        width: 15rem;
        text-align: center;
        color: #1f4e5f;
        border-radius: 10px;
        font-size: 17px;
        line-height: 30px;
        /*background: #303133;*/
    }

    .el-row :last-child {
        margin-bottom: 0;
    }

    .overlay {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 100;
        opacity: 0.5;
        background-color: #000;
    }

    .lightbox {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        z-index: 101;
        width: 60em;
        height: 40em;
        padding-left: 2.5em;
        padding-right: 2.5em;
        padding-top: 1.0em;
        background-color: white;
        border-radius: 1em;
        box-shadow: 5px 5px 5px 5px #888888;
    }

    #problem-dialog {
        text-align: left;
        height: 30rem;
        overflow: auto;
    }

    .problem-type {
        font-size: 2rem;
        text-align: center;
    }

    .title {
        text-align: center;
    }

    #submit {
        bottom: 0;
        padding-top: 0.5em;
        padding-bottom: 0.5em;
    }

    .hide {
        display: none;
    }
</style>
