$(document).ready(function () {
    $('.dropdown-toggle').dropdown()
});

var currentSort, sortId;
$('.sorting-algorithm').on('click', function () {
    sortId = $(this).data('sort');
    $.getJSON('../config.json', findCurrentSort);
});

function findCurrentSort(data) {
    data.forEach((data) => {
        if (data.id == sortId)
            currentSort = data;
    })
    $('.current-sort').text(currentSort.sortName)
}