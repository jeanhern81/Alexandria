module.exports = function (sequelize, DataTypes) {
    // creates owner table
    var Property = sequelize.define("Property", {
        // creates address field
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        //  creates the city field
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        // creates field for the state abbreviation only takes to characters
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 2]
            }
        },
        // creates field for zip code , takes exactly five characters as in int
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [5, 5]
            }
        },
        //  creates field for monthly mortgage 
        mortgage: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        // creates field to store original purchase price of the property
        purchasePrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        // creates a field for the monthly rent charged
        rent: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },



    })
    // Property.associate = function (models) {
    //     Property.belongsTo(models.Owner, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     })
    // }
    return Property
}