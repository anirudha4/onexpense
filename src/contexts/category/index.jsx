import { COLLECTIONS } from '@config/collections';
import { useCollection, useUser } from '@hooks';
import React, { createContext, useCallback, useMemo } from 'react'

export const CategoryContext = createContext();
const CategoryProvider = ({ children }) => {
    const { user } = useUser();
    const { entries: categories } = useCollection(COLLECTIONS.CATEGORIES(user.id));

    const categoriesById = useMemo(() => {
        const byId = {};
        categories.forEach(category => byId[category.id] = category);
        return byId;
    }, [categories]);

    const getCategoryById = useCallback((id) => categoriesById[id], [categoriesById]);
    return (
        <CategoryContext.Provider value={{ categories, getCategoryById }}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider;