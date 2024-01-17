import { useRef } from "react";
import useAction from "../hooks/useAction";
import useTypedSelector from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
    const searchRef = useRef<HTMLInputElement | null>(null);
    const {searchRepositories} = useAction();
    const {data, error, loading} = useTypedSelector(state=>state.repositories);

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const term = searchRef.current?.value || "";

        searchRepositories(term)
    }

    console.log(data);
    
    return ( <div>
        <form action="" onSubmit={onSubmitHandler}>
            <input type="text" ref={searchRef} />
            <button type="submit">Submit</button>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading && data.map((item, index) => <div key={index}>{item}</div>) }
        </form>
    </div> );
}
 
export default RepositoriesList;