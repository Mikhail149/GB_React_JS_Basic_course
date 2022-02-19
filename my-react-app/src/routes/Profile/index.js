import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_PROFILE_SHOW_NAME } from '../../store/profile/action';

export const Profile = () => {
  const dispatch = useDispatch();
  const showName = useSelector((state) => state.showName);
  const user = useSelector((state) => state.user);

  const setShowName = () => {
    dispatch({
      type: CHANGE_PROFILE_SHOW_NAME
    })
  }

  return (
    <div>
      <h4>Profile</h4>
      <input
        type='checkbox'
        checked={showName}
        value={showName}
        onChange={setShowName} />
      {showName && <div>Имя пользователя: {user}</div>}
    </div>
  )
}