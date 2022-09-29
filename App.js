class Contact {
    constructor(name,phone,mail){
         this.name=name,
         this.phone=phone,
         this.mail=mail

    }


}

//clase objeto de la interfaz
class UI {
    addContact(contact) {
       const contactList= document.getElementById('contact-list');
       const element = document.createElement('div');
       element.innerHTML = `
       <div class= "card text-center mb-4">
            <div class="card-body">
                <strong>Contact</strong>: ${contact.name}
                <strong>Telefono</strong>: ${contact.phone}
                <strong>Email</strong>: ${contact.mail}
                <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
            </div>
       </div>
       `;
       contactList.appendChild(element);
       

    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    deleteContact(element) {
        if(element.name==='delete' ){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('eliminado con exito !','danger')
        }


    }

    showMessage(message,cssClass) {
        const div=document.createElement('div');
        div.className=` alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function (){
            document.querySelector('.alert').remove()
        },3000);


    }
}

//eventos del DOM 
document.getElementById('contact-form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const phone =document.getElementById('phone').value;
    const mail= document.getElementById('mail').value;
    const  contact =new Contact(name,phone,mail);

    const ui = new UI();
    if(name=== '' || phone === '' || mail===''){
        return  ui.showMessage('debe completar todos los campos por favor ','info')

    }
    ui.addContact(contact);
    ui.resetForm();
    ui.showMessage('contacto agregado con exito', 'success')





    e.preventDefault();
})

document.getElementById('contact-list').addEventListener('click', function (e){
    const ui = new UI();
    ui.deleteContact(e.target);
    
})