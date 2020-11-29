

var registerurl = "http://127.0.0.1:4444/"
// var registerurl = "http://192.168.43.23:4444/"


// On ViewRegistered Page
function HideAllRegisteredViewDivs ()
    {document.getElementById("registered-painter-view-all-div").style.display = 'none';document.getElementById("registered-subdealer-view-all-div").style.display = 'none';}

function ShowRegisteredPainterViewAllDiv ()
    {document.getElementById("registered-subdealer-view-all-div").style.display = 'none';document.getElementById("registered-painter-view-all-div").style.display = 'block';}

function ShowRegisteredPainterViewAllDiv ()
    {document.getElementById("registered-painter-view-all-div").style.display = 'none';document.getElementById("registered-subdealer-view-all-div").style.display = 'block';}


function CreateDynamicRegistrationForm  (resultsarry,OuterHtmlDiv)
{
    let terms = "<b>Terms & conditions:<br> a) Eligibility for the painter’s discount</b>The painter should be a regular customer of plascon products and should have purchased from kankan outlets at least three (3) times.<br> Each painter will have an account at kankan and every product purchased by the painter will be listed under his account.<br><br><b>b) Receipt of the discount:</b><br>The accumulated discount from all purchases by the painter will be calculated and will be sent to the painter every end of the week (Saturday) on the painter’s mobile money account. <br><br><b>c) </b>All discounts will be calculated by getting the difference between the product price on the painter’s price list and the retail price list"
    
    let HtmlDiv = document.getElementById(OuterHtmlDiv);
    let DivContainer = document.createElement('div');
    let Table = document.createElement('table');
    let Thead = document.createElement('thead');
    let Theadtr = document.createElement('tr');
    let Theadtd1 = document.createElement('td');
    let Theadtd2 = document.createElement('td');
    let Theadtd2_img = document.createElement('img');
    let Emptytr1 = document.createElement('tr');
    let Emptytd1 = document.createElement('td');
    let Emptytr2 = document.createElement('tr');
    let Emptytd2 = document.createElement('td');
    let Tbodytr1 = document.createElement('tr');
    let Tbodytd1_1 = document.createElement('td');
    let Tbodytd1_2 = document.createElement('td');
    let Tbodytr2 = document.createElement('tr');
    let Tbodytd2_1 = document.createElement('td');
    let Tbodytd2_2 = document.createElement('td');
    let Tbodytr3 = document.createElement('tr');
    let Tbodytd3_1 = document.createElement('td');
    let Tbodytr4 = document.createElement('tr');
    let Tbodytd4_1 = document.createElement('td');
    let Tfooter = document.createElement('tfoot');

    // Inputs
    let nameinput = document.createElement('input');
    let dateinput = document.createElement('input');
    let phoneinput = document.createElement('input');
    let addressinput = document.createElement('input');
    let qn1input = document.createElement('input');
    let qn2input = document.createElement('input');



    Table.setAttribute('class','register-table-painter');
    Theadtr.setAttribute('class','register-table-tr');
    Theadtd1.setAttribute('class','register-p-text register-table-td');
    Theadtd1.setAttribute('colspan',1);
    Theadtd2.setAttribute('class','register-p-text register-table-td');
    Theadtd2.setAttribute('colspan',1);
    Theadtd2_img.setAttribute('class','img-to-be-displayed');
    Emptytr1.setAttribute('class','register-table-tr')
    Emptytd1.setAttribute('class','register-p-text register-table-td')
    Emptytr2.setAttribute('class','register-table-tr')
    Emptytd2.setAttribute('class','register-p-text register-table-td')
    Tbodytr1.setAttribute('class','register-table-tr');
    Tbodytd1_1.setAttribute('class','register-p-text register-table-td');
    Tbodytd1_2.setAttribute('class','register-p-text register-table-td');
    Tbodytr2.setAttribute('class','register-table-tr');
    Tbodytd2_1.setAttribute('class','register-p-text register-table-td');
    Tbodytd2_2.setAttribute('class','register-p-text register-table-td');
    // Tbodytr3.setAttribute('class','register-table-tr');
    Tbodytd3_1.setAttribute('class','register-p-text register-table-td');
    Tbodytd3_1.setAttribute('colspan',2);
    // Tbodytr4.setAttribute('class','register-table-tr');
    Tbodytd4_1.setAttribute('class','register-p-text register-table-td');
    Tbodytd4_1.setAttribute('colspan',2);
    Tfooter.setAttribute('class','register-p-text');

    nameinput.setAttribute('class','register-p-text regester-form-inputs-painter');
    dateinput.setAttribute('class','register-p-text regester-form-inputs-painter');
    phoneinput.setAttribute('class','register-p-text regester-form-inputs-painter');
    addressinput.setAttribute('class','register-p-text regester-form-inputs-painter');
    qn1input.setAttribute('class','register-p-text regester-form-inputs-painter');
    qn2input.setAttribute('class','register-p-text regester-form-inputs-painter');

    nameinput.setAttribute('readonly','true');
    dateinput.setAttribute('readonly','true');
    phoneinput.setAttribute('readonly','true');
    addressinput.setAttribute('readonly','true');
    qn1input.setAttribute('readonly','true');
    qn2input.setAttribute('readonly','true');



    Theadtd1.innerHTML = "Profile pic";
    Theadtd2.innerHTML = "Attached photo";
    Tbodytd1_1.innerHTML = '<br>Name::'
    Tbodytd1_2.innerHTML = '<br>Date of registration::'
    Tbodytd2_1.innerHTML = '<br>Phone Number:::'
    Tbodytd2_2.innerHTML = '<br>Address::'
    Tbodytd3_1.innerHTML = '<br>What are your anticipated average purchases from our kankan in a month?';
    Tbodytd4_1.innerHTML = '<br>How did you get to know about the painter’s discounts?'
    Tfooter.innerHTML =  "<br>" + terms + "<br> <br>"

    nameinput.value = resultsarry[0][0]
    dateinput.value = resultsarry[0][1]
    phoneinput.value = resultsarry[0][2]
    addressinput.value = resultsarry[0][3]
    qn1input.value = resultsarry[0][4]
    qn2input.value = resultsarry[0][5]


    Table.appendChild(Thead);

    Theadtr.appendChild(Theadtd2);    
    Theadtr.appendChild(Theadtd1);
    Theadtr.appendChild(Theadtd2_img);    
    Table.appendChild(Theadtr);

    Tbodytd1_1.appendChild(nameinput);    
    Tbodytr1.appendChild(Tbodytd1_1);
    Tbodytd1_2.appendChild(dateinput);
    Tbodytr1.appendChild(Tbodytd1_2);
    Table.appendChild(Tbodytr1);

    Emptytr1.appendChild(Emptytd1);
    Table.appendChild(Emptytr1);
    Tbodytd2_1.appendChild(phoneinput)
    Tbodytr2.appendChild(Tbodytd2_1);
    Tbodytd2_2.appendChild(addressinput)
    Tbodytr2.appendChild(Tbodytd2_2);
    Table.appendChild(Tbodytr2);

    Emptytr2.appendChild(Emptytd2);
    Table.appendChild(Emptytr2);
    Tbodytd3_1.appendChild(qn1input);
    Tbodytr3.appendChild(Tbodytd3_1);
    Table.appendChild(Tbodytr3);

    Tbodytd4_1.appendChild(qn2input);
    Tbodytr4.appendChild(Tbodytd4_1);
    Table.appendChild(Tbodytr4);

    Table.appendChild(Tfooter);
    DivContainer.appendChild(Table);
    HtmlDiv.appendChild(DivContainer);
}

function CreateDynamicSubdealerRegistrationForm  (OuterBodyHtmlDiv,OuterFooterHtmlDiv)
{
    let terms = "<b>8. Terms and conditions</b><b><br>a.delivery / transfer of risk</b><br> Notwithstanding delivery to the Buyer of any Products ordered from Color Center-Freedom City, ownership shall not pass to the Buyer unless the invoice price is paid in full for the particular order to KanKan Builders Point Ltd. A receipt from the buyer his carrier or agent shall constitute proof of delivery. <br><b>b. Offer and prices</b><br> All quotations are valid for thirty (30) days only. All prices are subject to change without notice and the prices charged are those ruling on the day of delivery/collection.<br> <b>c. Payments</b> <br>Buyer shall pay these invoices within 30 days from the invoice date in the currency indicated on the invoice. "

    let results = {0: "Driving Permit",1: "kankan",2: "kitende",3: "0701243139",4: "jacob2016henry@gmail",5: "2020",6: "24/11/2020",7: "Entembe",8: "Retail",9: "500000",10: "2000000",11: "4000000",12: "5",13: "dfcu",14: "0000000000",15: "henry",16: "0701243139",17: "Bwebajja",18: "Ugandan",19: "alex",20: "077977854",21: "Bwebajja",22: "Ugandan"}
    let HtmlDiv = document.getElementById(OuterBodyHtmlDiv);
    let HtmlDiv2 = document.getElementById(OuterFooterHtmlDiv);
    let DivContainer = document.createElement('div');
    let TermsDiv = document.createElement('div');

    let ContentDiv1_1 = document.createElement('div');
    let ContentDiv1_2 = document.createElement('div');
    let ContentDiv1_3 = document.createElement('div');
    let ContentDiv1_4 = document.createElement('div');
    let ContentDiv2_1 = document.createElement('div');
    let ContentDiv2_2 = document.createElement('div');
    let ContentDiv2_3 = document.createElement('div');
    let ContentDiv2_4 = document.createElement('div');
    let ContentDiv3_1 = document.createElement('div');
    let ContentDiv3_2 = document.createElement('div');
    let ContentDiv3_3 = document.createElement('div');
    let ContentDiv3_4 = document.createElement('div');
    let ContentDiv4_1 = document.createElement('div');
    let ContentDiv4_2 = document.createElement('div');
    let ContentDiv4_3 = document.createElement('div');
    let ContentDiv4_4 = document.createElement('div');
    let ContentDiv5_1 = document.createElement('div');
    let ContentDiv5_2 = document.createElement('div');
    let ContentDiv5_3 = document.createElement('div');
    let ContentDiv5_4 = document.createElement('div');
    let ContentDiv6_1 = document.createElement('div');
    let ContentDiv6_2 = document.createElement('div');
    let ContentDiv6_3 = document.createElement('div');
    let ContentDiv6_4 = document.createElement('div');
    let ContentDiv7_1 = document.createElement('div');
    let ContentDiv7_2 = document.createElement('div');
    let ContentDiv7_3 = document.createElement('div');
    let ContentDiv7_4 = document.createElement('div');

    // Inputs
    let ContentDivInput1_1 = document.createElement('input');
    let ContentDivInput2_1 = document.createElement('input');
    let ContentDivInput2_2 = document.createElement('input');
    let ContentDivInput2_3 = document.createElement('input');
    let ContentDivInput2_4 = document.createElement('input');
    let ContentDivInput3_1 = document.createElement('input');
    let ContentDivInput3_2 = document.createElement('input');
    let ContentDivInput3_3 = document.createElement('input');
    let ContentDivInput3_4 = document.createElement('input');
    let ContentDivInput4_1 = document.createElement('input');
    let ContentDivInput4_2 = document.createElement('input');
    let ContentDivInput4_3 = document.createElement('input');
    let ContentDivInput4_4 = document.createElement('input');
    let ContentDivInput5_1 = document.createElement('input');
    let ContentDivInput5_2 = document.createElement('input');
    let ContentDivInput5_3 = document.createElement('input');
    let ContentDivInput5_4 = document.createElement('input');
    let ContentDivInput6_1 = document.createElement('input');
    let ContentDivInput6_2 = document.createElement('input');
    let ContentDivInput6_3 = document.createElement('input');
    let ContentDivInput6_4 = document.createElement('input');
    let ContentDivInput7_1 = document.createElement('input');
    let ContentDivInput7_2 = document.createElement('input');
    let ContentDivInput7_3 = document.createElement('input');
    let ContentDivInput7_4 = document.createElement('input');

    // Attributs
    DivContainer.setAttribute('id','subdlear-view-grid-div')
    HtmlDiv2.setAttribute('id','subdlear-view-footer-content-div')

    ContentDivInput1_1.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput2_1.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput2_2.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput2_3.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput2_4.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput3_1.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput3_2.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput3_3.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput3_4.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput4_1.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput4_2.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput4_3.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput4_4.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput5_1.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput5_2.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput5_3.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput5_4.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput6_1.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput6_2.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput6_3.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput6_4.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput7_1.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput7_2.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput7_3.setAttribute('class','register-p-text regester-form-inputs-painter');
    ContentDivInput7_4.setAttribute('class','register-p-text regester-form-inputs-painter');

    ContentDivInput1_1.setAttribute('readonly','true');
    ContentDivInput2_1.setAttribute('readonly','true');
    ContentDivInput2_2.setAttribute('readonly','true');
    ContentDivInput2_3.setAttribute('readonly','true');
    ContentDivInput2_4.setAttribute('readonly','true');
    ContentDivInput3_1.setAttribute('readonly','true');
    ContentDivInput3_2.setAttribute('readonly','true');
    ContentDivInput3_3.setAttribute('readonly','true');
    ContentDivInput3_4.setAttribute('readonly','true');
    ContentDivInput4_1.setAttribute('readonly','true');
    ContentDivInput4_2.setAttribute('readonly','true');
    ContentDivInput4_3.setAttribute('readonly','true');
    ContentDivInput4_4.setAttribute('readonly','true');
    ContentDivInput5_1.setAttribute('readonly','true');
    ContentDivInput5_2.setAttribute('readonly','true');
    ContentDivInput5_3.setAttribute('readonly','true');
    ContentDivInput5_4.setAttribute('readonly','true');
    ContentDivInput6_1.setAttribute('readonly','true');
    ContentDivInput6_2.setAttribute('readonly','true');
    ContentDivInput6_3.setAttribute('readonly','true');
    ContentDivInput6_4.setAttribute('readonly','true');
    ContentDivInput7_1.setAttribute('readonly','true');
    ContentDivInput7_2.setAttribute('readonly','true');
    ContentDivInput7_3.setAttribute('readonly','true');
    ContentDivInput7_4.setAttribute('readonly','true');


    // Assigning contents
    ContentDiv1_1.innerHTML = "<br>  Attach Photos"
    ContentDivInput1_1.value = results[0][0];
    ContentDiv1_2.innerHTML = '<br> Front side'
    ContentDiv1_3.innerHTML = '<br> Back side'
    ContentDiv1_4.innerHTML = '<br>Pasport photo'

    ContentDiv2_1.innerHTML = "<br> 2. Company's / hardware::"
    ContentDivInput2_1.value = results[0][1];
    ContentDiv2_2.innerHTML = '<br>Town / Area::'
    ContentDivInput2_2.value = results[0][2];
    ContentDiv2_3.innerHTML = '<br>Phone Number::'
    ContentDivInput2_3.value = results[0][3];
    ContentDiv2_4.innerHTML = '<br>Email address:'
    ContentDivInput2_4.value = results[0][4];


    ContentDiv3_1.innerHTML = '<br> 3. Company Number::'
    ContentDivInput3_1.value = results[0][5];
    ContentDiv3_2.innerHTML = '<br>Date of Registration::'
    ContentDivInput3_2.value = results[0][6];
    ContentDiv3_3.innerHTML = '<br>Location of Business ::'
    ContentDivInput3_3.value = results[0][7];
    ContentDiv3_4.innerHTML = '<br>Nature of Business ::'
    ContentDivInput3_4.value = results[0][8];


    ContentDiv4_1.innerHTML = "<br> 4. Paid up capital::"
    ContentDivInput4_1.value = results[0][9];
    ContentDiv4_2.innerHTML = "<br> Approximent stock::"
    ContentDivInput4_2.value = results[0][10];
    ContentDiv4_3.innerHTML = "<br>Annual Turnover"
    ContentDivInput4_3.value = results[0][11];
    ContentDiv4_4.innerHTML = "<br>Years in business:"
    ContentDivInput4_4.value = results[0][12];

    ContentDiv5_1.innerHTML = "<br> 5. Banker's Name"
    ContentDivInput5_1.value = results[0][13];
    ContentDiv5_2.innerHTML = "<br>Account No(s)"
    ContentDivInput5_2.value = results[0][14];
    ContentDiv5_3.innerHTML = ""
    ContentDiv5_4.innerHTML = ""

    ContentDiv6_1.innerHTML = "<br> 6. Directors's Name::"
    ContentDivInput6_1.value = results[0][15];
    ContentDiv6_2.innerHTML = "<br>  Contacts ::"
    ContentDivInput6_2.value = results[0][16];
    ContentDiv6_3.innerHTML = "<br> Designation::"
    ContentDivInput6_3.value = results[0][17];
    ContentDiv6_4.innerHTML = "<br> Nationality::"
    ContentDivInput6_4.value = results[0][18];

    ContentDiv7_1.innerHTML = "<br> 7. Referee(s) Name::"
    ContentDivInput7_1.value = results[0][19];
    ContentDiv7_2.innerHTML = "<br>  Contacts ::"
    ContentDivInput7_2.value = results[0][20];
    ContentDiv7_3.innerHTML = "<br> Designation::"
    ContentDivInput7_3.value = results[0][21];
    ContentDiv7_4.innerHTML = "<br> Nationality::"
    ContentDivInput7_4.value = results[0][22];


    TermsDiv.innerHTML = terms
    ContentDiv1_1.appendChild(ContentDivInput1_1)    
    DivContainer.appendChild(ContentDiv1_1);
    DivContainer.appendChild(ContentDiv1_2);
    DivContainer.appendChild(ContentDiv1_3);
    DivContainer.appendChild(ContentDiv1_4);
    
    ContentDiv2_1.appendChild(ContentDivInput2_1)
    DivContainer.appendChild(ContentDiv2_1);
    ContentDiv2_2.appendChild(ContentDivInput2_2)
    DivContainer.appendChild(ContentDiv2_2);
    ContentDiv2_3.appendChild(ContentDivInput2_3)
    DivContainer.appendChild(ContentDiv2_3);
    ContentDiv2_4.appendChild(ContentDivInput2_4)
    DivContainer.appendChild(ContentDiv2_4);

    ContentDiv3_1.appendChild(ContentDivInput3_1)
    DivContainer.appendChild(ContentDiv3_1);
    ContentDiv3_2.appendChild(ContentDivInput3_2)
    DivContainer.appendChild(ContentDiv3_2);
    ContentDiv3_3.appendChild(ContentDivInput3_3)
    DivContainer.appendChild(ContentDiv3_3);
    ContentDiv3_4.appendChild(ContentDivInput3_4)
    DivContainer.appendChild(ContentDiv3_4);

    ContentDiv4_1.appendChild(ContentDivInput4_1)
    DivContainer.appendChild(ContentDiv4_1);
    ContentDiv4_2.appendChild(ContentDivInput4_2)
    DivContainer.appendChild(ContentDiv4_2);
    ContentDiv4_3.appendChild(ContentDivInput4_3)
    DivContainer.appendChild(ContentDiv4_3);
    ContentDiv4_4.appendChild(ContentDivInput4_4)
    DivContainer.appendChild(ContentDiv4_4);

    ContentDiv5_1.appendChild(ContentDivInput5_1)
    DivContainer.appendChild(ContentDiv5_1);
    ContentDiv5_2.appendChild(ContentDivInput5_2)
    DivContainer.appendChild(ContentDiv5_2);
    // ContentDiv5_3.appendChild(ContentDivInput5_3)
    DivContainer.appendChild(ContentDiv5_3);
    // ContentDiv5_4.appendChild(ContentDivInput5_4)
    DivContainer.appendChild(ContentDiv5_4);

    ContentDiv6_1.appendChild(ContentDivInput6_1)
    DivContainer.appendChild(ContentDiv6_1);
    ContentDiv6_2.appendChild(ContentDivInput6_2)
    DivContainer.appendChild(ContentDiv6_2);
    ContentDiv6_3.appendChild(ContentDivInput6_3)
    DivContainer.appendChild(ContentDiv6_3);
    ContentDiv6_4.appendChild(ContentDivInput6_4)
    DivContainer.appendChild(ContentDiv6_4);

    ContentDiv7_1.appendChild(ContentDivInput7_1)
    DivContainer.appendChild(ContentDiv7_1);
    ContentDiv7_2.appendChild(ContentDivInput7_2)
    DivContainer.appendChild(ContentDiv7_2);
    ContentDiv7_3.appendChild(ContentDivInput7_3)
    DivContainer.appendChild(ContentDiv7_3);
    ContentDiv7_4.appendChild(ContentDivInput7_4)
    DivContainer.appendChild(ContentDiv7_4);

    HtmlDiv.appendChild(DivContainer);
    HtmlDiv2.appendChild(TermsDiv);
}

var names

function GetCustomersNames ( urlendpoint)
{
    let namesrequest = new XMLHttpRequest ();
    namesrequest.onreadystatechange = function ()
        {
            if ( namesrequest.readyState == 4 && namesrequest.status == 200)
                {
                    names = JSON.parse(namesrequest.responseText)

                    console.log(names)
                }
        }
    namesrequest.open("GET", registerurl + urlendpoint );    
    namesrequest.send();
}


function FetchCustomersData (endpointurl, tabletbody, htmldiv)
{
    let req = new XMLHttpRequest();
    req.open('post', registerurl + endpointurl,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById(tabletbody);
                    tbody.innerHTML = ' ';

                    // draw table
                    let td,tr;
                    // add table headings
                    let th_names = new Array ();
                    th_names.push(["Name","Contacts","Location"]);
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
        let data = document.getElementById(htmldiv);
        req.send(data); 
}


function FetchPaintersRegistrationFormFromServer (endpointurl,OuterHtmlDiv,Orderformid)
{
    name = $('#painter-name-input-id').val()
    // name = document.getElementById('painter-name-input-id').value;
    console.log(name)
  
    let req = new XMLHttpRequest();
    req.open('post', registerurl + endpointurl,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length){alert("No results found")}
            else
                {
                    document.getElementById(OuterHtmlDiv).innerText = "";
                    // console.log(results);
                    CreateDynamicRegistrationForm(results,OuterHtmlDiv)
                }
        }
        form = new FormData(document.getElementById(Orderformid));
        // form = new FormData(name);        
        // form = name
        req.send(form);
}


function FetchSubdealersRegistrationFormFromServer (endpointurl,OuterBodyHtmlDiv,OuterFooterHtmlDiv)
{
    name = $('#painter-name-input-id').val()
    // name = document.getElementById('painter-name-input-id').value;
    console.log(name)
  
    let req = new XMLHttpRequest();
    req.open('post', registerurl + endpointurl,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length){alert("No results found")}
            else
                {
                    document.getElementById(OuterBodyHtmlDiv).innerText = "";
                    document.getElementById(OuterFooterHtmlDiv).innerText = "";
                    // console.log("====================")
                    console.log(results);
                    CreateDynamicSubdealerRegistrationForm(OuterBodyHtmlDiv,OuterFooterHtmlDiv,results)
                }
        }
        // form = new FormData(document.getElementById(Orderformid));
        // form = new FormData(name);        
        // form = name
        req.send();
}

var painternames
function GetRegisteredPainters ( urlendpoint)
{

    let request = new XMLHttpRequest ();
    request.onreadystatechange = function ()
        {
            if ( request.readyState == 4 && request.status == 200)
                {
                    painternames = JSON.parse(request.responseText)
                }
        }
    request.open("GET", registerurl + urlendpoint );    
    request.send();
    // console.log("GetRegisteredPainters ::: done")
}

function ShowRegisteredPainterOptions (html_id)
{
    // console.log(painternames)
    let html_select_input = document.getElementById(html_id);
        for (index in painternames)
            {html_select_input.options[html_select_input.options.length] = new Option(painternames[index],index);}    
}
































function autocomplete(inp, arr) 
{
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) 
        {
            var a, b, i, val = this.value;
            /*close any already open lists of autocompleted values*/
            closeAllLists();
            if (!val) { return false;}
            currentFocus = -1;
            /*create a DIV element that will contain the items (values):*/
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            /*append the DIV element as a child of the autocomplete container:*/
            this.parentNode.appendChild(a);
            /*for each item in the array...*/
            for (i = 0; i < arr.length; i++) 
                {
                /*check if the item starts with the same letters as the text field value:*/
                if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) 
                    {
                        /*create a DIV element for each matching element:*/
                        b = document.createElement("DIV");
                        /*make the matching letters bold:*/
                        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                        b.innerHTML += arr[i].substr(val.length);
                        /*insert a input field that will hold the current array item's value:*/
                        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                        /*execute a function when someone clicks on the item value (DIV element):*/
                            b.addEventListener("click", function(e) {
                            /*insert the value for the autocomplete text field:*/
                            inp.value = this.getElementsByTagName("input")[0].value;
                            /*close the list of autocompleted values,
                            (or any other open lists of autocompleted values:*/
                            closeAllLists();
                        });
                        a.appendChild(b);
                    }
                }
        });
        

    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) 
        {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) 
                {
                    /*If the arrow DOWN key is pressed,
                    increase the currentFocus variable:*/
                    currentFocus++;
                    /*and and make the current item more visible:*/
                    addActive(x);
                } 
            else if (e.keyCode == 38) 
            { //up
                /*If the arrow UP key is pressed,
                decrease the currentFocus variable:*/
                currentFocus--;
                /*and and make the current item more visible:*/
                addActive(x);
            } 
            else if (e.keyCode == 13) 
            {
                /*If the ENTER key is pressed, prevent the form from being submitted,*/
                e.preventDefault();
                if (currentFocus > -1) 
                    {
                        /*and simulate a click on the "active" item:*/
                        if (x) x[currentFocus].click();
                    }
            }
        });

    function addActive(x) 
        {
            /*a function to classify an item as "active":*/
            if (!x) return false;
            /*start by removing the "active" class on all items:*/
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            /*add class "autocomplete-active":*/
            x[currentFocus].classList.add("autocomplete-active");
        }
    function removeActive(x) 
        {
            /*a function to remove the "active" class from all autocomplete items:*/
            for (var i = 0; i < x.length; i++) 
                {
                    x[i].classList.remove("autocomplete-active");
                }
        }
    function closeAllLists(elmnt) 
        {
            /*close all autocomplete lists in the document,
            except the one passed as an argument:*/
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) 
                {
                    if (elmnt != x[i] && elmnt != inp) 
                    {
                        x[i].parentNode.removeChild(x[i]);
                    }
                }
        }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {closeAllLists(e.target);});
  } 