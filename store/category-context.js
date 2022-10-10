import React from 'react';

const CategoryContext = React.createContext({
    categories: [ {
        catName: 'paradiddles',
        subCats: ['single paradiddle', 'double paradiddle', 'triple paradiddle']
    },
    {
    catName: 'rolls',
    subCats: ['single stroke roll', 'double stroke roll', 'triple stroke roll']
    },
    {
    catName: 'hands',
    subCats: ['hand speed', 'hand independence', 'weak hand']
    },
    {
    catName: 'feet',
    subCats: ['kick speed', 'foot technique', 'left foot', 'double bass']
    },
    {
    catName: 'fills',
    subCats: ['beginner fills', 'intermediate fills', 'Advanced fills', ]
    },

]
})

export default CategoryContext;