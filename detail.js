function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        return Response.success({
            name: doc.select("h1").text(),
            author: doc.select(".book-info p").first().text(),
            description: doc.select(".book-intro").text(),
            detail: doc.select(".book-info p").get(1).text(),
            host: "https://uukanshu.cc"
        });
    }
    return null;
}
