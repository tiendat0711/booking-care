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

let getDisplayCRUD = async (req, res) => {
    let data = await CRUDService.getAllUsers();
    console.log(data);
    return res.render('displayCRUD.ejs', {
        data: data
    });
}

// object: {
//     key: '',
//     value: ''
// }
module.exports = {
    getHomePage,
    getAboutPage,
    getCRUD,
    postCRUD,
    getDisplayCRUD
}
