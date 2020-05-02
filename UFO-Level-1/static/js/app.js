var tableData=data;

var tbody=d3.select("tbody");

function buildTable(info){
    tbody.text("");
    info.forEach((event) => {
        var row=tbody.append("tr");
        Object.entries(event).forEach(function([key,value]){
            var cell=row.append("td");
            cell.text(value);
        })
    })
};

buildTable(tableData);

var button=d3.select("#filter-btn");
//https://stackoverflow.com/questions/31831651/javascript-filter-array-multiple-conditions

function filterTable(){
    d3.event.preventDefault();
    var dateInput=d3.select("#datetime");
    var dateValue=dateInput.property("value");
    console.log(dateValue)
    var filteredData=tableData.filter(instance => instance.datetime===dateValue)
    buildTable(filteredData);
}


button.on("click", filterTable);