        
        const Semestral= document.querySelector('.Semestral');
        const form = document.querySelector('#piramide-form');
        const name = document.querySelector('#name');
        const piramide = document.querySelector('#piramide');
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
