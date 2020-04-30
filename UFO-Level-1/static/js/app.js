var tableData=data;

var tbody=d3.select("tbody");

function buildTable(tableData){
    tbody.text("");
    tableData.forEach((event) => {
        var row=tbody.append("tr");
        Object.entries(event).forEach(function([key,value]){
            var cell=row.append("td");
            cell.text(value);
        })
    })
};

buildTable(tableData);
