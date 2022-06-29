document.addEventListener('alpine:init', () => {

    Alpine.data('greetWidget', function () {

        return {
            name: '',
            message: '',
            greetMe() {
                const greetingMessage = greet(this.name)
                this.message = greetingMessage;
                setTimeout(() => {
                    this.message = '';
                }, 3000);
            }
        }

    });

})

