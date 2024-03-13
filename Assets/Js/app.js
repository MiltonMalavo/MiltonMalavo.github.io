window.addEventListener("load",()=>obterDados())
function obterDados(){

$.ajax({
    url:"https://catalogo.macoratti.net/api/1/Categorias",
    method:"GET",
    success:(data)=>{
        console.log(data)
        $("#dados").empty()
        let prod =""
        let _quantidade = data.length;
        let valor_alertorio = Math.floor(Math.random()*_quantidade)
        let imagem = data[valor_alertorio].imagemUrl
        //$("#banner").css({"background-image": "url('"+imagem+"')"})
        $("#banner").css({"background": "linear-gradient(45deg,#000,Transparent), url('"+imagem+"') no-repeat fixed center"})
        //alert(data[valor_alertorio].imagemUrl)
        data.forEach(Element => {
                let valor = Math.floor(Math.random()*50000)
                prod = "<div class='card-produtos'>"
                prod += "<img src='"+Element.imagemUrl+"'"+"/>"
                prod +="<p class='titulo'>"+Element.nome+"</p>"
                prod +="<p>"+valor+" kz "+"</p>"
                prod +="</div>"
                
            $("#dados").append(prod)
        });
    },
    error:()=>{

    }
})
}