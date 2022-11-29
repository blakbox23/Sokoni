import Dropdown from 'react-bootstrap/Dropdown';
import useUserContext from '../contexts/usersContext/userHooks/useUserContext';

type username ={
    username: string
}

function UserDropdown({ username }: username) {
  
  const {dispatch } = useUserContext();

 
  function logout(){
    console.log('logged out')
    dispatch({
      type: 'logout',
      payload: null
  })
  }

  return (
    <Dropdown className = "me-3" >
      <Dropdown.Toggle variant="outline" id="dropdown-basic">
        {username}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2">Edit profile</Dropdown.Item>
        {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
        <Dropdown.Item onClick={()=>logout()}>Log out</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
  );
}

export default UserDropdown;