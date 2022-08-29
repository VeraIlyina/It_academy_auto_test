const axios = require('axios');
const { Validator } = require('jsonschema');
const bookingDotComSchema = require('./data/bookingDotComSchema.json');
const sendHttpRequest = require('./sendHttpRequest');

const validator = new Validator();

describe(`API booking.com tests`, function() {

    test(`Search hotels by coordinates should status code equal 200`, async () => {

        const response = await axios.get('https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates', {
            params: {
                order_by: 'popularity',
                adults_number: '2',
                units: 'metric',
                room_number: '1',
                checkout_date: '2022-10-01',
                filter_by_currency: 'AED',
                locale: 'en-gb',
                checkin_date: '2022-09-30',
                latitude: '65.9667',
                longitude: '-18.5333',
                children_number: '2',
                children_ages: '5,0',
                categories_filter_ids: 'class::2,class::4,free_cancellation::1',
                page_number: '0',
                include_adjacency: 'true'
            },
            headers: {
                'X-RapidAPI-Key': '9c6e48fe49msha6933f511c66923p19b070jsncd6094d8ff9e',
                'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
            }
        });

        await expect(response.status).toEqual(200)

    });


    test(`Nearby cities should status code equal 200`, async () => {

        const response = await axios.get('https://booking-com.p.rapidapi.com/v1/hotels/nearby-cities', {
            params: {latitude: '65.9667', longitude: '-18.5333', locale: 'en-gb'},
            headers: {
                'X-RapidAPI-Key': '9c6e48fe49msha6933f511c66923p19b070jsncd6094d8ff9e',
                'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
            }
        });

        await expect(response.status).toEqual(200);

    });


    it('Response of GET /books?limit=2 should have appropriate json schema', async () => {

        const response = await axios ({
            method: 'GET',
            url: 'https://booking-com.p.rapidapi.com/v1/hotels/reviews-filter-metadata',
            params: {locale: 'en-gb', hotel_id: '1676161'},
            headers: {
                'X-RapidAPI-Key': '9c6e48fe49msha6933f511c66923p19b070jsncd6094d8ff9e',
                'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
            }
        });

        let validationResult = await validator.validate(response.data, bookingDotComSchema);
        expect(validationResult).toEqual(validationResult);

    });

    let resp;
    test(`send http request method test`, async() => {

        const config = {
            url: 'https://booking-com.p.rapidapi.com/v1/hotels/reviews-filter-metadata',
            params: {locale: 'en-gb', hotel_id: '1676161'},
            headers: {
                'X-RapidAPI-Key': '9c6e48fe49msha6933f511c66923p19b070jsncd6094d8ff9e',
                'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
            }
        };

        resp = await sendHttpRequest(config);
        await expect(resp.status).toEqual(200);

    });

});