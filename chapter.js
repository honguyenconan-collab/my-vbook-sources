function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let el = doc.select(".chapter-list a");
        let data = [];
        for (let i = 0; i < el.size(); i++) {
            let e = el.get(i);
            data.push({
                name: e.text(),
                url: "https://uukanshu.cc" + e.attr("href"),
                host: "https://uukanshu.cc"
            });
        }
        return Response.success(data);
    }
    return null;
}
