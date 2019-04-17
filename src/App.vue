<template>
    <div id="app">
        <section class="hero is-medium is-pink is-dark is-bold">
            <div class="container">
                <div class="hero-head">
                    <div class="navbar">
                        <div class="navbar-board">
                            <img src="/ziti.png">
                        </div>
                        <div class="navbar-end">
                            <div class="navbar-item">
                                <router-link to="/Login" @click.native="checkActive('login')">登陆</router-link>
                            </div>
                            <div class="navbar-item">
                                <router-link to="/SignUp" @click.native="checkActive('signup')">注册</router-link>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="hero-body">
                    <router-link to="/" @click.native="checkActive('checkActive')"><h1 class="title is-size-1">
                        网络攻防实验平台
                    </h1></router-link>

                </div>
                <div class="hero-foot">

                    <nav class="tabs is-boxed is-fullwidth">
                        <ul>
                            <li class="page" v-for="item in pages" :key='item.value' :class='{"is-active":item.active}'>
                                <router-link :to="item.name" @click.native="checkActive(item.name)">
                                    {{item.name}}
                                </router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
        <section id="main" class="container">
            <router-view></router-view>
        </section>
        <footer class="footer">
            <div class="content has-text-centered"><p>Power by <a href="http://blog.mashiroc.fun/">Mashiroc</a></p></div>
        </footer>
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
    export default {
        data() {
            return {
                pages: [{name: "Teams", active: false},
                    {name: "Challenges", active: false},
                    {name: "Scoreboard", active: false},
                    {name: "Match", active: false},
                    {name: "Shop", active: false}]
            }
        },
        methods: {
            checkActive: function (name) {
                for (let i in this.pages) {
                    this.pages[i].active = this.pages[i].name === name;
                }
            }
        }
    }
</script>

<style scoped>
    #main {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

    .page {
        width:20%;
    }
</style>