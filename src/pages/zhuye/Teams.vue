<template>
    <div style="text-align: center">
        <p style="font-size: 40px;">正在开发中</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                Name: "Teams",
            }
        },
        mounted: function () {
            if (this.checkLogin()) {
                //TODO:Teams页
            } else {
                location.href = "/#/login?origin=" + this.Name;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>