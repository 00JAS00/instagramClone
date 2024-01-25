const {DataTypes} = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('post',{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        
        description:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        image:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
          },
    })
}