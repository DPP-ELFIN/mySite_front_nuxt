<template>
    <div class="home_main">
        <div class="container">
            <div class="details">
                <h1>站点介绍</h1>
                <p>这是一个囊括 前端 + 后端 + 运维的项目</p>
                <p>里面的内容包括 前端 + 后端 + 运维 的各种技术知识，是我两年所掌握的知识，掌握有限，请多包含！</p>
                <p>此项目是本人入行两年的一次总结</p>
                <p>此项目是本人从头到尾一个人设计、开发、发布部署、运维</p>
                <p>需要的同学请到GitHub自行下载</p>
                <p>有任何疑问的同学可以注册登录进我的后台与我联系</p>
                <p>有任何建议可以在本网站与我留言，我将尽力回复...</p>
                <p>目前在职，寻找机会中，欢迎内推...</p>
                <div class="btn">
                    <el-button type="info">
                        <nuxt-link to="/docs">进入文档</nuxt-link>
                    </el-button>
                    <div class="pro_address">
                        GitHub：<nuxt-link target="_blank"
                            to="https://github.com/DPP-ELFIN/mySite_front_nuxt">https://github.com/DPP-ELFIN/mySite_front_nuxt</nuxt-link>
                    </div>
                </div>

            </div>

            <div class="contact">
                <h1>与我联系</h1>
                <p>想与我一同开发的同学可直接与我联系：QQ：19875915067</p>
                <p>在这个项目中将获得从0到1的项目经验</p>
                <p>企业级的开发流程</p>
                <p>完全免费！！！</p>
                <p>时间自由</p>
                <p>本人力所能及的毫无保留的解答</p>
                <p>（还未建群，有需要会建立一个项目的开发沟通群）</p>
                <div class="btn">
                    <el-button type="info">
                        <nuxt-link to="/plane">开发进度</nuxt-link>
                    </el-button>
                    <span class="pro_address">开发中...</span>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang='ts'>


</script>


<style scoped lang='scss'>
.home_main {
    // flex: 1;

    .container {
        width: 1240px;
        margin: 0 auto;

        // height: 100%;
        // display: flex;
        // align-items: center;
        .details,
        .contact {
            height: calc(100vh - 60px);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            p {
                color: rgb(113, 113, 122)
            }

            .btn {
                display: flex;
                align-items: center;

                .pro_address {
                    margin-left: 20px;
                    margin-left: 20px;
                    border: 1px solid #acacac;
                    padding: 5px;
                    border-radius: 5px;
                    background: #acacac;
                }
            }
        }
    }

    h1 {
        font-size: 4.5rem;
        line-height: 1;
    }
}
</style>