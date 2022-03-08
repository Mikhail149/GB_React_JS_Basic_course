import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUserWithThunk} from '../../store/users/actions';
import { CardUser } from '../../components/CardUser';
import {getLoading, getError, getUsers} from '../../store/users/selector';
import { Error } from '../../components/Error';
import { PagesList } from '../../components/PagesList';
import { ProgressLoad } from '../../components/ProgressLoad';


export const MiddleWareUsers = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getLoading);
    const error = useSelector(getError);
    const data = useSelector(getUsers);
    useEffect(() => {
        dispatch(getUserWithThunk())
    }, [])
return (
    <div>
        {
            error && <Error reload={()=>dispatch(getUserWithThunk())}></Error>
        }

        {
        data?.data?.map((user) => 
         <CardUser 
         firstName = {user.first_name} 
         lastName = {user.last_name} 
         avatar = {user.avatar} 
         email = {user.email} 
         id = {user.id}/>
        )}
  
        {
            isLoading && <ProgressLoad />
        }

        <PagesList 
        total_pages = {data.total_pages} 
        dispatch = {dispatch} 
        getUserWithThunk = {getUserWithThunk} />

    </div>
)
}