$('#add-home').removeClass('btn-danger').addClass('btn-success');
$('.jumbotron').addClass('text-center');

// This will check for any button elements with
// the class of 'btn' AND return true/false
const $btns = $('button').hasClass('btn');

// This returns a jQuery set of new DOM elements
const $newLink = $('<br><br><a id="zillow-link" href="http://www.zillow.com">Visit Zillow.com</a>');

$('body').append($newLink);
// $newLink.appendTo($('body'));

$('#zillow-link').attr('target', '_blank');

// console.log($("#zillow-link").attr("href"));

$('#add-home').on('click', function(evt) {
  console.log(evt.target);
});


const removedHomes = [];

$('#homes tbody').on('click', 'button', function() {
  $(this).closest('tr').fadeOut(2000, function() {
    removedHomes.push($(this).remove());
  });
});

const newHomes = [
  {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
  {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
  {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
  {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
];

$('#add-home').on('click', function() {
  let newHome = newHomes.pop();
  let $newRow = $(`<tr>
                    <td>${newHome.address}</td>
                    <td>${newHome.sf}</td>
                    <td>${newHome.bedrooms}</td>
                    <td>${newHome.baths}</td>
                    <td>${newHome.price}</td>
                    <td>
                      <button class="btn btn-xs btn-danger">Remove</button>
                    </td>
                  </tr>`);
  $('#homes tbody').append($newRow);
  if (!newHomes.length) $('#add-home').attr('disabled', 'true');
})

