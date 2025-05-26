const { app } = require('@azure/functions');

app.http('httpTrigger1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (req, context) => {
        const numeros = [1, 2, 3, 4, 5]; // Ejemplo de números a sumar
        const resultado = numeros.reduce((acc, num) => acc + num, 0);
        context.log(`Suma de los números: ${resultado}`);

        return {
            status: 200,
            body: `La suma de los números es ${resultado}`,
        };
    }
});
