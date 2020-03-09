<?php 

/**
 * @author Kashyap Team
 * @copyright Copyright (c) 2018 Kashyap (softwarekashyap@gmail.com)
 * @package Kashyap_CategorySidebar
*/

namespace Kashyap\CategorySidebar\Model\Config\Source;

class Depth implements \Magento\Framework\Option\ArrayInterface {

    /**
     * Return array of options as value-label pairs
     *
     * @return array Format: array(array('value' => '<value>', 'label' => '<label>'), ...)
     */
    public function toOptionArray() 
    {
        return [
            [
                'value' => 1,
                'label' => __('1'),
            ],
            [
                'value' => 2,
                'label' => __('2'),
            ],
            [
                'value' => 3,
                'label' => __('3'),
            ],
            [
                'value' => 4,
                'label' => __('4'),
            ],
            [
                'value' => 5,
                'label' => __('5'),
            ],			
        ];
    }
}