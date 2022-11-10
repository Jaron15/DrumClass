import CategoryContext from './category-context';

const CategoryProvider = props => {
 

    return (
        <CategoryContext.Provider value={CategoryContext}>
            {props.children}
        </CategoryContext.Provider>
    )
}
export default CategoryProvider;