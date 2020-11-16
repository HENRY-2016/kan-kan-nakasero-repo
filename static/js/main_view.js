


function HideAllVeiwDivs ()
{
    // =============> RETAIL
    document.getElementById('plascon-retail-view-all-div').style.display = 'none';
    document.getElementById('plascon-retail-orders-by-date-div').style.display='none'
    document.getElementById('plascon-retail-orders-by-from-to-div').style.display = 'none';
    document.getElementById('plascon-retail-orders-by-last-week-div').style.display='none';
    document.getElementById('plascon-retail-orders-by-this-month-div').style.display = 'none';
    document.getElementById('plascon-retail-orders-by-last-month-div').style.display = 'none';
    // grand child
    document.getElementById('plascon-retail-by-date-today-grand-child-div').style.display = 'none';
    document.getElementById('plascon-retail-orders-by-date-date-div').style.display = 'none';

    // =============> SUBDEALER 
    document.getElementById('plascon-subdealer-view-all-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-date-div').style.display='none'
    document.getElementById('plascon-subdealer-orders-by-from-to-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-last-week-div').style.display='none';
    document.getElementById('plascon-subdealer-orders-by-this-month-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-last-month-div').style.display = 'none';
    // grand child
    document.getElementById('plascon-subdealer-by-date-today-grand-child-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-date-date-div').style.display = 'none';
}


// ===========> RETAIL 
function ShowPlasconRetailViewAllDiv ()
{
    document.getElementById('plascon-retail-orders-by-date-div').style.display='none';
    document.getElementById('plascon-retail-orders-by-from-to-div').style.display='none';
    document.getElementById('plascon-retail-orders-by-last-week-div').style.display = 'none';
    document.getElementById('plascon-retail-orders-by-this-month-div').style.display = 'none';
    document.getElementById('plascon-retail-orders-by-last-month-div').style.display = 'none';
    document.getElementById('plascon-retail-view-all-div').style.display = 'block';

}

function ShowPlasconRetailOrdersByDateDiv ()
{
    document.getElementById('plascon-retail-view-all-div').style.display = 'none';
    document.getElementById('plascon-retail-orders-by-from-to-div').style.display='none';
    document.getElementById('plascon-retail-orders-by-last-week-div').style.display = 'none';
    document.getElementById('plascon-retail-orders-by-this-month-div').style.display = 'none';
    document.getElementById('plascon-retail-orders-by-last-month-div').style.display = 'none';
    document.getElementById('plascon-retail-orders-by-date-div').style.display='block';

}

function ShowPlasconRetailOrdersByFromToDiv ()
{
    document.getElementById('plascon-retail-view-all-div').style.display = 'none';
    document.getElementById('plascon-retail-orders-by-date-div').style.display='none';
    document.getElementById('plascon-retail-orders-by-last-week-div').style.display = 'none';
    document.getElementById('plascon-retail-orders-by-this-month-div').style.display = 'none';
    document.getElementById('plascon-retail-orders-by-last-month-div').style.display = 'none';
    document.getElementById('plascon-retail-orders-by-from-to-div').style.display='block';
}
function ShowPlasconRetailOrdersByLastWeekDiv ()
{
    document.getElementById('plascon-retail-view-all-div').style.display = 'none';
    document.getElementById('plascon-retail-orders-by-date-div').style.display='none';
    document.getElementById('plascon-retail-orders-by-from-to-div').style.display='none';
    document.getElementById('plascon-retail-orders-by-this-month-div').style.display = 'none';
    document.getElementById('plascon-retail-orders-by-last-month-div').style.display = 'none';
    document.getElementById('plascon-retail-orders-by-last-week-div').style.display = 'block';
}

function ShowPlasconRetailOrdersByThisMonthDiv ()
{
    document.getElementById('plascon-retail-view-all-div').style.display = 'none';
    document.getElementById('plascon-retail-orders-by-date-div').style.display='none';
    document.getElementById('plascon-retail-orders-by-from-to-div').style.display='none';
    document.getElementById('plascon-retail-orders-by-last-week-div').style.display = 'none';
    document.getElementById('plascon-retail-orders-by-last-month-div').style.display = 'none';
    document.getElementById('plascon-retail-orders-by-this-month-div').style.display = 'block';
}

function ShowPlasconRetailOrdersByLastMonthDiv ()
{
    document.getElementById('plascon-retail-view-all-div').style.display = 'none';
    document.getElementById('plascon-retail-orders-by-date-div').style.display='none';
    document.getElementById('plascon-retail-orders-by-from-to-div').style.display='none';
    document.getElementById('plascon-retail-orders-by-last-week-div').style.display = 'none';
    document.getElementById('plascon-retail-orders-by-this-month-div').style.display = 'none';
    document.getElementById('plascon-retail-orders-by-last-month-div').style.display = 'block';
}

// Grand children
function ShowPlasconRetailByDateTodayGrandChildDiv ()
{document.getElementById('plascon-retail-orders-by-date-date-div').style.display = 'none';document.getElementById('plascon-retail-by-date-today-grand-child-div').style.display = 'block';}

function ShowPlasconRetailOrdersByDateDateDiv ()
{document.getElementById('plascon-retail-by-date-today-grand-child-div').style.display = 'none';document.getElementById('plascon-retail-orders-by-date-date-div').style.display = 'block';}


// ==================>> SUBDEALER 
function ShowPlasconSubdealerViewAllDiv ()
{
    document.getElementById('plascon-subdealer-orders-by-date-div').style.display='none';
    document.getElementById('plascon-subdealer-orders-by-from-to-div').style.display='none';
    document.getElementById('plascon-subdealer-orders-by-last-week-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-this-month-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-last-month-div').style.display = 'none';
    document.getElementById('plascon-subdealer-view-all-div').style.display = 'block';

}

function ShowPlasconSubdealerOrdersByDateDiv ()
{
    document.getElementById('plascon-subdealer-view-all-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-from-to-div').style.display='none';
    document.getElementById('plascon-subdealer-orders-by-last-week-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-this-month-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-last-month-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-date-div').style.display='block';

}

function ShowPlasconSubdealerOrdersByFromToDiv ()
{
    document.getElementById('plascon-subdealer-view-all-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-date-div').style.display='none';
    document.getElementById('plascon-subdealer-orders-by-last-week-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-this-month-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-last-month-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-from-to-div').style.display='block';
}
function ShowPlasconSubdealerOrdersByLastWeekDiv ()
{
    document.getElementById('plascon-subdealer-view-all-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-date-div').style.display='none';
    document.getElementById('plascon-subdealer-orders-by-from-to-div').style.display='none';
    document.getElementById('plascon-subdealer-orders-by-this-month-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-last-month-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-last-week-div').style.display = 'block';
}

function ShowPlasconSubdealerOrdersByThisMonthDiv ()
{
    document.getElementById('plascon-subdealer-view-all-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-date-div').style.display='none';
    document.getElementById('plascon-subdealer-orders-by-from-to-div').style.display='none';
    document.getElementById('plascon-subdealer-orders-by-last-week-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-last-month-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-this-month-div').style.display = 'block';
}

function ShowPlasconSubdealerOrdersByLastMonthDiv ()
{
    document.getElementById('plascon-subdealer-view-all-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-date-div').style.display='none';
    document.getElementById('plascon-subdealer-orders-by-from-to-div').style.display='none';
    document.getElementById('plascon-subdealer-orders-by-last-week-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-this-month-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-last-month-div').style.display = 'block';
}

// Grand children
function ShowPlasconSubdealerByDateTodayGrandChildDiv ()
{document.getElementById('plascon-subdealer-orders-by-date-date-div').style.display = 'none';document.getElementById('plascon-subdealer-by-date-today-grand-child-div').style.display = 'block';}

function ShowPlasconSubdealerOrdersByDateDateDiv ()
{document.getElementById('plascon-subdealer-by-date-today-grand-child-div').style.display = 'none';document.getElementById('plascon-subdealer-orders-by-date-date-div').style.display = 'block';}