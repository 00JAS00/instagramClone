const {DataTypes} = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('User',{
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaltValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaltValue: DataTypes.NOW,
            allowNull:false,
        }

    },{timestamps: false})
}