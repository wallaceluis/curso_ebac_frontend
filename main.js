    const form = document.getElementById('form-received');
    let minShirts = document.getElementById('min-shirts');
    let maxShirts = document.getElementById('max-shirts');
    let description = document.getElementById('description');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const minShirtsValue = parseFloat(minShirts.value);
        const maxShirtsValue = parseFloat(maxShirts.value);
        const receivedshirts = (maxShirtsValue - minShirtsValue)
        const receivedmessage = `Foi solicitada a entrega de ${receivedshirts} camisas`

        if (receivedshirts >= 0) {
            const containerReceivedMessage = document.querySelector ('.received-message');
            containerReceivedMessage.innerHTML = receivedmessage;
            containerReceivedMessage.style.display = 'block'
            
            minShirts.value = '';
            maxShirts.value = '';
            description.value = '';

        } else {
            minShirts.style.border = '1px solid red'
            document.querySelector ('.error-message').style.display = 'block'
        }
        })

    function validarQuantidades() {
        const minShirtsValue = parseFloat(minShirts.value);
        const maxShirtsValue = parseFloat(maxShirts.value);
    
        if (minShirtsValue < maxShirtsValue) {
            minShirts.classList.remove('error');
            document.querySelector('.error-message').style.display = 'none';
        } else {
            minShirts.classList.add('error');
            document.querySelector('.error-message').style.display = 'block';
        }
    }
    
    minShirts.addEventListener('keyup', validarQuantidades);
    maxShirts.addEventListener('keyup', validarQuantidades);