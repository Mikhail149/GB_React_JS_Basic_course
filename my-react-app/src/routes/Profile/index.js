import { useSelector, useDispatch } from 'react-redux';
import { profileChangeShowName } from '../../store/profile/action';
import { getUserFromProfile, getShowStatusFromProfile } from '../../store/profile/selector';
import { getUser } from '../../store/User/selector';

export const Profile = () => {
  const dispatch = useDispatch();
  const showName = useSelector(getShowStatusFromProfile);
  const user = useSelector(getUser);

  const setShowName = () => {
    dispatch(profileChangeShowName())
  }

  return (
    <div>
      <h4>Profile</h4>
      <label>Показать имя пользователя?</label>
      <input
        type='checkbox'
        checked={showName}
        value={showName}
        onChange={setShowName} />
      {showName && <div>Имя пользователя: {user}</div>}
    </div>
  )
}