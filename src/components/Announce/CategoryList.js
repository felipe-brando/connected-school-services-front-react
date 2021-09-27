import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CategoryList = () => {
    const islogged = useSelector((state) => state.user.logged);
    const userRole = useSelector((state) => state.user.roles);
    const categoryList = useSelector((state) => state.announce.categoryList);
    const newCategoryInputValue = useSelector((state) => state.announce.newCategoryInputValue);

    //console.log(userRole);

    const handleChangeCategoryInput = (e) => {
        dispatch({
            type: 'CHANGE_INPUT_CATEGORY',
            value: e.target.value,
        })
    }

    const handleSubmitNewCategory = () => {
        console.log('submit de nouvelle catégorie à faire');
    }

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('USEFF categLis');
        dispatch({
            type: 'GET_CATEGORY_LIST'
        })
    }, [islogged])

    return (<>
        {
            islogged ?
                <section className="categoryList">
                    <ul>
                        {categoryList.map((category) => {
                            return (
                                <li key={category.id}>{category.name}
                                    <button>Modifier</button>
                                    <button>Effacer</button>
                                </li>
                            )
                        })}
                    </ul>
                    <form onSubmit={handleSubmitNewCategory}>
                        <input
                            onChange={handleChangeCategoryInput}
                            value={newCategoryInputValue}
                            type="text"
                            name="addCategory"
                            id="addCategory"
                        />
                        <input type="submit" value="ajouter" />
                    </form>
                </section> :
                <h1>Vous n'êtes pas autorisé à afficher cette page</h1>
        }
    </>
    )
}

export default CategoryList