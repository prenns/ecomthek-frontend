import {getAllCategoryShopsystems, getAllCategorySlugs } from "../lib/api/software-categories"
import { getAllSoftwareSlugs } from "../lib/api/software";

export default async function sitemap() {


    const categorySlugs = await getAllCategorySlugs();
    const categoryShopSystems = await getAllCategoryShopsystems();
    const softwares = await getAllSoftwareSlugs();

    let siteMapArray = [];

    //Add all category pages
    categorySlugs.map(category=> {
        siteMapArray.push({
            url: `https://ecomthek.com/software/kategorie/${category.slug}`,
            changeFrequency: 'weekly',
            priority: 1,
            lastModified: new Date()
        })
    });

    //add all categoryshopsystem pages
    categoryShopSystems.map(categoryShopSystem=> {
        
        siteMapArray.push({
            url: `https://ecomthek.com/software/kategorie/${categoryShopSystem.software_category.slug}/${categoryShopSystem.software.slug}`,
            changeFrequency: 'weekly',
            priority: 1,
            lastModified: new Date()
        })
    });

    //add all tool pages
    softwares.map(software=> {
        siteMapArray.push({
            url: `https://ecomthek.com/software/tool/${software.slug}`,
            changeFrequency: 'weekly',
            priority: 1,
            lastModified: new Date()
        })
    });


    return siteMapArray;
  }