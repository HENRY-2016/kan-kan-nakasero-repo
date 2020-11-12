


function HideAllVeiwDivs ()
{
    document.getElementById('plascon-subdealer-view-all-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-date-div').style.display='none'
    document.getElementById('plascon-subdealer-orders-by-from-to-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-last-week-div').style.display='none';
    document.getElementById('plascon-subdealer-orders-by-this-month-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-last-month-div').style.display = 'none';
}

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
