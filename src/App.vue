<template>
    <div id="app">
        <div id="header-nav">
            <!-- <router-link to="/">Home</router-link> -->
        </div>
        <router-view/>
        <div id="footer-nav">
          sup
        </div>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="scss">
    body {
        overflow: scroll;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

        .nav-bars{
            background: cornflowerblue;
            position: fixed;
            width: 100%;
            padding: 10px;
            color: white;

            a {
                color: white;
                text-decoration: none;
            }
        }

        #header-nav {
            top: 0;
            left: 0;
        }

        // #footer-nav {
        //     bottom: 0;
        //     left: 0;
        // }
    }
</style>
