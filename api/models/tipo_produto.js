const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes, nomeTable = 'tipo_produto') => {
  class TipoProduto extends Model {}

  TipoProduto.init(
    {
      descricao: DataTypes.STRING,
      ativo: DataTypes.BOOLEAN,
      criado_em: DataTypes.DATE,
      criado_por_id_usuario: DataTypes.INTEGER,
      alterado_em: DataTypes.DATE,
      alterado_por_id_usuario: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: nomeTable,
      timestamps: false,
    },
  );
  return TipoProduto;
};
