import CRUDService from '../services/CRUDService'
let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}
let postCRUD = async (req, res) => {
    await CRUDService.createNewUser(req.body);
    return res.send('asdasfafs');
}


// object: {
//     key: '',
//     value: ''
// }
module.exports = {
    getHomePage,
    getAboutPage,
    getCRUD,
    postCRUD
}
