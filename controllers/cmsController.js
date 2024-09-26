const Page = require('../models/Page');

// Create a new page
exports.createPage = async (req, res) => {
  const { title, description, seoKeywords, banners } = req.body;

  try {
    const newPage = await Page.create({
      title,
      description,
      seoKeywords,
      banners
    });
    res.status(201).json({ message: 'Page created successfully', page: newPage });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all pages
exports.getAllPages = async (req, res) => {
  try {
    const pages = await Page.findAll();
    res.status(200).json(pages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a single page by ID
exports.getPageById = async (req, res) => {
  const { id } = req.params;

  try {
    const page = await Page.findByPk(id);
    if (!page) return res.status(404).json({ message: 'Page not found' });
    res.status(200).json(page);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updatePage = async (req, res) => {
  const { id } = req.params;
  const { title, description, seoKeywords, banners } = req.body;

  try {
    const page = await Page.findByPk(id);
    if (!page) return res.status(404).json({ message: 'Page not found' });

    page.title = title || page.title;
    page.description = description || page.description;
    page.seoKeywords = seoKeywords || page.seoKeywords;
    page.banners = banners || page.banners;

    await page.save();
    res.status(200).json({ message: 'Page updated successfully', page });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a page by ID
exports.deletePage = async (req, res) => {
  const { id } = req.params;

  try {
    const page = await Page.findByPk(id);
    if (!page) return res.status(404).json({ message: 'Page not found' });

    await page.destroy();
    res.status(200).json({ message: 'Page deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
