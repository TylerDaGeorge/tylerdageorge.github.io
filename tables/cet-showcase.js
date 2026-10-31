/* Product-card shortcuts; existing CET application remains source of truth. */
document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('[data-cet-style]').forEach(function(link){
    link.addEventListener('click',function(){
      var selector=document.getElementById('cet-type');
      if(!selector)return;
      var desired=link.getAttribute('data-cet-style');
      if(selector.value!==desired){selector.value=desired;selector.dispatchEvent(new Event('change',{bubbles:true}));}
    });
  });
});
