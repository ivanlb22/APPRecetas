(()=>{"use strict";const e=document.querySelector("main"),t=document.getElementById("resultado-busqueda"),a=document.getElementById("input"),n=document.getElementById("paginacion"),i=document.getElementById("pagina");let c;const d=async d=>{if(d<1||d>c)return;let l=10*d-10,r=l+10;const s=await(async(e,t,a)=>{try{const n=await fetch(`https://api.edamam.com/search?q=${e}&app_id=e707a326&app_key=9052c63fa02a10ff52cb927073b93fb6&from=${t}&to=${a}`);return n.ok||console.log("Ha habido un fallo en la conexión"),await n.json()}catch(e){throw e}})(a.value,l,r);return c=Math.ceil(s.count/10),c>10&&(c=10),(a=>{e.classList.remove("inicial");let n=[];a.forEach((e=>{n+=`<div class="item">\n                                    <img src=${e.recipe.image?e.recipe.image:"./img/Error.jpg"} alt="">\n                                    <div class="flex-container">\n                                        <h2>${e.recipe.label}</h2>\n                                        <a href="${e.recipe.url}" target="_blanck" class="btn-receta">Ver receta</a>\n                                    </div>\n                                    <p class="datos-receta">Calorias: ${e.recipe.calories?Math.floor(e.recipe.calories):"No hay información"}</p>\n                                    <p class="datos-receta">Dietas: ${e.recipe.dietLabels.length>0?e.recipe.dietLabels:"No hay información "}</p>\n                                    <p class="datos-receta">${e.recipe.mealType?e.recipe.mealType:"No hay información"}</p>\n                                </div>`})),t.innerHTML=n})(s.hits),n.classList.remove("hidden"),i.innerHTML=`Página: ${d} de ${c}`,c},l=document.querySelector("form"),r=document.getElementById("btn-prev"),s=document.getElementById("btn-next"),o=document.getElementById("btn-end"),m=document.getElementById("btn-start");console.log(o,m);let p,u=1;l.addEventListener("submit",(async e=>{e.preventDefault(),p=await d(u)})),s.addEventListener("click",(()=>{s.disabled=!0,u++,d(u),s.disabled=!1})),r.addEventListener("click",(()=>{r.disabled=!0,u--,d(u),r.disabled=!1})),m.addEventListener("click",(()=>{m.disabled=!0,u=1,d(u),m.disabled=!1})),o.addEventListener("click",(()=>{o.disabled=!0,u=p,d(u),o.disabled=!1}))})();
//# sourceMappingURL=bundle.52749d51aaf8fe6d1e85.js.map