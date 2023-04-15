// CASO DE USO ELSE IF
//PREGUNTAS DE PREFERENCIAS EN ESTILO DE ROPA
//1. Eres hombre o mujer (h/m)
//2. Buscas un outfit casual (si/no)
//3. Es temporada de calor (si/no)
//4. Te gustaría un outfit colorido (si / no)

var sexo = prompt('¿Cuál es tu género? (H / M)');
var casual = prompt('¿Buscas un outfit casual? (si / no)');
var temporada = prompt('¿Es temporada de calor (si / no)?');
var color = prompt('¿Te gustaría un outfit colorido? (si / no)');


if (sexo== "M") {
    if (casual== "si"){
        if (temporada == "si" && color == "si"){
            document.write ("<img src='https://cursodeorganizaciondelhogar.com/wp-content/uploads/2016/05/Ideas-de-outfits-para-primavera-2016-11.jpg'>")
        } 
        else if (temporada == "si" && color == "no"){
            document.write ("<img src='https://www.myoutfie.com/historias/wp-content/uploads/2020/01/como-combinar-un-vestido-negro-5-1-683x1024.jpg'>")
        }
        else if (temporada == "no" && color == "si"){
            document.write ("<img src='https://i.pinimg.com/originals/4d/e2/56/4de256badb64b67a57a469d94b91d61b.png'>")

        }else {
            document.write ("<img src='https://i.pinimg.com/originals/57/9d/41/579d41e2bd7ef30443eadae8431930fb.jpg'>")
        }
    }
    else if (casual== "no"){
        if (temporada == "si" && color == "si"){
            document.write ("<img src='https://i.pinimg.com/originals/27/fc/03/27fc03edeeafd9635c1c5f3cb3cb4433.jpg'>")
        } 
        else if (temporada == "si" && color == "no"){
            document.write ("<img src='https://i.pinimg.com/originals/92/06/19/9206193c21f8386d81c64f227ae421e7.jpg'>")
        }
        else if (temporada == "no" && color == "si"){
            document.write ("<img src='https://i.pinimg.com/originals/b2/d4/1e/b2d41e4f3c6412e3d4f563b399cc54ed.jpg'>")

        }else {
            document.write ("<img src='https://i.pinimg.com/564x/6b/56/85/6b5685c387c10ed7203b432576619c49.jpg'>")
        }}
    else document.write ("No tenemos propuestas de tu estilo")

} else if (sexo == "H"){
    if (casual== "si"){
        if (temporada == "si" && color == "si"){
            document.write ("<img src='https://i.pinimg.com/originals/c1/9c/b6/c19cb6b90430a4e2591dbb28c05c3369.jpg'>")
        } 
        else if (temporada == "si" && color == "no"){
            document.write ("<img src='https://comoorganizarlacasa.com/wp-content/uploads/2017/04/34-outfits-primavera-verano-hombres-3.jpg'>")
        }
        else if (temporada == "no" && color == "si"){
            document.write ("<img src='https://seruncaballero.com/wp-content/uploads/2020/12/outfit_navidad_ano_nuevo_hombre1v2_500x486.jpg'>")

        }else {
            document.write ("<img src='https://cdn-0.somosmamas.com.ar/wp-content/uploads/2020/12/outfit-casual-hombre-8.jpg'>")
        }
    }
    else if (casual== "no"){
        if (temporada == "si" && color == "si"){
            document.write ("<img src='https://cdn.shopify.com/s/files/1/1040/3466/files/114A51D4-4D3D-4EDB-82A5-DFF5FC0CB904_480x480.jpg?v=1656030853'>")
        } 
        else if (temporada == "si" && color == "no"){
            document.write ("<img src='https://outfits.tips/wp-content/uploads/2021/07/outfit-casual-hombre-total-black-con-accesorios.jpg'>")
        }
        else if (temporada == "no" && color == "si"){
            document.write ("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4Hj11rz5zMEnwoVoEwMiKE3dweTTaX0o4jmb-IidHZmBLqmDepViS7Df_dogWaLjImI&usqp=CAU'>")

        }else {
            document.write ("<img src='https://cdn.shopify.com/s/files/1/1040/3466/files/blog_9b9c321e-e8f9-46d8-be5e-e5494b047292_large.jpg?v=1578613279'>")
        }
    }
    else document.write ("No tenemos propuestas de tu estilo")
}