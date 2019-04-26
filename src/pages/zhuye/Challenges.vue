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
            <div id="problem-dialog" v-html="problemText">
                {{problemText}}
            </div>

            <span slot="footer" class="dialog-footer">
                <el-row :gutter="30">
                    <el-col :span="21">
                        <el-input v-model="flag" placeholder="Flag"></el-input>
                    </el-col>
                    <el-col :span="2">
                        <el-button type="primary" @click="submitFlag()" :disabled="!canSubmit">Submit</el-button>
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
                    <el-badge :value="item.Solve" class="item">
                        <el-button @click="showPanel(type.name,item.ID)" class="problem-box" type="primary"
                                   v-loading="loading===item.ID">
                            <div>
                                {{item.Name}}<br>
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
    /* eslint-disable no-console */


    export default {
        data() {
            return {
                dialogVisible: false,
                loading: "",
                flag: "",
                canSubmit: true,
                problemId: 0,
                problemText: "asd",
                problemName: "Hacked for fun",
                problemPoint: 1000,
                hide: true,
                active: false,
                challenges: []
            }
        },
        mounted: function () {
            this.$http.get("http://localhost:8888/questions").then(function (res) {
                    this.challenges = res.body.data
                }
            )
        },
        Name: "Challenges",
        methods: {
            getColumn: function (type) {
                return parseInt(type.questions.length / 4) + 1
            },

            tttttt: function (type, index) {
                return type.questions.slice((index - 1) * 4, index * 4)
            },

            showPanel: function (type, id) {
                this.loading = id;

                let q = this.findQuestion(type, id);
                this.problemName = q.Name;
                this.problemPoint = q.Score;
                this.problemText = q.Content;
                this.problemId = q.ID;
                this.canSubmit = !(q.Solve === "pass");
                this.problemText = this.problemText.replace(/\n/g, '<br>');
                this.loading = "";
                this.dialogVisible = "true";

            },

            findQuestion: function (type, id) {
                for (let i = 0; i < this.challenges.length; i++) {
                    if (this.challenges[i].name === type) {
                        for (let j = 0; j < this.challenges[i].questions.length; j++) {
                            if (this.challenges[i].questions[j].ID === id) {
                                return this.challenges[i].questions[j]
                            }
                        }
                    }
                }
            },

            findQuestionById: function (id) {
                for (let i = 0; i < this.challenges.length; i++) {
                    for (let j = 0; j < this.challenges[i].questions.length; j++) {
                        if (this.challenges[i].questions[j].ID === id) {
                            return this.challenges[i].questions[j]
                        }
                    }
                }
            },
            flagError: function () {
                this.$message.error('Flag错误！')
            },

            ac: function () {
                this.$message({message: 'Flag正确！', type: 'success'});
                let q = this.findQuestionById(this.problemId);
                q.Solve = "pass";
                this.dialogVisible = false
            },

            error: function () {
                this.$message({message: '🐎？', type: 'success'});
            },
            submitFlag: function () {
                this.$http.post("http://localhost:8888/submit", {
                    "Flag": this.flag,
                    "QuestionId": this.problemId
                }).then(function (res) {
                    console.log(res)
                    let code = res.body.status;
                    switch (code) {
                        case 10000:
                            this.ac();
                            break;
                        case 10021:
                            this.flagError();
                            break;
                        default:
                            this.error()
                    }
                },function(res){
                    this.error()
                })
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
        height: 25rem;
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
