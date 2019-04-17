<template>
    <div class="container">
        <div class="modal" :class="{'is-active':active}">
            <div class="modal-background" @click="hidePanel()"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">{{problemName}} <br> <small>{{problemPoint}} Point</small></p>
                    <button class="delete" aria-label="close" @click="hidePanel"></button>
                </header>
                <section class="modal-card-body">
                    {{problemText}}
                </section>
                <footer class="modal-card-foot">
                    <div class="columns is-flex" style="width: 100%">
                        <div class="column is-10">
                                <input class="input is-dark" type="text" placeholder="Input flag" >
                        </div>
                        <div class="column">
                            <button class="button is-dark is-4">enter</button>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        <div v-for="type in challenges" :key="type.value">
            <div class="level">
                <div class="level-item"><p class="title">{{type.name}}</p></div>
            </div>
            <div v-for="columnIndex in getColumn(type)" :key="columnIndex" class="tile is-12">
                <div v-for="item in tttttt(type,columnIndex)" :key="item.value"
                     class="tile is-3 is-parent is-vertical">
                    <div class="button is-dark is-large tile is-vertical" @click="showPanel($event,item)"
                         :class="{'is-loading':item.name===isLoading}">
                        <div class="tile is-parent is-vertical"><p class="is-size-5">{{item.name}}</p></div>
                        <div class="tile is-parent is-vertical"><p class="is-size-5">{{item.score}}</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {

        data() {
            return {
                isLoading: "",
                problemText: "asd",
                problemName: "asd",
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

            showPanel: function (event, item) {
                this.isLoading = item.name;
                this.$http.get("http://localhost:1234/getQuestion").then(function (res) {
                    this.problemName = item.name;
                    this.problemText = res.body;
                    this.active = true;
                    this.isLoading = "";
                }, function (res) {
                    this.isLoading = "";
                    alert("请求错误");
                });
            },
            hidePanel: function () {
                this.active = false;
            }
        }
    }
</script>

<style scoped>
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

    #problemTitle {
        padding-bottom: 1em;
    }

    #problemText {
        overflow: auto;
        height: 31em;
        width: 55em;
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