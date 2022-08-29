const axios = require("axios");

describe(`Card validator tests`, function() {

    test(`Validate Credit Card Number method should be equal 'POST'`, async () => {

        const response = {
            method: 'POST',
            url: 'https://card-validator.p.rapidapi.com/validate',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '9c6e48fe49msha6933f511c66923p19b070jsncd6094d8ff9e',
                'X-RapidAPI-Host': 'card-validator.p.rapidapi.com'
            },
            data: '{"cardNumber":"34"}'
        };

        await expect(response.method).toEqual('POST')

    });
});
