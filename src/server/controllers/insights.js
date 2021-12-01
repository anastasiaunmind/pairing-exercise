const DAO = require("../libs/dao");

module.exports = (req, res) => {
    const records = DAO.getItems();

    res.send(records);
};