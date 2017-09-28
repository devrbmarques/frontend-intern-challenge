(function main() {
    // evento de click que transforma o link original no link curto
    document.querySelector(".typelinks-btn").addEventListener("click", function(){    
        var input = document.querySelector(".typelinks-input");
        var button = document.querySelector(".typelinks-btn");
    
        if (input.getAttribute("class").indexOf("active") > -1) return 0;
        
        // via ajax
        var new_value = "http://ch.dc/axf";
    
        input.value = new_value;
        button.value = "COPIAR";
    
        var oldClass = input.getAttribute("class");
        var newClass = oldClass + " " + "active";
        input.setAttribute("class", newClass);
    
        var oldClass = button.getAttribute("class");
        var newClass = oldClass + " " + "active";
        button.setAttribute("class", newClass);
    }); 

    var params = {
        async: true,
        crossDomain: true,
        url: "//www.encurta.top:3000/urls",
        type: "GET"
    };

    // pega o json de top 5 e alimenta o html
    // ajax to add to cart
    $.ajax(params).done(function (data) {
        fillTop5(data);
    }).fail(function (e) {
        console.log("falha ao capturar json");
    });
})();


function fillTop5(data) {
    var top5_list = $(".top5-list");

    for (i = 0; i < data.length; i++) {
        var item = data[i];
        var shortUrl = item.shortUrl;
        var hits = item.hits;

        var html = "";
        if (i < (data.length -1)) 
            html += '<li class="top5-item"><a href="#" class="links-hits">'+shortUrl+'</a><span class="hits">'+hits+'</span></li>';
        else
            html += '<li class="top5-item last"><a href="#" class="links-hits">'+shortUrl+'</a><span class="hits">'+hits+'</span></li>';

        
        top5_list.append(html);
    }
}
