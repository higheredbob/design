
  $(document).ready(function(){
          $.fn.serializeObject = function()
              {
               var o = {};
               var a = this.serializeArray();
               $.each(a, function() {
                   if (o[this.name]) {
                       if (!o[this.name].push) {
                           o[this.name] = [o[this.name]];
                       }
                       o[this.name].push(this.value || '');
                   } else {
                       o[this.name] = this.value || '';
                   }
               });
               return o;
              };
            var form = $('form#nicely_form'),
              url = 'https://script.google.com/macros/s/AKfycbwF92hwC80euuZJu24PxaQ0dFlf_KxvDFnM5YVFPphve3TKcpg/exec';
              form.submit(function(e){
                e.preventDefault();
              var jqxhr = $.ajax({
                url: url,
                method: "GET",
                dataType: "json",
                data: form.serializeObject()
              });
                $(".thanks").html("Thank you for getting in touch!").css("font-size","4rem");
                document.getElementById('nicely_form').reset();
              });
            });
