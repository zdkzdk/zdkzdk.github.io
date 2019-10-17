$(function () {
    const id2UrlMap = new Map();
    id2UrlMap.set("article1","html/web中的分页研究.htm")
    id2UrlMap.set("article2","html/blog.html")
    id2UrlMap.set("cwoc","html/confusedWordOfSoftware.htm")
    id2UrlMap.set("articlePR","html/PageRank/pagerank.html")
    id2UrlMap.set("articleDateHandle","html/java中的时间处理/java中的时间处理.html")
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