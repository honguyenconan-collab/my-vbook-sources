function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        // Lấy nội dung trong thẻ div có id là content
        let content = doc.select("#content").html();
        // Xóa các quảng cáo rác nếu có
        content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/g, "");
        return Response.success(content);
    }
    return null;
}
