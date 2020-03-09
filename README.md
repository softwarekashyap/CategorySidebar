# Magento 2X Category Sidebar extension
![Alt text](header.png?raw=true "Magento2 Category Sidebar")

This extension will add the ability to show category tree from a parent or current category in a sidebar. The category can be selected from the Magento2 admin config page.

## Installation without composer
* Download zip file of this extension
* Place all the files of the extension in your Magento 2 installation in the folder `app/code/Kashyap/CategorySidebar`
* Enable the extension: `php bin/magento --clear-static-content module:enable Kashyap_CategorySidebar`
* Upgrade db scheme: `php bin/magento setup:upgrade`
* Clear cache

## Configuration
* Go to the `Stores -> Configurations -> Kashyap -> Category Sidebar`
* Is Enabled : Store admin able to enabled and disabled it.
* Select Category Sidebar : Store admin able to set category sidebar ex.: Root Category, Current Category Children & Current Category PParrent Children
* Select Category Depth : Store admin able to set category sidebar level Ex. 1,2,3,4,5
* Categories will appear in column.left sidebar of the theme
* if you want to call column.right and other layout copy and paste the code in your xml file.
 `<referenceContainer name="sidebar.main" htmlTag="div" htmlClass="ks-sidebar ks-sidebar-categories">
            <block class="Kashyap\CategorySidebar\Block\CategorySidebar" name="category-sidebar" template="Kashyap_CategorySidebar::categorySidebar.phtml"/>
        </referenceContainer>`

![Alt text](Config.png?raw=true "Magento2 Category Sidebar Configuration")
---
[![Alt text](https://www.kashyapsoftware.com/pub/media/logo/stores/1/ks_logo.png "kashyapsoftware.com")](https://www.kashyapsoftware.com/)
