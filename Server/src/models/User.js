const {DataTypes} = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('User',{
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
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
            defaultValue: DataTypes.NOW,
            allowNull:false,
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    },{timestamps: false})
}