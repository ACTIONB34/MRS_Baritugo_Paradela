$.each(res, function(key, value) {

  $("#coupon_data").show();
   var html = '<div class="alert alert-success">' +
    '<h4>Promotion Details</h4>' +
    '<hr>' +
    '<p>Promotion: ' + res.promo_name + '</p>' +
    '<p>Discount type: ' + res.discount_type + '</p>' +
    '<p>Amount: ' + res.discount + '%</p>' +
    '<p>Products: ' + (res.products ? res.products.length : 0) + '</p><p>Details:</p>';
    
    if (res.products) {
      for (var i = 0, {length} = res.products; i < length; i++) {
        html += '<p><b>Name:</b>' + res.products[i].name + '</p>';
      }
    }
    
  $("#coupon_details").html(html);
});