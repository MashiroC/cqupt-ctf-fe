<template>
    <div class="container">
        <div id="rank">
            <el-table
                    :data="rank.nowData"
                    stripe
                    style="width: 100%">
                <el-table-column
                        prop="rank"
                        label="Rank"
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="Name"
                        width="360">
                </el-table-column>
                <el-table-column
                        prop="motto"
                        label="Motto"
                        width="480">
                </el-table-column>
                <el-table-column
                        prop="score"
                        label="Score"
                        width="90">
                </el-table-column>
                <el-table-column
                        prop="solved"
                        label="Solved"
                        width="90">
                </el-table-column>
                <el-table-column
                        prop="submitted"
                        label="Submitted"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="ratio"
                        label="AC Ratio"
                        width="90">
                </el-table-column>
            </el-table>
            <el-pagination
                    @current-change="renderData"
                    :page-size="20"
                    :pager-count="11"
                    :current-page="rank.num"
                    layout="prev, pager, next"
                    :total="rank.totalData.length">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Scoreboard",
        data() {
            return {
                url: {
                    initPage: ''//打开界面请求数据时的url
                },
                pagination:
                    {
                        leftEllipsis: true,
                        rightEllipsis:
                            true,
                        maxPage:
                            11,
                        centerPages:
                            [5, 6, 7],
                        currentPage:
                            6
                    },
                rank: {
                    num: 1,
                    totalData: [],
                    nowData: [],
                }
            }
        },
        computed: {
            thisRankPage: function () {
                // return this.rank.data.slice((this.pagination.currentPage - 1) * 25, this.pagination.currentPage * 25);
            }
        },
        mounted: function () {

            //下面是模拟的排名数据
            let num = Math.ceil(Math.random() * 500);
            let tempRank = [];
            for (let i = 0; i < num; i++) {
                let person = {
                    name: "余歌 " + (i + 1) + " 号",
                    motto: "我永远讨厌前端。真香。",
                    score: Math.ceil(Math.random() * 10000),
                    solved: 1,
                    submitted: 1
                };
                tempRank.push(person)
            }
            tempRank.sort(function (a, b) {
                return b.score - a.score;
            });
            for (let i = 0; i < tempRank.length; i++) {
                tempRank[i].rank = i + 1;
                tempRank[i].ratio = tempRank[i].solved / tempRank[i].submitted;
                this.rank.totalData.push(tempRank[i]);
            }
            //--------------

            //下面是根据总共页数来控制组件
            this.pagination.maxPage = Math.floor(num / 25) + 1;
            this.renderData(1);
            //TODO:还要渲染一下第一页的数据
        },
        methods: {
            goPage(num) {
                if (num > 0 && this.pagination.maxPage - this.pagination.currentPage > 0) {
                    this.renderData(this.pagination.currentPage + 1);
                } else if (num < 0 && this.pagination.currentPage > 1) {
                    this.renderData(this.pagination.currentPage - 1)
                }
            },
            renderData(num) {
                //渲染分页
                let array = [];
                for (let i = (num - 1) * 20; i < num * 20 && i < this.rank.totalData.length; i++) {
                    array.push(this.rank.totalData[i])
                }
                this.rank.nowData = array;
                //TODO:请求，渲染数据
            }
        }
    }
</script>

<style scoped>
    #rank {
        padding-bottom: 2em;
    }
</style>
