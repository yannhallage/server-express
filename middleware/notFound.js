

const NotFound = (req, res ,next) => {
    res.status(404).json({
        message: "Page Not found !"
    })
}

module.exports = NotFound