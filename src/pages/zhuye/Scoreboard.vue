<template>
    <div>
        <div id="rank">
            <table class="table is-striped is-hoverable is-fullwidth">
                <thead>
                <tr>
                    <th style="width: 10%;"><p>Rank</p></th>
                    <th style="width: 15%;"><p>Name</p></th>
                    <th style="width: 35%;"><p>Motto</p></th>
                    <th style="width: 10%;"><p>Score</p></th>
                    <th style="width: 10%"><p>Solved</p></th>
                    <th style="width: 10%;"><p>Submitted</p></th>
                    <th style="width: 10%"><p>Ac Ratio</p></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in thisRankPage" :key="item.value">
                    <th>{{item.rank}}</th>
                    <th>{{item.name}}</th>
                    <th>{{item.motto}}</th>
                    <th>{{item.score}}</th>
                    <th>{{item.solved}}</th>
                    <th>{{item.submitted}}</th>
                    <th>{{item.ratio}}</th>
                </tr>
                </tbody>
            </table>
        </div>
        <nav class="pagination is-centered is-dark" role="navigation" aria-label="pagination">
            <a class="pagination-previous" @click="goPage(-1)">Previous</a>
            <a class="pagination-next" @click="goPage(1)">Next</a>
            <ul class="pagination-list">
                <li>
                    <a class="pagination-link" :class="{'is-current':pagination.currentPage===1}"
                       aria-label="Goto page 1" @click="renderData(1)">1</a>
                </li>
                <li><span class="pagination-ellipsis" v-if="pagination.leftEllipsis">&hellip;</span></li>
                <li v-for="item in pagination.centerPages" :key="item.value">
                    <a class="pagination-link" :class="{'is-current':pagination.currentPage===item}"
                       :aria-label="'Goto page '+item" @click="renderData(item)">{{item}}</a>
                </li>
                <li><span class="pagination-ellipsis" v-if="pagination.rightEllipsis">&hellip;</span></li>
                <li>
                    <a class="pagination-link" :class="{'is-current':pagination.currentPage===pagination.maxPage}"
                       :aria-label="'Goto page '+pagination.maxPage" @click="renderData(pagination.maxPage)"
                       v-if="pagination.maxPage!==1">{{pagination.maxPage}}</a>
                </li>
            </ul>
        </nav>
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
                    data: [],
                }
            }
        },
        computed: {
            thisRankPage: function () {
                return this.rank.data.slice((this.pagination.currentPage - 1) * 25, this.pagination.currentPage * 25);
            }
        },
        mounted: function () {

            //下面是模拟的排名数据
            let num = Math.ceil(Math.random() * 500);
            let tempRank = [];
            for (let i = 0; i < num; i++) {
                let person = {
                    name: "余歌 "+(i+1)+" 号",
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
                this.rank.data.push(tempRank[i]);
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
                this.pagination.currentPage = num;
                let max = this.pagination.maxPage;
                let current = this.pagination.currentPage;
                let array = [];
                for (let i = current - 1 < 2 ? 2 : current - 1; i <= current + 1 && i < max; i++) {
                    array.push(i);
                }
                this.pagination.centerPages = array;
                this.pagination.leftEllipsis = array[0] - 1 > 1;
                this.pagination.rightEllipsis = array[array.length - 1] + 1 < max;

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