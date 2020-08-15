module.exports = function (sequelize, DataTypes) {
    // creates owner table
    var Owner = sequelize.define("Owner", {
        // adds owner name
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        // adds phone number and makes sure it is 10 numbers in length
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [10, 10]
            }
        },
        //  adds email and makes sure it is in proper email format **@.**
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }



    });
    return Owner;
}