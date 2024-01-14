module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define("User",{
        Nome:{
            type: DataTypes.STRING,
            allowNull: false, 
            validade: {
                notEmpty: true
            }
        },
        Idade:{
            type: DataTypes.INTEGER,
            allowNull: false, 
            validade: {
                notEmpty: true
            }
        }
    })

    return User;
}