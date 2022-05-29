const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const travel = (req, res) => {
    pageTitle = process.env.TRAVEL_TITLE + ' - Travel';
    res.render('travel', {title: pageTitle, trips});
};

module.exports = {
    travel
}