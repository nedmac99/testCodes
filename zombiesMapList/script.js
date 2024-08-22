const nachtBtn = document.getElementById('nacht-der-untoten');
const nachtImageDiv = document.getElementById('nacht-img');
const verrucktBtn = document.getElementById('verrückt');
const verrucktImageDiv = document.getElementById('verrückt-img'); 
const shiBtn= document.getElementById('shi-no-numa'); 
const shiImageDiv= document.getElementById('shi-img'); 
const derBtn= document.getElementById('der-riese'); 
const derImageDiv= document.getElementById('der-img'); 


const nachtHide = () =>{ 
    nachtImageDiv.classList.toggle('hidden');
    verrucktImageDiv.className = 'hidden'; 
    shiImageDiv.className = 'hidden'; 
    derImageDiv.className = 'hidden'; 
}; 
const verrucktHide = () =>{ 
    verrucktImageDiv.classList.toggle('hidden'); 
    nachtImageDiv.className = 'hidden'; 
    shiImageDiv.className = 'hidden'; 
    derImageDiv.className = 'hidden'; 
};

const shiHide = () =>{ 
    shiImageDiv.classList.toggle('hidden'); 
    nachtImageDiv.className = 'hidden'; 
    verrucktImageDiv.className = 'hidden'; 
    derImageDiv.className = 'hidden'; 
};

const derHide = () =>{ 
    derImageDiv.classList.toggle('hidden'); 
    nachtImageDiv.className = 'hidden'; 
    verrucktImageDiv.className = 'hidden'; 
    shiImageDiv.className = 'hidden'; 
}; 

nachtBtn.addEventListener('click', nachtHide);
verrucktBtn.addEventListener('click', verrucktHide);
shiBtn.addEventListener('click', shiHide); 
derBtn.addEventListener('click', derHide);