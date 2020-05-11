



// GET /users/:userId/scores
exports.index = (req, res, next) => {

    try {
        const {user} = req.load;

        res.render('scores/index.ejs', {user});

    } catch (error) {
        next(error);
    }
};