<template>
    <!--<div class="level">-->
    <!--<div class="level-item">-->
    <div class="login">
        <h1 class="has-text-centered is-size-1">Login</h1>
        <div class="field">
            <label for="Username">Username</label>
            <div class="control has-icons-left">
                <input id="Username" class="input is-dark" type="text" placeholder="please input your username">
                <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                    </span>
            </div>
        </div>
        <div class="field">
            <label for="Password">Password</label>
            <div class="control has-icons-left">
                <input id="Password" type="password" class="input is-dark" placeholder="please input your password">
                <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
            </span>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <button class="button is-dark">Submit</button>
                        </div>
                        <div class="level-item"><a href="">Forgot your password?</a></div>
                    </div>
                </div>

            </div>
        </div>
        <div class="field">
            <div class="control">

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
    .login {
        width: 30%;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>