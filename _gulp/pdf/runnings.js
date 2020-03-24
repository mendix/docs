exports.header = {
    height: '0.5cm',
    contents: function(pageNum, numPages) {
        return ""
    }
}

exports.footer = {
    height: '0.5cm',
    contents: function(pageNum, numPages) {
        return "<div><span style='float:left; font-size: 10px'>Mendix Documentation (https://docs.mendix.com)</span><span style='float:right; font-size: 10px'>" + pageNum + " / " + numPages + "</span></div>"
    }
}
