const Semestral= document.querySelector('.Semestral');
        const form = document.querySelector('#piramide-form');
        const name = document.querySelector('#name');
        const height = document.querySelector("#height");
        const piramide = document.querySelector('#piramide');
        const array = piramide.value.split(",");
        const render = (piramidesResponse)=>
        {   let newList = '<ul>';
            for( const piramide of piramidesResponse)
            {
                newList+=`<li><a href="detalle.html?q=${piramide.id}"> ${piramide.name}</a></li>`;
            }
            newList+='</ul>'
            Semestral.innerHTML =newList;
        }

        form.addEventListener('submit',async (e)=>
        {
            e.preventDefault();
            const {data} = await axios.post('http://localhost:4567/Semestral',{name:name.value, piramide:piramide.value});
            render(data.piramides);
        });

        (async()=>{
            const {data} = await axios.get('http://localhost:4567/Semestral');
            render(data.piramides);
        })();

// const url = "http://localhost:4567/";
// const POSTUrl = "PostPyramid";
// const GET = "GetAllPyramid";
// const GETById = "GetPyramidById/";

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const array = pyramidForm.value.split(",");
//   let cont = 0;
//   for (i = 0; i < height.value; i++) {
//     cont = cont + (i + 1);
//   }

//   console.log(cont);

//   console.log(array.length);
//   if (array.length != cont) {
//     validationText.style.display = "block";
//   } else {
//     const params = {
//       pyramid: "",
//       solution: "1,2,3,4",
//     };
//     params.pyramid = pyramidForm.value;
//     POST(params);
//   }
// });

// const GETPyramids = () => {
//   const res = axios.get(url + GET);
//   console.log(res);
// };

// const GETPyramidsById = (id) => {
//   const res = axios.get(url + GETById + id);
//   console.log(res);
// };

// const POST = (params) => {
//   const res = axios.post(url + POSTUrl, params).then((response) => {
//     if (response.status === 200) {
//       console.log("SUCCES!");
//     } else "ERROR!";
//   });
//   console.log(res);
// };