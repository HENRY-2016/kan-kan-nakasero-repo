


// var ordersreceived_url = "http://192.168.43.140:4444/";
var ordersreceived_url = "http://127.0.0.1:4444/";
// var ordersreceived_url = "http://192.168.43.23:4444/" // laptop


var seconds = 1000;

function ShowCloseDynamicDropdownList (id) 
{
    let x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {x.className += " w3-show";} 
    else {x.className = x.className.replace(" w3-show", "");}

}

function CreateDynamicDropdownListWithArrayLengthOfSix  (listoflists,id,OuterHtmlDiv)
{
    let HtmlDiv = document.getElementById(OuterHtmlDiv);
    let DivContainer = document.createElement('div');
    let DropdownHoverDiv = document.createElement('div');
    let ButtonTxt = document.createElement('button') //document.createElement('label');
    let DropdownContentDiv = document.createElement('div')
    let ListTxt = document.createElement('li');
    let LabelTxt = document.createElement('label');

    // Set attributs ...
    DivContainer.setAttribute('class','w3-container')
    ButtonTxt.setAttribute('class','button-dropdown-content-js')
    DropdownHoverDiv.setAttribute('class','w3-dropdown-click'); //w3-dropdown-hover
    DropdownContentDiv.setAttribute('class','dropdown-content-js')
    // DropdownContentDiv.setAttribute('id','contentlist'+(id));
    DropdownContentDiv.setAttribute('id',OuterHtmlDiv + (id));
    ListTxt.setAttribute('class','w3-bar-item w3-button')
    LabelTxt.setAttribute('class','label-txt-js')
    contentid = DropdownContentDiv.id
    ButtonTxt.setAttribute('onclick' , 'ShowCloseDynamicDropdownList("'+contentid+'")')

    // Define variables from array
    name = listoflists[0]
    number = listoflists[1]
    amount = listoflists[2]
    status = listoflists[3]
    date = listoflists[4]
    list = listoflists[5]


    // Assign content of each to hmtl
    stringfromlist = list.toString();// convert to string 
    formatedlist =  stringfromlist.replace(/×/g,"<br>") //insert a <br> tag note:: × is different 4m x

    ButtonTxt.innerHTML = name +" | " +amount;
    ListTxt.innerHTML = formatedlist
    LabelTxt.innerHTML = date+" | "+number+ " | "+ amount +" | "+status

    // appendChild to ....
    ListTxt.appendChild(LabelTxt);
    DropdownContentDiv.appendChild(ListTxt)
    ButtonTxt.appendChild(DropdownContentDiv);
    DropdownHoverDiv.appendChild(ButtonTxt);
    DivContainer.appendChild(DropdownHoverDiv);
    HtmlDiv.appendChild(DivContainer);
    // OriginalDiv.appendChild(HtmlDiv);
}


function CreateDynamicDropdownListWithArrayLengthOfNine  (listoflists,id,OuterHtmlDiv)
{
    let HtmlDiv = document.getElementById(OuterHtmlDiv);
    let DivContainer = document.createElement('div');
    let DropdownHoverDiv = document.createElement('div');
    let ButtonTxt = document.createElement('button') //document.createElement('label');
    let DropdownContentDiv = document.createElement('div')
    let ListTxt = document.createElement('li');
    let LabelTxt = document.createElement('label');

    // Set attributs ...
    DivContainer.setAttribute('class','w3-container')
    ButtonTxt.setAttribute('class','button-dropdown-content-js')
    DropdownHoverDiv.setAttribute('class','w3-dropdown-click'); //w3-dropdown-hover
    DropdownContentDiv.setAttribute('class','dropdown-content-js')
    DropdownContentDiv.setAttribute('id',OuterHtmlDiv + (id));
    ListTxt.setAttribute('class','w3-bar-item w3-button')
    LabelTxt.setAttribute('class','label-txt-js')
    contentid = DropdownContentDiv.id
    ButtonTxt.setAttribute('onclick' , 'ShowCloseDynamicDropdownList("'+contentid+'")')

    // Define variables from array
    name = listoflists[1]
    number = listoflists[5]
    amount = listoflists[3]
    status = listoflists[7]
    date = listoflists[4]
    list = listoflists[6]


    // Assign content of each to hmtl
    stringfromlist = list.toString();// convert to string 
    formatedlist =  stringfromlist.replace(/×/g,"<br>") //insert a <br> tag note:: × is different 4m x

    ButtonTxt.innerHTML = name +" | " +amount;
    ListTxt.innerHTML = formatedlist
    LabelTxt.innerHTML = date+" | "+number+ " | "+ amount +" | "+status

    // appendChild to ....
    ListTxt.appendChild(LabelTxt);
    DropdownContentDiv.appendChild(ListTxt)
    ButtonTxt.appendChild(DropdownContentDiv);
    DropdownHoverDiv.appendChild(ButtonTxt);
    DivContainer.appendChild(DropdownHoverDiv);
    HtmlDiv.appendChild(DivContainer);
}


/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @
    @           RECIEVED ORDERS
    @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

// ==================
function FetchOrdersDataFromServerWithArrayLengthOfSix (endpointurl,OuterHtmlDiv)
{
    /*
        Called on ::
            outer-plascon-view-by-all-div
            outer-plascon-view-by-date-div
            outer-plascon-view-by-date-today-div
            outer-plascon-view-by-this-month-div
            outer-plascon-view-by-last-month-div

    */
    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url + endpointurl,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length){alert("No results found")}
            else
                {
                    document.getElementById(OuterHtmlDiv).innerText = "";
                    let listindex = 0;
                    for (id=0; id<=results.length;id++)
                    {
                        let currentlistindex = results[listindex]
                        CreateDynamicDropdownListWithArrayLengthOfSix (currentlistindex,id,OuterHtmlDiv)
                        listindex ++;
                    }
                }
        }
        req.send();
    // setTimeout(save_show_all_data, seconds)
}


function FetchFormOrdersDataFromServerWithArrayLengthOfSix_Date (endpointurl,OuterHtmlDiv,OrdersFormId)
{
    /*
        Called on 
            outer-plascon-view-by-date-date-div only
                coz of a form 
    */
    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url + endpointurl,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length){alert("No results found")}
            else
                {
                    document.getElementById(OuterHtmlDiv).innerText = "";
                    let listindex = 0;
                    for (id=0; id<=results.length;id++)
                    {
                        let currentlistindex = results[listindex]
                        CreateDynamicDropdownListWithArrayLengthOfSix (currentlistindex,id,OuterHtmlDiv)
                        listindex ++;
                    }
                }
        }
        let date = new FormData(document.getElementById(OrdersFormId));
        req.send(date);
}


function FetchFormOrdersDataFromServerWithArrayLengthOfNine (endpointurl,OuterHtmlDiv,OrdersFormId)
{
    /*
        Called on
            outer-plascon-view-by-from-to-div
            
    */
    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url + endpointurl,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length){alert("No results found")}
            else
                {
                    document.getElementById(OuterHtmlDiv).innerText = "";
                    let listindex = 0;
                    for (id=0; id<=results.length;id++)
                    {
                        let currentlistindex = results[listindex]
                        CreateDynamicDropdownListWithArrayLengthOfNine (currentlistindex,id,OuterHtmlDiv)
                        listindex ++;
                    }
                }
        }
        let date = new FormData(document.getElementById(OrdersFormId));
        req.send(date);
}


function FetchFormOrdersDataFromServerWithArrayLengthOfNine_LastWeek (endpointurl,OuterHtmlDiv)
{
    /*
        Called on
            outer-plascon-view-by-last-week-div
            
    */
    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url + endpointurl,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length){alert("No results found")}
            else
                {
                    document.getElementById(OuterHtmlDiv).innerText = "";
                    let listindex = 0;
                    for (id=0; id<=results.length;id++)
                    {
                        let currentlistindex = results[listindex]
                        CreateDynamicDropdownListWithArrayLengthOfNine (currentlistindex,id,OuterHtmlDiv)
                        listindex ++;
                    }
                }
        }
        req.send(date);
}

// ========================================================================
// On storage
function save_show_all_data ()
{
    // let data = document.getElementById ("subdealer-show-all-tbody").innerHTML;
    let data = document.getElementById ("plascon-customer-list-div").innerHTML;

    localStorage.setItem("subdealerall", data);
    console.log("data saved well");
}

function save_by_date_today_data ()
{
    let data = document.getElementById ("subdealer-date-today-tbody").innerHTML;
    localStorage.setItem("subdealerdatetoday", data);
}
function save_date_date_data ()
{
    let data = document.getElementById ("subdealer-date-date-tbody").innerHTML;
    localStorage.setItem("subdealerdatedate", data);
}

function save_from_to ()
{
    let data = document.getElementById("subdealer-from-to-all-tbody").innerHTML;
    localStorage.setItem("subdealerfromtoall",data);
}

function save_show_last_week_all ()
{
    let data = document.getElementById ("subdealer-last-week-all-tbody").innerHTML;
    localStorage.setItem("subdealerlstweekall", data);
}

function save_show_this_month_all ()
{
    let data = document.getElementById ("subdealer-show-all-tbody").innerHTML;
    localStorage.setItem("subdealerdismthall", data);
}

function save_show_last_month_all ()
{
    let data = document.getElementById ("subdealer-last-month-all-tbody").innerHTML;
    localStorage.setItem("subdealerlstmthall", data);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function Load_subdealer_Offline_Data () 
{
    document.getElementById("plascon-customer-list-div").innerHTML = localStorage.getItem("subdealerall");
    // document.getElementById("subdealer-date-today-tbody").innerHTML = localStorage.getItem("subdealerdatetoday");
    // document.getElementById("subdealer-date-date-tbody").innerHTML = localStorage.getItem("subdealerdatedate");
    // document.getElementById("subdealer-from-to-all-tbody").innerHTML = localStorage.getItem("subdealerfromtoall")
    // document.getElementById("subdealer-last-week-all-tbody").innerHTML = localStorage.getItem("subdealerlstweekall");
    // document.getElementById("subdealer-this-month-all-tbody").innerHTML = localStorage.getItem("subdealerdismthall");
    // document.getElementById("subdealer-last-month-all-tbody").innerHTML = localStorage.getItem("subdealerlstmthall");
}


function dolist ()
{
arr = [ "WeatherGuard Black 20ltrs 30 285000 8,550,000\n× WeatherGuard2 Black 20ltrs 30 285000 8,550,000\n× Vinyl Matt Lollipop 4ltrs 10 45000 450,000\n×", "Henry2", "2020-10-28" ]
customer_list = arr[0]
list_header = arr[1] + " |" + " "+ arr[2]

document.getElementById("list-header").innerHTML = list_header
// console.log(customer_list)

document.getElementById("customer-list").innerHTML = customer_list


}



// function ShowCloseDynamicReadMore_ReadLess (dotsspanid,readmorespanid,readmorebtnid )
// function ShowCloseDynamicReadMore_ReadLess (listoflists,id)
//{
    // let dots  = dotsspanid;
    // let dots = dotsspanid;
    // let moreText = document.getElementById(readmorespanid);
    // let btnText = document.getElementById(readmorebtnid);
  
    // if (dots.style.display === "none") 
    //     {
    //         dots.style.display = "inline";
    //         btnText.innerHTML = "Read more"; 
    //         moreText.style.display = "none";
    //     } 
    // else 
    //     {
    //         dots.style.display = "none";
    //         btnText.innerHTML = "Read less"; 
    //         moreText.style.display = "inline";
    //     }

    // console.log("click event....")
    // console.log(dots);
    // console.log(moreText);
    // console.log(btnText)

//}

// function CreateDynamicReadMore_ReadLess (id)
// {
//     /*
//         <p> 111<span id="dots">...</span>
//         <span id="more"><br>22222222222222222</span></p>
//     */
//     let HtmlDiv = document.getElementById("plascon-customer-list-div");
//     let p = document.createElement('p');
//     let headingspan =  document.createElement('span');
//     let dotsspan = document.createElement('span');
//     let readmore = document.createElement('span');
//     let readmorebtn = document.createElement('button');

//     // setet attributs and append new id 
//     dotsspan.setAttribute('id','dotsspan'+(id));
//     readmore.setAttribute('id','remorespan'+(id));
//     readmorebtn.setAttribute('id','readmorebtn'+(id));
//     readmorebtn.textContent="More";

//     // get id of each element
//     dotsspanid = dotsspan.id; 
//     readmoreid = readmore.id; 
//     readmorebtnid = readmorebtn.id;

//     // console.log("btn id......cccccccccc.........")
//     // console.log(dotsspanid)
//     // console.log(readmoreid)
//     // console.log(readmorebtnid)
    
//     // readmorebtn.setAttribute('onclick','ShowCloseDynamicReadMore_ReadLess ("'+dotsspanid+','+readmoreid+','+readmorebtnid+'")');






//     headingspan.innerHTML = "Henry";
//     dotsspan.innerHTML = "..."

//     // console.log(dotsspan)
//     // console.log(readmorebtn)
//     // append children...
//     // readmorebtn.onclick = ShowCloseDynamicReadMore_ReadLess (dotsspan,readmore,readmorebtn);
//     readmore.appendChild(readmorebtn);
//     dotsspan.appendChild(readmore);
//     headingspan.appendChild(dotsspan)
//     p.appendChild(headingspan);
//     HtmlDiv.appendChild(p);
//     readmorebtn.setAttribute('onclick','ShowCloseDynamicReadMore_ReadLess ("'+dotsspanid+','+readmoreid+','+readmorebtnid+'")');

    

    // readmorebtn.setAttribute('onclick',ShowCloseDynamicReadMore_ReadLess (dotsspanid,readmoreid,readmorebtnid));
    
    
    // readmorebtn.setAttribute('onclick',ShowCloseDynamicReadMore_ReadLess("dotsspan","remorespan","readmorebtn"));
    // readmorebtn.setAttribute('onclick','ShowCloseDynamicReadMore_ReadLess ("'+dotsspan+','+remorespan+','+readmorebtn+'")');

    // $('#readmorebtn').on('click', function (){ShowCloseDynamicReadMore_ReadLess (dotsspan,readmore,readmorebtn)});
    // readmorebtn.setAttribute('onclick',ShowCloseDynamicReadMore_ReadLess (dotsspanid,readmoreid,readmorebtnid));

    // setTimeout(save_show_all_data, seconds)

//     for(let i =0;i<7;i++)
// {
//     re = document.getElementById("plascon-customer-list-div").innerHTML +='<form" method="get"><input type="text" id="in'+i+++'" size="12%"><input type="text" id="in'+i+++'" size="12%" ><input type="text" id="in'+i+++'"size="12%"><input type="text" id="in'+i+++'"size="10%" ><input type="text" id="in'+i+++'"size="10%"><input type="text" id="in'+i+++'" size="10%"><input type="text" id="in'+i+++'"size="12%"></form>'      
//     console.log(re)
// }

//}

