
const {Model} = require('sequelize');

// Definition of the Score model:

module.exports = (sequelize, DataTypes) => {

    class Score extends Model {}

    Score.init({
            score: {
                type: DataTypes.INTEGER,
            }
        }, {
            sequelize
        }
    );

    return Score;
};
