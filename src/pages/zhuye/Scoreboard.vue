<template>
    <div class="container">
        <div id="rank">
            <el-table :data="rank.nowData" stripe style="width: 100%">
                <el-table-column prop="Rank" label="Rank" width="80">
                </el-table-column>
                <el-table-column prop="Name" label="Name" width="360">
                </el-table-column>
                <el-table-column prop="Motto" label="Motto" width="480">
                </el-table-column>
                <el-table-column prop="Score" label="Score" width="90">
                </el-table-column>
                <el-table-column prop="Solved" label="Solved" width="90">
                </el-table-column>
                <el-table-column prop="Submitted" label="Submitted" width="100">
                </el-table-column>
                <el-table-column prop="Ratio" label="AC Ratio" width="90">
                </el-table-column>
            </el-table>
            <el-pagination @current-change="renderData" :page-size="20" :pager-count="11" :current-page="rank.num"
                layout="prev, pager, next" :total="rank.totalData.length">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                Name: "Scoreboard",
                url: {
                    initPage: '' //打开界面请求数据时的url
                },
                rank: {
                    num: 1,
                    totalData: [],
                    nowData: [],
                }
            }
        },
        computed: {},
        mounted: function () {

            if (this.checkLogin()) {
                this.$http.get(this.apiDomain + "/rank", {
                    headers: {
                        Authorization: "Bearer " + sessionStorage.getItem("jwt")
                    }
                }).then(function (res) {
                    let ranks = res.body.data.rank;
                    for (let i = 0; i < ranks.length; i++) {
                        let u = ranks[i];
                        if (u.Submitted === 0) {
                            u.Ratio = 0
                        } else {
                            u.Ratio = (u.Solved / u.Submitted).toFixed(2);
                        }
                    }
                    this.rank.nowData.sort(function (a, b) {
                        return b.Score - a.Score
                    });
                    for (let i = 0; i < ranks.length; i++) {
                        ranks[i].Rank = i + 1
                    }
                    this.rank.nowData = ranks
                })
                this.renderData(1);
            } else {
                location.href = "/#/login?origin=" + this.Name;
            }

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