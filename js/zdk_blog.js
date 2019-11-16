$(function () {
    const id2UrlMap = new Map();
    id2UrlMap.set("article1","html/web中的分页研究.htm")
    id2UrlMap.set("article2","html/blog.html")
    id2UrlMap.set("cwoc","html/confusedWordOfSoftware.htm")
    id2UrlMap.set("articlePR","html/PageRank/pagerank.html")
    id2UrlMap.set("articleDateHandle","html/java中的时间处理/java中的时间处理.html")
    id2UrlMap.set("articleFrontSel","html\\前端框架技术栈的选择\\前端框架技术栈的选择.html")
    id2UrlMap.set("articleSpringdataJPA","html\\springdata-jpa\\springdata-jpa.html")
    id2UrlMap.set("articleRest_Restful","html\\Rest&Restful\\Rest&Restful.html")
    id2UrlMap.set("articleWechatDev","html/wechat_dev/wechat_dev.html")
    id2UrlMap.set("articleTran","html/对hadoop官方文档中完全分布式搭建和HA部分的翻译/对hadoop官方文档中完全分布式搭建和HA部分的翻译.html")
    id2UrlMap.set("articleHadoopHA","html/hadoopHA的搭建_0/hadoopHA的搭建_0.html")
    id2UrlMap.set("articleHadoopBuild","html/hadoop集群非HA非安全模式的搭建_0/hadoop集群非HA非安全模式的搭建_0.html")
    id2UrlMap.set("articleVMStandard","html/克隆模板虚拟机的设置_0/克隆模板虚拟机的设置_0.html")
    id2UrlMap.set("articleHive","html/hive的窗口函数、排名函数、lve/hive的窗口函数、排名函数、lve.html")
    id2UrlMap.set("articleHiveTY","html/hive调优/hive调优.html")

    /*
    点击viewDetails按钮时的业务
     */
    const viewDetails = document.querySelectorAll(".viewDetails");
    viewDetails.forEach((viewDetail) => {
        viewDetail.onclick = (event) => {
            id2UrlMap.forEach((v,k) => {
                if (event.target.id === k) window.open(v,"_blank");
            })
        }
    })
})
