
// var ceilling_sr_url = "http://127.0.0.1:5000/";
var ceilling_sr_url = "http://172.105.158.108:5000/";


var seconds = 1000;
var loader_seconds = 3000;

function hide_divs_and_Load_offline_data ()
{
    hide_sadolin_veiw_ceilling_divs ();
    Load_offline_data ();
}

/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @
    @           RECIEVED STOCK  
    @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

function hide_sadolin_veiw_ceilling_divs ()
{
    
    document.getElementById("ceilling-root-div").style.display="none";
    document.getElementById("ceilling-view-all-div").style.display="none";
    document.getElementById("ceilling-search-by-size-div").style.display="none";
    document.getElementById("ceilling-search-by-date-div").style.display="none";
    document.getElementById("ceilling-from-to-div").style.display="none";
    document.getElementById("ceilling-search-by-last-week-div").style.display="none";
    document.getElementById("ceilling-search-by-this-month-div").style.display="none";
    document.getElementById("ceilling-search-by-last-month-div").style.display="none";
    
    // Loaders
    document.getElementById("received-stock-loader-all").style.display="none";
    document.getElementById("received-stock-loader-size").style.display="none";
    document.getElementById("received-stock-loader-date-today").style.display="none";
    document.getElementById("received-stock-loader-date-date").style.display="none";
    document.getElementById("received-stock-loader-from-to-all").style.display = "none";
    document.getElementById("received-stock-loader-last-week-all").style.display="none";
    document.getElementById("received-stock-loader-this-month-all").style.display="none";
    document.getElementById("received-stock-loader-last-month-all").style.display="none";

    // grand-childrens
    document.getElementById("date-today-grand-child-div").style.display = "none";
    document.getElementById("date-date-grand-child-div").style.display="none";
    document.getElementById("from-to-all-grand-child-div").style.display="none";
    document.getElementById("last-week-all-grand-child-div").style.display="none";
    document.getElementById("this-month-all-grand-child-div").style.display="none";
    document.getElementById("last-month-all-grand-child-div").style.display="none";
}

function show_budget_gloss_root_div ()
    {
        document.getElementById("stock-status-root-div").style.display = "none";
        document.getElementById("stock-flow-root-div").style.display="none";
        document.getElementById("ceilling-root-div").style.display="block";
    }
function close_stock_root_div ()
    { document.getElementById("ceilling-root-div").style.display="none";}


function show_ceilling_view_all_div ()
{
    document.getElementById("ceilling-search-by-size-div").style.display="none";
    document.getElementById("ceilling-search-by-date-div").style.display="none";
    document.getElementById("ceilling-from-to-div").style.display="none";
    document.getElementById("ceilling-search-by-last-week-div").style.display="none";
    document.getElementById("ceilling-search-by-this-month-div").style.display="none";
    document.getElementById("ceilling-search-by-last-month-div").style.display="none";
    document.getElementById("ceilling-view-all-div").style.display="block";

}
function close_ceilling_view_all_div ()
    {document.getElementById("ceilling-view-all-div").style.display="none";}


function show_ceilling_search_by_size_div ()
{
    document.getElementById("ceilling-search-by-date-div").style.display="none";
    document.getElementById("ceilling-from-to-div").style.display="none";
    document.getElementById("ceilling-view-all-div").style.display="none";
    document.getElementById("ceilling-search-by-last-week-div").style.display="none";
    document.getElementById("ceilling-search-by-this-month-div").style.display="none";
    document.getElementById("ceilling-search-by-last-month-div").style.display="none";
    document.getElementById("ceilling-search-by-size-div").style.display="block";
}
function close_ceilling_search_by_size_div ()
    {document.getElementById("ceilling-search-by-size-div").style.display="none";}

function show_ceilling_search_by_date_div ()
{
    document.getElementById("ceilling-from-to-div").style.display="none";
    document.getElementById("ceilling-view-all-div").style.display="none";
    document.getElementById("ceilling-search-by-size-div").style.display="none";
    document.getElementById("ceilling-search-by-last-week-div").style.display="none";
    document.getElementById("ceilling-search-by-this-month-div").style.display="none";
    document.getElementById("ceilling-search-by-last-month-div").style.display="none";
    document.getElementById("ceilling-search-by-date-div").style.display="block";
}
function close_ceilling_search_by_date_div ()
    {document.getElementById("ceilling-search-by-date-div").style.display="none";}

function show_ceilling_from_to_div ()
{
    document.getElementById("ceilling-view-all-div").style.display="none";
    document.getElementById("ceilling-search-by-size-div").style.display="none";
    document.getElementById("ceilling-search-by-date-div").style.display="none";
    document.getElementById("ceilling-search-by-last-week-div").style.display="none";
    document.getElementById("ceilling-search-by-this-month-div").style.display="none";
    document.getElementById("ceilling-search-by-last-month-div").style.display="none";
    document.getElementById("ceilling-from-to-div").style.display="block";
}
function close_ceilling_from_to_div ()
    {document.getElementById("ceilling-from-to-div").style.display="none";}



function show_ceilling_search_by_last_week_div ()
{
    document.getElementById("ceilling-view-all-div").style.display="none";
    document.getElementById("ceilling-search-by-size-div").style.display="none";
    document.getElementById("ceilling-search-by-date-div").style.display="none";
    document.getElementById("ceilling-from-to-div").style.display="none";
    document.getElementById("ceilling-search-by-this-month-div").style.display="none";
    document.getElementById("ceilling-search-by-last-month-div").style.display="none";
    document.getElementById("ceilling-search-by-last-week-div").style.display="block";
}
function close_ceilling_search_by_last_week_div ()
    {document.getElementById("ceilling-search-by-last-week-div").style.display="none";}


function show_ceilling_search_by_this_month_div ()
{
document.getElementById("ceilling-view-all-div").style.display="none";
    document.getElementById("ceilling-search-by-size-div").style.display="none";
    document.getElementById("ceilling-search-by-date-div").style.display="none";
    document.getElementById("ceilling-from-to-div").style.display="none";
    document.getElementById("ceilling-search-by-last-week-div").style.display="none";
    document.getElementById("ceilling-search-by-last-month-div").style.display="none"; 
    document.getElementById("ceilling-search-by-this-month-div").style.display="block";
}
function close_ceilling_search_by_this_month_div ()
    {document.getElementById("ceilling-search-by-this-month-div").style.display="none";}

function show_ceilling_search_by_last_month_div ()
{
    document.getElementById("ceilling-view-all-div").style.display="none";
    document.getElementById("ceilling-search-by-size-div").style.display="none";
    document.getElementById("ceilling-search-by-date-div").style.display="none";
    document.getElementById("ceilling-from-to-div").style.display="none";
    document.getElementById("ceilling-search-by-last-week-div").style.display="none";
    document.getElementById("ceilling-search-by-this-month-div").style.display="none";
    document.getElementById("ceilling-search-by-last-month-div").style.display="block";
}
function close_ceilling_search_by_last_month_div ()
    {document.getElementById("ceilling-search-by-last-month-div").style.display="none";}

// grand childrens
function show_date_today_grand_child_div ()
    {document.getElementById("date-today-grand-child-div").style.display="block";}
function close_date_today_grand_child_div ()
    {document.getElementById("date-today-grand-child-div").style.display="none";}
function show_date_date_grand_child_div ()
    {document.getElementById("date-date-grand-child-div").style.display="block";}
function close_date_date_grand_child_div ()
    {document.getElementById("date-date-grand-child-div").style.display="none";}
function show_from_to_all_grand_child_div ()
    {document.getElementById("from-to-all-grand-child-div").style.display="block";}
function close_from_to_all_grand_child_div ()
    {document.getElementById("from-to-all-grand-child-div").style.display="none";}
function show_last_week_all_grand_child_div ()
    {document.getElementById("last-week-all-grand-child-div").style.display="block";}
function close_last_week_all_grand_child_div ()
    {document.getElementById("last-week-all-grand-child-div").style.display="none";}
function show_this_month_all_grand_child_div ()
    {document.getElementById("this-month-all-grand-child-div").style.display="block";}
function close_this_month_all_grand_child_div ()
    {document.getElementById("this-month-all-grand-child-div").style.display="none";}
function show_last_month_all_grand_child_div ()
    {document.getElementById("last-month-all-grand-child-div").style.display="block";}
function close_last_month_all_grand_child_div ()
    {document.getElementById("last-month-all-grand-child-div").style.display="none";}
    function show_last_month_by_name_grand_child_div ()
    {document.getElementById("last-month-by-name-grand-child-div").style.display="block";}
function close_last_month_by_name_grand_child_div ()
    {document.getElementById("last-month-by-name-grand-child-div").style.display="none";}



function fetch_received_stock_all_data ()
{
    document.getElementById("received-stock-loader-all").style.display="block";
    setTimeout(stock_view_all,loader_seconds)
}

    // ==================
function stock_view_all ()
    {
        document.getElementById("received-stock-loader-all").style.display="none";
        let req = new XMLHttpRequest();
        req.open('post',ceilling_sr_url+'ceilling_stock_view_all',true)
        req.onload = function ()
            {
                let results = JSON.parse(this.responseText);
                if (! results || !results.length)
                    {
                        alert("No results found")
                    }
                else
                    {
                        let tbody = document.getElementById('show-all-tbody');
                        tbody.innerHTML = ' ';
    
                        // draw table
                        let td,tr;
                        // add table headings
                        let th_names = new Array ();
                        th_names.push(["Uname", "Name", "Size","Invoice", "Quatity", "Date"]);
                        let columns_to_count = th_names[0].length;
                        row = tbody.insertRow(-1); 
                        for (let looper =0; looper<columns_to_count; ++looper)
                            {
                                let headerNames = document.createElement("th");
                                headerNames.className='js_table_headers'
                                headerNames.innerHTML = th_names[0][looper];
                                row.appendChild(headerNames)
                            }
    
                        for (let table_row = 0; table_row < results.length; ++table_row)
                            {
                                tr = document.createElement('tr');
                                tr.className='js_table_row';
                                for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                    {
                                        td = document.createElement('td');
                                        td.setAttribute("align", "center"); 
                                        td.innerHTML = results[table_row][table_data];
                                        tr.appendChild(td)
                                    }
                                    tbody.appendChild(tr)
                            }
                    }
            }
            let div_tag = document.getElementById('show-all-tbody-div');
            req.send(div_tag);  
            setTimeout(save_show_all_data,seconds);      
    }
    
    // +++++++++++++++++++++++++++++++++++++++>>>
    






// ============================= view by name
function fetch_received_stock_name_data ()
{
    document.getElementById("received-stock-loader-name").style.display="block";
    setTimeout(stock_view_by_name,loader_seconds)
}
function stock_view_by_name ()
{
    document.getElementById("received-stock-loader-name").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post',ceilling_sr_url+'ceilling_stock_view_by_name',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {
                    alert("No results found")
                }
            else
                {
                    let tbody = document.getElementById('stock-view-by-name-tbody');
                    tbody.innerHTML = ' ';

                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size","Invoice", "Quatity", "Date"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let stock_view_by_name = new FormData(document.getElementById('stock-view-by-name-form'));
        req.send(stock_view_by_name);   
        setTimeout(save_stock_view_by_name_data,seconds);     
}

// +++++++++++++++++++++++++++++++++++++++>>>

// ============================= view by name

function fetch_received_stock_size_data ()
{
    document.getElementById("received-stock-loader-size").style.display="block";
    setTimeout(stock_view_by_size,loader_seconds)
}

function stock_view_by_size ()
{
    document.getElementById("received-stock-loader-size").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post',ceilling_sr_url+'ceilling_stock_view_by_size',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('stock-view-by-size-tbody');
                    tbody.innerHTML = ' ';

                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size","Invoice", "Quatity", "Date"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 

                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let stock_view_by_size = new FormData(document.getElementById('stock-view-by-size-form'));
        req.send(stock_view_by_size);        
        setTimeout(save_stock_view_by_size_data,seconds);
}


function fetch_received_stock_date_today_data ()
{
    document.getElementById("received-stock-loader-date-today").style.display="block";
    setTimeout(stock_view_by_date_today,loader_seconds)
}
function stock_view_by_date_today ()
{
    document.getElementById("received-stock-loader-date-today").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post',ceilling_sr_url+'ceilling_stock_view_by_date_today',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('stock-view-by-date-today-tbody');
                    tbody.innerHTML = ' ';

                    // draw table
                    let td,tr;
                    // add table headings
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size","Invoice", "Quatity", "Date"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let data = document.getElementById('stock-view-by-date-today-div');
        req.send(data); 
        setTimeout (save_by_date_today_data,seconds);       
}

function fetch_received_stock_date_date_data ()
{
    document.getElementById("received-stock-loader-date-date").style.display="block";
    setTimeout(stock_view_by_date_date,loader_seconds)
}
function stock_view_by_date_date ()
{
    document.getElementById("received-stock-loader-date-date").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post',ceilling_sr_url+'ceilling_stock_view_by_date_date',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('date-date-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size","Invoice", "Quatity", "Date"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let date = new FormData(document.getElementById('stock-date-date-form'));
        req.send(date);        
        setTimeout(save_date_date_data,seconds);
}

// ======================================

function fetch_received_stock_from_to_all_data ()
{
    document.getElementById("received-stock-loader-from-to-all").style.display="block";
    setTimeout(stock_from_to_all,loader_seconds)
}
function stock_from_to_all ()
{
    document.getElementById("received-stock-loader-from-to-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post',ceilling_sr_url+'ceilling_from_to_all',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('from-to-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size","Invoice", "Quatity", "Date"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let date = document.getElementById('from-to-div');
        req.send(date);        
        setTimeout(save_from_to,seconds);
}
// ======================================

// +++++++++++++++++++++++++++++++++++++++>>>
function fetch_received_stock_last_week_all_data ()
{
    document.getElementById("received-stock-loader-last-week-all").style.display="block";
    setTimeout(stock_last_week_all,loader_seconds)
}

function stock_last_week_all ()
{
    document.getElementById("received-stock-loader-last-week-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post',ceilling_sr_url+'ceilling_last_week_all_data',true)
    req.onload = function ()
        {
            document.getElementById("received-stock-loader-last-week-all").style.display="none";
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('last-week-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size","Invoice", "Quatity", "Date"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 1; table_data< (results[table_row].length-1);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let date = document.getElementById('last-week-all-grand-child-div');
        req.send(date);        
        setTimeout(save_show_last_week_all,seconds);
}

// +++++++++++++++++++++++++++++++++++++++>>>

function fetch_received_stock_this_month_all_data ()
{
    document.getElementById("received-stock-loader-this-month-all").style.display="block";
    setTimeout(stock_this_month_all,loader_seconds)
}

function stock_this_month_all ()
{
    document.getElementById("received-stock-loader-this-month-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post',ceilling_sr_url+'ceilling_this_month_all_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('this-month-all-tbody');
                    tbody.innerHTML = ' ';

                    // draw table
                    let td,tr;
                    // add table headings
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size","Invoice", "Quatity", "Date"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            // class="w3-hover-black"
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            // tr.className='js_table';
                            //draw td
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 

                                    // put in data
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let date = document.getElementById('this-month-all-grand-child-div');
        req.send(date);        
        setTimeout(save_show_this_month_all,seconds);
}

// +++++++++++++++++++++++++++++++++++++++>>>

function fetch_received_stock_last_month_all_data ()
{
    document.getElementById("received-stock-loader-last-month-all").style.display="block";
    setTimeout(stock_last_month_all,loader_seconds)
}

function stock_last_month_all ()
{
    document.getElementById("received-stock-loader-last-month-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post',ceilling_sr_url+'ceilling_last_month_all_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('last-month-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size","Invoice", "Quatity", "Date"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let date = document.getElementById('last-month-all-grand-child-div');
        req.send(date);        
        setTimeout(save_show_last_month_all,seconds);
}

// ========================================================================
// On storage
function save_show_all_data ()
{
    let data = document.getElementById ("show-all-tbody").innerHTML;
    localStorage.setItem("ceilling_all", data);
}

function save_stock_view_by_size_data ()
{
    let data = document.getElementById ("stock-view-by-size-tbody").innerHTML;
    localStorage.setItem("ceilling_by_size", data);
}
function save_by_date_today_data ()
{
    let data = document.getElementById ("stock-view-by-date-today-tbody").innerHTML;
    localStorage.setItem("ceilling_date_today", data);
}
function save_date_date_data ()
{
    let data = document.getElementById ("date-date-tbody").innerHTML;
    localStorage.setItem("ceilling_date_date", data);
}

function save_from_to ()
{
    let data = document.getElementById("from-to-all-tbody").innerHTML;
    localStorage.setItem("ceilling_from_to",data);
}

function save_show_last_week_all ()
{
    let data = document.getElementById ("last-week-all-tbody").innerHTML;
    localStorage.setItem("ceilling_last_week_all", data);
}
function save_show_this_month_all ()
{
    let data = document.getElementById ("show-all-tbody").innerHTML;
    localStorage.setItem("ceilling_dis_mth_all", data);
}

function save_show_last_month_all ()
{
    let data = document.getElementById ("last-month-all-tbody").innerHTML;
    localStorage.setItem("ceilling_lst_mth_all", data);
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function Load_offline_data () 
{
    document.getElementById("show-all-tbody").innerHTML = localStorage.getItem("ceilling_all");
    document.getElementById("stock-view-by-size-tbody").innerHTML = localStorage.getItem("ceilling_by_size");
    document.getElementById("stock-view-by-date-today-tbody").innerHTML = localStorage.getItem("ceilling_date_today");
    document.getElementById("date-date-tbody").innerHTML = localStorage.getItem("ceilling_date_date");
    document.getElementById("from-to-all-tbody").innerHTML = localStorage.getItem("ceilling_from_to")
    document.getElementById("last-week-all-tbody").innerHTML = localStorage.getItem("ceilling_last_week_all");
    document.getElementById("this-month-all-tbody").innerHTML = localStorage.getItem("ceilling_dis_mth_all");
    document.getElementById("last-month-all-tbody").innerHTML = localStorage.getItem("ceilling_lst_mth_all");
}
