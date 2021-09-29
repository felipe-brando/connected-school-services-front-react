import { useSelector } from "react-redux";
import TextEditor from '../TextEditor/TextEditor';

const AddHomeworks = () => {

    const teacherClassList = useSelector((state) => state.user.teacherClassList);
    const userRole = useSelector((state) => state.user.roles);
    const teacherId = useSelector((state) => state.user.userId);
    const teacherDiscipline = useSelector((state) => state.user.discipline);

    console.log(teacherClassList, userRole, teacherId,teacherDiscipline);



    return (
        <></>
        // <form className="addHomeworks__form" onSubmit={handleSubmitForm} >

        //     <h3>Devoir de ...matière...</h3>

        //     <select
        //         required
        //         className="addAnnounce__form--select"
        //         onChange={handleSelectChange}
        //     >
        //         <option value="">Selectionner une classe</option>
        //         {
        //             categoryList.map((categoryObject) => (
        //                 <option value={categoryObject.id} key={categoryObject.id} data-id={categoryObject.id}>
        //                     {categoryObject.name}
        //                 </option>
        //             )
        //             )}

        //     </select>

        //     <label className="addAnnounce__form--label" htmlFor="content">Contenu </label>
        //     <TextEditor />
        //     {/* modifier les options du text editor enlever image etc */}



        //     <input type="submit" />

        // </form>
    );

}

export default AddHomeworks;