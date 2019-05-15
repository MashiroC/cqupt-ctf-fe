<template>
    <div style="text-align: center">
        <p style="font-size: 40px;">正在开发中</p>
    </div>
</template>

<script>
    export default {
        Name: "Match",
        data() {
            return {
                Name: "Match",
            }
        },
        mounted: function () {
            if (this.checkLogin()) {
                //TODO:match页
            } else {
                location.href = "/#/login?origin=" + this.Name;
            }
        }
    }
</script>

<style scoped>

</style>