const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Page = sequelize.define('Page', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  seoKeywords: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  banners: {
    type: DataTypes.JSON, // Store multiple banner URLs
    allowNull: true,
  },
});

module.exports = Page;
